import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Cart } from "../cart/Cart";
import { Menu } from "../menu/Menu";
import { useEffect } from "react";

export const Layout = ({ children }) => {
  const { cartMenu, hambugerMenu } = useSelector((state) => state.ui);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  return (
    <>
      <Navbar />

      <AnimatePresence exitBeforeEnter>{cartMenu && <Cart />}</AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {hambugerMenu && <Menu />}
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
