import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Cart } from "../cart/Cart";

export const Layout = ({ children }) => {
  const cartMenu = useSelector((state) => state.ui.cartMenu);
  return (
    <>
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        {cartMenu && <Cart />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>

      <Footer />
    </>
  );
};
