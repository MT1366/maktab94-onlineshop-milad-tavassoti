import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

function ProtectedRoute({ children }) {
  const [cookies] = useCookies(["accessToken"]);
  // const { accessToken } = useCookies();
  console.log(cookies);

  return cookies.accessToken ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
