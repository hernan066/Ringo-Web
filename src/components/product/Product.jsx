import { BsCartPlus } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/cartSlice";
import { openCartMenu } from "../../redux/uiSlice";
import "./product.css";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const itemCart = products.find((item) => item.id === product.id);
 

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
        {!!!itemCart ? (
          <button
            className="card__btn"
            onClick={() => {
              dispatch(addProduct(product))
              dispatch(openCartMenu())
            }}
          >
            <BsCartPlus />
            Agregar
          </button>
        ) : (
          <button
            className="card__btn"
            onClick={() => dispatch(deleteProduct(product.id))}
          >
            <FaRegTrashAlt />
            Quitar
          </button>
        )}
      </div>
    </article>
  );
};
