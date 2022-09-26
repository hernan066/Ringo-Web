import "./navbar.css";
import { BsCart3 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { openCartMenu } from "../../redux/uiSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  let quantity = products.length;
  return (
    <header className="navbar__container">
      <div>
        <button>
          <FiMenu />
        </button>
      </div>
      <div className="navbar__logo">
        <img src="/images/logos/logo.png" alt="logo" />
      </div>
      <div>
        <button onClick={() => dispatch(openCartMenu())}>
          <BsCart3 />
          {
            quantity > 0 ? (<span>{quantity}</span>) : null
          }
          
        </button>
      </div>
    </header>
  );
};
