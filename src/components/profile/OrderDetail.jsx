import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

export const OrderDetail = ({ orderData, orderId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [order] = orderData.filter((order) => order._id === orderId);
  console.log(order);

  return (
    <main>
      <section >
        <div className="cartFull__products">
          {order.orderItems.map((item) => {
            return (
              <div className="cartFull__product" key={item._id}>
                <div className="cartFull__img_container">
                  <img src={item.img} alt="remera" />
                </div>
                <div className="cartFull__info_product">
                  <div className="cartFull__info_nombre">
                    <h3>Producto</h3>

                    <p>{item.description}</p>
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
            <h5>{formatPrice(order.subTotal)}</h5>
          </div>
          <div className="order__producto card">
            <h4>Envío</h4>
            {order.tax ? (
              <h4>{formatPrice(order.tax)}</h4>
            ) : (
              <h4>Consultar envío</h4>
            )}
          </div>
          <div className="order__producto card total">
            <h4>Total</h4>
            {order.tax ? (
              <h4>{formatPrice(order.total)}</h4>
            ) : (
              <h4>{formatPrice(order.subTotal)} + envío</h4>
            )}
          </div>
          <h3 style={{ marginTop: "10px" }}>Datos de envío</h3>
          <div className="order__producto card">
            <h5>Dirección</h5>
            <h5>{order.shippingAddress?.address}</h5>
          </div>
          <div className="order__producto card">
            <h5>Provincia</h5>
            <h5>{order.shippingAddress.province}</h5>
          </div>
          <div className="order__producto card">
            <h5>Ciudad</h5>
            <h5>{order.shippingAddress.city}</h5>
          </div>
          <div className="order__producto card">
            <h5>Código postal</h5>
            <h5>{order.shippingAddress.zip}</h5>
          </div>
          <div className="order__producto card">
            <h5>Teléfono</h5>
            <h5>{order.shippingAddress.phone}</h5>
          </div>
        </div>
      </section>
    </main>
  );
};
