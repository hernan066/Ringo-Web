/* eslint-disable jsx-a11y/anchor-is-valid */
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { CartItem } from "../cart/CartItem";
import "./checkout.css";

export const CheckoutConfirm = () => {
  const { products, subTotal } = useSelector((state) => state.cart);
  const { nombre, direccion, telefono } = useSelector(
    (state) => state.user.whatsappUser
  );

  return (
    <section className="checkout_confirm__container">
      <div className="checkout_confirm__wrapper">
        <h1>Confirma tu compra</h1>
        <div className="checkout_confirm__buy">
          <div className="checkout_confirm__items">
            <AnimatePresence>
              {products.map((item, idx) => (
                <CartItem
                  key={item.slug + item.size}
                  product={item}
                  idx={idx}
                  counter={false}
                  deleteItem={false}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="checkout_confirm__total">
          <div className="checkout__row">
            <h3>Total:</h3>
            <h3>
              <span>
                <a href="#">Envio </a>
              </span>
              + ${subTotal}
            </h3>
          </div>
        </div>
        <div className="checkout_confirm__info">
          <h2>Datos de Envio</h2>
          <div className="checkout_confirm__data">
            <div className="checkout__row">
              <h3>Nombre: </h3> <h3 className="color_grey">{nombre}</h3>
            </div>
            <div className="checkout__row">
              <h3>Dirección: </h3> <h3 className="color_grey">{direccion}</h3>
            </div>
            <div className="checkout__row">
              <h3>Teléfono: </h3> <h3 className="color_grey">{telefono}</h3>
            </div>
          </div>
        </div>
        <button className="checkout_confirm__btn">Confirmar Compra</button>
        <span className="checkout_confirm_span">El costo de envío puede variar entre $100 y $300. Solo se realizan envíos en la zona de San Miguel.</span>
      </div>
    </section>
  );
};
