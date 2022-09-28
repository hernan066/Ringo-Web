import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usuario/login" element={<LoginPage />} />
        <Route path="/usuario/register" element={<RegisterPage />} />
      </Routes>
    </HashRouter>
  );
};
