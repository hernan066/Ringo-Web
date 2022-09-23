import './cart.css'
import { motion } from 'framer-motion';

const cartEmptyVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }

}


export const CartEmpty = () => {
  return (
    <motion.div 
    className="cart__main"
    variants={cartEmptyVariants}
    initial="initial"
    animate="animate"
    >
      <div className="cart__main-empty">
        <p className="cart-emojis">😔🎒</p>
        <p>You got nothing in your bag</p>
        <button className="btn continue">Continue Shopping</button>
      </div>
    </motion.div>
  );
};