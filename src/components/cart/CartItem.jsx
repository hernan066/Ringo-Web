import './cart.css'
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

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

  const dispatch = useDispatch();

  return (
    <motion.div
      className="cart__item-container"
      variants={cartItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="cart__item-img">
        {/* <Image
          src={`/products/${product.image}`}
          alt={product.title}
          width={100}
          height={100}
        /> */}
      </div>
      <div className="cart__item-details">
        <h4>{product.title}</h4>
        <div className="cart__item-details-size-quantity">
          <span>Size {product.size}</span>
          {"  -  "}
          <span>Quantity: {product.quantity}</span>
        </div>
      </div>
      <div className="cart__item-aside">
        <span>${product.totalPrice}</span>

        <button className="cart__item-remove-icon">
          {/*  <Image src="/icons/delete.svg" alt="trash" width={20} height={20} /> */}
        </button>
      </div>
    </motion.div>
  );
};
