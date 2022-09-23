import "./navbar.css";
import { BsCart3 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { openCartMenu } from "../../redux/uiSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <header className="navbar__container">
      <div>
        <button><FiMenu /></button>
      </div>
      <div className="navbar__logo">
        <img src="/images/logos/logo.png" alt="logo" />
      </div>
      <div>
        <button onClick={()=> dispatch(openCartMenu())}><BsCart3 /></button>
      </div>
    </header>
  );
};
