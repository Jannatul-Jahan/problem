import { Navigate, Outlet } from "react-router-dom";

const User = () => {
  const role = parseInt(localStorage.getItem("role"), 10); 
  console.log("Authenticating", role);

  return role === 2 ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default User;
