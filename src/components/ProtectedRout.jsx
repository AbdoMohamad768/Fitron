import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function ProtectedRout({ children }) {
  const user = useSelector((state) => state.user);

  if (Object.keys(user.user).length === 0) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRout;
