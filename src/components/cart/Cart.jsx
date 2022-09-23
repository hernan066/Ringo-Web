import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { CartItem } from "./CartItem";
import { CartEmpty } from "./CartEmpty";
import { closeCartMenu } from "../../redux/uiSlice";

const cartVariants = {
  hidden: { x: 600 },
  visible: { x: 0, transition: { ease: "easeInOut" } },
  exit: { x: 600, transition: { ease: "easeInOut" } },
};
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  

  const handleClick = () => {};

  return (
    <>
      <motion.div
        className="overlay-cart"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <div className="cart__container">
        <motion.div
          className="cart__wrapper"
          variants={cartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="cart__main-header">
            <h2>Tu Carrito</h2>
            <button
              className="btn-cart-close"
              onClick={() => dispatch(closeCartMenu())}
            >
              X
            </button>
          </div>

          {products.length > 0 ? (
            <>
              <div className="card__main-overflow">
                <div className="card__main-container">
                  <AnimatePresence>
                    {products.map((item, idx) => (
                      <CartItem
                        key={item.slug + item.size}
                        product={item}
                        idx={idx}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="cart__checkout-container">
                <div className="cart__checkout-subtotal">
                  <span>Subtotal:</span>
                  {/*  <span>${subTotal}</span> */}
                </div>
                <button className="cart__btn">COMPRAR</button>
                <p>
                  Al apretar comprar, solo te llegara un mensaje de
                  confirmacion. La compra se paga al entregar el producto en su
                  domicilio.
                </p>
              </div>
            </>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <CartEmpty /> 
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </>
  );
};
