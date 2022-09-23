import "./cart.css";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export const CartItem = ({ product, idx }) => {
  const cartItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.3 * (idx + 1) },
    },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };
  const [weight, setSetWeight] = useState({
    totalWeight: product.weight,
    totalPrice: product.combo_price,
  });

  const dispatch = useDispatch();
  const handleAdd = (weight) => {
    setSetWeight({
      totalWeight: weight.totalWeight + product.unit_weight,
      totalPrice: weight.totalPrice + product.extra_price,
    });
  };
  const handleSubtract = (weight) => {
    if (weight.totalWeight > 0) {
      setSetWeight({
        totalWeight: weight.totalWeight - product.unit_weight,
        totalPrice: weight.totalPrice - product.extra_price,
      });
    }
  };
  return (
    <motion.div
      className="cart__item-container"
      variants={cartItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="cart__item-img">
        <img src={`./images/products/${product.img}`} alt="" />
      </div>
      <div className="cart__item-details">
        <h4>
          {product.name}{" "}
          <span style={{ fontWeight: "400" }}>({weight.totalWeight}kg)</span>{" "}
        </h4>
        <div className="cart__item__quantity">
          <button onClick={() => handleSubtract(weight)}>-</button>
          <span>{weight.totalWeight}Kg</span>
          <button onClick={() => handleAdd(weight)}>+</button>
        </div>
      </div>
      <div className="cart__item-aside">
        <span>${weight.totalPrice}</span>

        <button className="cart__item-remove-icon">
          <FaRegTrashAlt />
        </button>
      </div>
    </motion.div>
  );
};
