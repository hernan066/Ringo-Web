import "./menu.css";
import {  motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeHambugerMenu } from "../../redux/uiSlice";
import { Link } from "react-router-dom";

const cartVariants = {
  hidden: { x: -600 },
  visible: { x: 0, transition: { ease: "easeInOut" } },
  exit: { x: -600, transition: { ease: "easeInOut" } },
};
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export const Menu = () => {
  const dispatch = useDispatch();

  const { jwt } = useSelector((state) => state.user.currentUser);
  return (
    <>
      <motion.div
        className="overlay-cart"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <div className="menu__container">
        <motion.div
          className="cart__wrapper"
          variants={cartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="cart__main-header">
            <h2>Menu</h2>

            <button
              className="btn-cart-close"
              onClick={() => dispatch(closeHambugerMenu())}
            >
              X
            </button>
          </div>
          <div className="menu__links">
            <ul>
              {!jwt && (
                <>
                  <li>
                    <Link
                      to="/usuario/login"
                      onClick={() => dispatch(closeHambugerMenu())}
                    >
                      Ingresar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/usuario/register"
                      onClick={() => dispatch(closeHambugerMenu())}
                    >
                      Registrarse
                    </Link>
                  </li>
                </>
              )}
              {jwt && (
                <li>
                  <Link
                    to="/usuario/pefil"
                    onClick={() => dispatch(closeHambugerMenu())}
                  >
                    Mi perfil
                  </Link>
                </li>
              )}
              <li>
                <Link to="/" onClick={() => dispatch(closeHambugerMenu())}>
                  Productos
                </Link>
              </li>
              
              <li>
                <Link
                  to="/envios"
                  onClick={() => dispatch(closeHambugerMenu())}
                >
                  Zonas de envio
                </Link>
              </li>
              {jwt && (
                <li>
                  <a onClick={() => dispatch(closeHambugerMenu())}>Salir</a>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};
