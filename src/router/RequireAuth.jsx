import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../redux/authSlice";


const RequireAuth = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default RequireAuth;