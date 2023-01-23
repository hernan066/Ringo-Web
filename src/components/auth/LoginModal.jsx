import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/uiSlice";
import { LoginForm } from "./LoginForm";
import "./auth.css";

export const LoginModal = () => {
    const dispatch = useDispatch();
  return (
    <>
      <div className="overlay-cart"></div>
      <div className="loginModal__container">
      <button className="loginModal__btn-close" onClick={()=> dispatch(closeLoginModal())}>X</button>
        <LoginForm routeNav={'/checkout/datos-envio'}/>
      </div>
    </>
  );
};
