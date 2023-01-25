import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePostClientAddressMutation } from "../../../api/clientAddressApi";
import { usePostOrderMutation } from "../../../api/orderApi";
import { clearCart } from "../../../redux/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";

export const Resume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, subTotal, address, numberOfItems } = useSelector(
    (state) => state.cart
  );
  const { user } = useSelector((state) => state.authPage);

  const [newOrder, { isLoading: l1, isError: e1 }] = usePostOrderMutation();
  const [newAddress, { isLoading: l2, isError: e2 }] = usePostClientAddressMutation();

  const handlerClick = async () => {
    const orderItems = products.map((item) => {
      return {
        ...item.product,
        productId: item.product._id,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice,
        totalQuantity: item.totalQuantity,
      };
    });

    const data = {
      userId: user,
      orderItems,
      shippingAddress: {
        ...address,
      },
      deliveryTruck: null,
      employee: null,
      deliveryZone: address.deliveryZone,
      numberOfItems,
      tax: +address.tax || 0,
      subTotal: subTotal,
      total: address.tax ? subTotal + +address.tax : subTotal
    };
    try {
      console.log(data);
      const order = await newOrder(data).unwrap();
      
      if(address.newAddress){
        await newAddress(address).unwrap();
      }
     
      if (order) {
        dispatch(clearCart());
        navigate("/checkout/compra-finalizada");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main
      className="cartFull__container"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1.2 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="card__nav" style={{ textAlign: "left" }}>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Mi carrito {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Datos de envío {">"}{" "}
        </span>
        <span style={{ color: "#111", fontWeight: "bold" }}>
          Resumen compra {">"}{" "}
        </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>

      <h1>Resumen de compra</h1>

      <section className="car__products__container">
        <div className="cartFull__products">
          {products.map((item) => {
            return (
              <div className="cartFull__product" key={item.id}>
                <div className="cartFull__img_container">
                  <img src={item.product.img} alt="remera" />
                </div>
                <div className="cartFull__info_product">
                  <div className="cartFull__info_nombre">
                    <h3>Producto</h3>

                    <p>{item.product.description}</p>
                  </div>
                  <div className="cartFull__info_precio">
                    <h3>Precio</h3>
                    <p>{formatPrice(item.totalPrice)}</p>
                  </div>
                  <div className="cartFull__info_cantidad">
                    <h3>Cant.</h3>
                    <p>{item.totalQuantity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order__detalle card">
          <h3>Resumen de compra</h3>

          <div className="order__producto card">
            <h5>Subtotal</h5>
            <h5>{formatPrice(subTotal)}</h5>
          </div>
          <div className="order__producto card">
            <h4>Envío</h4>
            {
              address.tax ? <h4>{formatPrice(+address.tax)}</h4> : <h4>Consultar envío</h4>
            }
            
          </div>
          <div className="order__producto card total">
            <h4>Total</h4>
            {
              address.tax ? <h4>{formatPrice(subTotal + +address.tax)}</h4> : <h4>{formatPrice(subTotal)} + envío</h4>
            }
            
          </div>
          <h3 style={{ marginTop: "10px" }}>Datos de envío</h3>
          <div className="order__producto card">
            <h5>Dirección</h5>
            <h5>{address.address}</h5>
          </div>
          <div className="order__producto card">
            <h5>Provincia</h5>
            <h5>{address.province}</h5>
          </div>
          <div className="order__producto card">
            <h5>Ciudad</h5>
            <h5>{address.city}</h5>
          </div>
          <div className="order__producto card">
            <h5>Código postal</h5>
            <h5>{address.zip}</h5>
          </div>
          <div className="order__producto card">
            <h5>Teléfono</h5>
            <h5>{address.phone}</h5>
          </div>

          <button
            className={`btn-load ${l1 || l2 ? "button--loading" : ""}`}
            onClick={handlerClick}
            disabled={l1 || l2}
          >
            <span className="button__text">Enviar</span>
          </button>
          {
            (e1 || e2) && <p style={{color:'red'}}>❌ Ha ocurrido un error, orden no creada!!</p>
          }
        </div>
      </section>
    </main>
  );
};
/* TODO vincular el consultar envio con un popup */

