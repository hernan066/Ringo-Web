import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
import "./productDetails.css";

export const ProductDetails = ({ ofert }) => {
  const basePrice = ofert.basePrice;
  const retailPrice = ofert.retailPrice;

  const dispatch = useDispatch();
  const [discountPrice, setDiscountPrice] = useState(basePrice);
  const [price, setPrice] = useState(basePrice);
  const [quantity, setQuantity] = useState(1);

  const q1 = ofert.quantities[0].quantity1 || null;
  const q2 = ofert.quantities[0]?.quantity2 || null;
  const q3 = ofert.quantities[0]?.quantity3 || null;
  const q4 = ofert.quantities[0]?.quantity4 || null;

  const p1 = ofert.prices[0].price1 || null;
  const p2 = ofert.prices[0]?.price2 || null;
  const p3 = ofert.prices[0]?.price3 || null;
  const p4 = ofert.prices[0]?.price4 || null;

  const counterAdd = (p) => {
    setPrice(price + basePrice);
    setDiscountPrice(p * (quantity + 1));
    setQuantity(quantity + 1);
  };
  const counterSubtract = (p) => {
    if (quantity > 1) {
      setPrice(price - basePrice);
      setDiscountPrice(p * (quantity - 1));
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (!q1) {
      return counterAdd(basePrice);
    } else {
      if (quantity >= 1 && quantity < q1 - 1) {
        return counterAdd(basePrice);
      }
    }
    if (!q2) {
      return counterAdd(p1);
    } else {
      if (quantity >= q1 - 1 && quantity < q2 - 1) {
        return counterAdd(p1);
      }
    }
    if (!q3) {
      return counterAdd(p2);
    } else {
      if (quantity >= q2 - 1 && quantity < q3 - 1) {
        return counterAdd(p2);
      }
    }
    if (!q4) {
      return counterAdd(p3);
    } else {
      if (quantity >= q3 - 1 && quantity < q4 - 1) {
        return counterAdd(p3);
      }
      if (quantity >= q4 - 1) {
        return counterAdd(p4);
      }
    }
  };
  const handleSubtract = () => {
    if (!q1) {
      return counterSubtract(basePrice);
    } else {
      if (quantity > 1 && quantity <= q1) {
        return counterSubtract(basePrice);
      }
    }
    if (!q2) {
      return counterSubtract(p1);
    } else {
      if (quantity > q1 && quantity <= q2) {
        return counterSubtract(p1);
      }
    }
    if (!q3) {
      return counterSubtract(p2);
    } else {
      if (quantity > q2 && quantity <= q3) {
        return counterSubtract(p2);
      }
    }
    if (!q4) {
      return counterSubtract(p3);
    } else {
      if (quantity > q3 && quantity <= q4) {
        return counterSubtract(p3);
      }
      if (quantity > q4) {
        return counterSubtract(p4);
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
          <button
            className="productDetails__btn-add"
            onClick={handleAddCartProduct}
          >
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
