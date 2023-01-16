import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { CheckoutConfirmPage } from "../pages/CheckoutConfirmPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SuccessRegisterPage } from "../pages/SuccessRegisterPage";
import PersistLogin from "./PersistRouter";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/usuario/login" element={<LoginPage />} />
        <Route path="/usuario/register" element={<RegisterPage />} />
        
        <Route path="/usuario/register/success" element={<SuccessRegisterPage />} />
        <Route path="/productos/:telefono/:id" element={<ProductsPage />} />
        
        

        <Route element={<PersistLogin />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuario/perfil" element={<ProfilePage />} />
          
        <Route path="/productos/detalle/:id" element={<ProductDetailPage />} />
        
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/confirmar" element={<CheckoutConfirmPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
