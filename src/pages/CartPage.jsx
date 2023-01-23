import { useSelector } from "react-redux";
import { LoginModal } from "../components/auth/LoginModal";
import { CartFull } from "../components/cart/CartFull";
import { Layout } from "../components/layout/Layout";

export const CartPage = () => {
  const { loginModal } = useSelector((store) => store.ui);
  return (
    <div>
      <Layout>
        <CartFull />
      </Layout>
      {loginModal && <LoginModal />}
    </div>
  );
};
