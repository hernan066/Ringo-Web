import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
};
