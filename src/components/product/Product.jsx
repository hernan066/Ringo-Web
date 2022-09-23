import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import "./product.css";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className="card__container">
      <div>
        <h3 style={{ lineHeight: "30px" }}>{product.name}</h3>
        <h3>{product.weight}kg</h3>
      </div>
      <div className="card__img__container">
        <img src={`./images/products/${product.img}`} alt="pollo" />
      </div>
      <div>
        <h3 id="card__price">${product.combo_price}</h3>
        <button
          className="card__btn"
          onClick={() => dispatch(addProduct(product))}
        >
          <BsCartPlus />
          Agregar
        </button>
      </div>
    </article>
  );
};
