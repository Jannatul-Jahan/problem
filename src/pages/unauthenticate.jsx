import { Navigate, Outlet } from "react-router-dom";

const Unauthenticate = () => {
  const check = localStorage.getItem("token");
  console.log("Authenticating", check);

  return check ? (
    <Navigate to="/products" />
     ):(
    <div>
      <Outlet />{" "}
    </div>
  );
};

export default Unauthenticate;
