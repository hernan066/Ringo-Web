import { useDispatch } from "react-redux";
import { setMenu } from "../../redux/uiSlice";
import { dateToLocalDate } from "../../utils/dateFormat";
import { formatPrice } from "../../utils/formatPrice";
import "./profile.css";

export const Orders = ({ orderData, setOrderId }) => {
  console.log(orderData);
  const dispatch = useDispatch();
  return (
    <article className="profile__main__right">
      <h3>MIS PEDIDOS</h3>
      <div className="order__main__right__container">
        <div className="order__overflow">
          <div className="row">
            <h4>Fecha</h4>
            <h4>Cant. Productos</h4>
            <h4>Costo Envío</h4>
            <h4>Subtotal</h4>
            <h4>Estado</h4>
            <h4>Detalle</h4>
          </div>
          {orderData.map((order) => (
            <div className="row">
              <p>{dateToLocalDate(order.createdAt)}</p>
              <p>{order.numberOfItems}</p>
              <p>{order.tax}</p>
              <p>{formatPrice(order.subTotal)}</p>
              <p>{order.status}</p>
              <button
                className="order__btn-detail"
                onClick={() => {
                  setOrderId(order._id);
                  dispatch(setMenu("orderDetail"));
                }}
              >
                Detalle
              </button>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
