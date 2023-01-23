import "./cartFull.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { openLoginModal } from "../../redux/uiSlice";

export const CartFull = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, subTotal } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.authPage);

  console.log(products);

  const handlerDelete = (id) => {
    dispatch(deleteProduct(id));
  };
 const handlerClick=()=>{
  if(user){
    navigate("/checkout/datos-envio")
  }else{
    dispatch(openLoginModal());
  }
 }

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
        <span style={{ color: "#aaa" }}>Datos de envio {">"} </span>
        <span style={{ color: "#aaa" }}>Resumen compra {">"} </span>
        <span style={{ color: "#aaa" }}>Finaliza compra</span>
      </div>

      <h1>MI Carrito</h1>

      {products.length === 0 ? (
        <div className="cartFull__vacio">
          <h2>Tu carrito se encuentra vacio</h2>
          <Link to={"/productos"}>
            <i class="fa-solid fa-arrow-left-long"></i> Volver a productos
          </Link>
        </div>
      ) : (
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
                      {/* S */}
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
                    <div className="cartFull__info_borrar">
                      <h3>Borrar</h3>
                      <p onClick={() => handlerDelete(item.product._id)}>
                        <i class="fa-solid fa-x"></i>
                      </p>
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
              <h4>Envio</h4>
              <h4>Ver costos</h4>
            </div>
            <div className="order__producto card total">
              <h4>Total</h4>
              <h4>{formatPrice(subTotal)}</h4>
            </div>

            <button
              className="cartFull__btn-add"
              onClick={handlerClick}
            >
              Finalizar compra
            </button>
            <button
              className="cartFull__btn-add"
              style={{
                backgroundColor: "#333",
              }}
              onClick={() => navigate("/")}
            >
              Continuar comprando
            </button>
          </div>
        </section>
      )}
    </main>
  );
};
