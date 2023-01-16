import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
import "./productDetails.css";

export const ProductDetails = ({ ofert }) => {
  const dispatch = useDispatch();
  const [discountPrice, setDiscountPrice] = useState(ofert.prices[0].price1);
  const [price, setPrice] = useState(ofert.prices[0].price1);
  const [quantity, setQuantity] = useState(1);

  const q1 = ofert.quantities[0].quantity1;
  const q2 = ofert.quantities[0]?.quantity2 || null;
  const q3 = ofert.quantities[0]?.quantity3 || null;

  const p1 = ofert.prices[0].price1;
  const p2 = ofert.prices[0]?.price2 || null;
  const p3 = ofert.prices[0]?.price3 || null;

  const handleAdd = () => {
    if (q2) {
      if (quantity >= q1 && quantity < q2 - 1) {
        setPrice(price + p1);
        setDiscountPrice(discountPrice + p1);
        setQuantity(quantity + 1);
      } else if (quantity >= q2 - 1 && quantity < q3 - 1) {
        setPrice(price + p1);
        setDiscountPrice(discountPrice + p2);
        setQuantity(quantity + 1);
      } else {
        setPrice(price + p1);
        setDiscountPrice(discountPrice + p3);
        setQuantity(quantity + 1);
      }
    }
  };
  const handleSubtract = () => {
    if (q2 && quantity > 1) {
      if (quantity >= q1 && quantity < q2) {
        setPrice(price - p1);
        setDiscountPrice(discountPrice - p1);
        setQuantity(quantity - 1);
      } else if (quantity >= q2 && quantity < q3) {
        setPrice(price - p1);
        setDiscountPrice(discountPrice - p2);
        setQuantity(quantity - 1);
      } else {
        setPrice(price - p1);
        setDiscountPrice(discountPrice - p3);
        setQuantity(quantity - 1);
      }
    }
  };

  const handleAddCartProduct = () => {
    dispatch(
      addProduct({
        product: ofert.product,
        unitPrice: ofert.prices[0].price1,
        totalPrice: discountPrice,
        totalQuantity: quantity,
      })
    );
  };

  console.log(ofert);
  return (
    <div className="productDetails__container">
      <h1>Detalle del producto</h1>
      <div className="productDetails__flex">
        <div className="productDetails__left">
          <img src={ofert.product.img} alt={ofert.product.name} />
        </div>
        <div className="productDetails__right">
          <h2>{ofert.product.name}</h2>
          <hr />
          <h3>Presentación</h3>
          <p>{ofert.description}</p>
          <h3>Marca</h3>
          <p>{ofert.product.brand}</p>

          <h3>Precio</h3>
          {price !== discountPrice && (
            <div>
              <span className="productDetails__price">
                {formatPrice(price)}
              </span>
              <span id="discount">
                {" "}
                ({Math.round(((price - discountPrice) * 100) / price)}% de
                descuento)
              </span>
            </div>
          )}

          <p className="productDetails__discountPrice">
            {formatPrice(discountPrice)}
          </p>

          <h3>Cantidad</h3>
          <div className="productDetails__quantity">
            <button onClick={handleSubtract}>-</button>
            <span>
              {quantity} {quantity === 1 ? "unidad" : "unidades"}
            </span>
            <button onClick={handleAdd}>+</button>
          </div>
          <button className="productDetails__btn-add" onClick={handleAddCartProduct}>
            Agregar al carrito
          </button>
          <button className="productDetails__btn-finish">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};
