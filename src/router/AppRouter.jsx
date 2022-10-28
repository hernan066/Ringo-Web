import { Routes, Route, HashRouter } from "react-router-dom";
import { CheckoutConfirmPage } from "../pages/CheckoutConfirmPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuario/login" element={<LoginPage />} />
        <Route path="/usuario/register" element={<RegisterPage />} />
        <Route path="/productos/:telefono/:id" element={<ProductsPage />} />
        
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/confirmar" element={<CheckoutConfirmPage />} />
      </Routes>
    </HashRouter>
  );
};
