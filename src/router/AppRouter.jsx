import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { CheckoutAddressPage } from "../pages/CheckoutAddressPage";
import { CheckoutConfirmPage, CheckoutFinishPage } from "../pages/CheckoutFinishPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutResumePage } from "../pages/CheckoutResumePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SuccessRegisterPage } from "../pages/SuccessRegisterPage";
import PersistLogin from "./PersistRouter";
import RequireAuth from "./RequireAuth";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/usuario/login" element={<LoginPage />} />
        <Route path="/usuario/register" element={<RegisterPage />} />

        <Route
          path="/usuario/register/success"
          element={<SuccessRegisterPage />}
        />
        <Route path="/productos/:telefono/:id" element={<ProductsPage />} />

        <Route element={<PersistLogin />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/usuario/perfil"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />

          <Route
            path="/productos/detalle/:id"
            element={<ProductDetailPage />}
          />

          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/datos-envio" element={<CheckoutAddressPage />} />
          <Route path="/checkout/resumen" element={<CheckoutResumePage />} />
          <Route path="/checkout/compra-finalizada" element={<CheckoutFinishPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
