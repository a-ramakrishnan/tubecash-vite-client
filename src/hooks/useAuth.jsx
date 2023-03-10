import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice.jsx";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  let isManager = false;
  let isAdmin = false;
  let status = "customer";

  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    isManager = roles.includes("Manager");
    isAdmin = roles.includes("Admin");

    if (isManager) status = "Manager";
    if (isAdmin) status = "Admin";

    console.log("From Auth ", username);

    return { username, roles, status, isManager, isAdmin };
  }
  console.log("From Auth ", username);
  return { username: "", roles: [], isManager, isAdmin, status };
};
export default useAuth;
