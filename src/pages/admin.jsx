import { Navigate, Outlet } from "react-router-dom";

const Admin = () => {
  const role = parseInt(localStorage.getItem("role"), 10); 
  console.log("Authenticating", role);

  return role === 1 ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Admin;
