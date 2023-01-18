/* eslint-disable jsx-a11y/anchor-is-valid */
import "./menu.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeHambugerMenu } from "../../redux/uiSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { logOut } from "../../redux/authSlice";

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
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authPage);
  //console.log(user);

  const handlerLogout = async () => {
    try {
      const res = await axios.get("/auth/logout2", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(logOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
              {!user && (
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
              {user && (
                <li>
                  <Link
                    to="/usuario/perfil"
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
              {user && (
                <li>
                  <a
                    onClick={() => {
                      handlerLogout();
                      dispatch(closeHambugerMenu());
                    }}
                  >
                    Salir
                  </a>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};
