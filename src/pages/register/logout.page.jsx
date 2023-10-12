import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../HomePage.css";

const LoginPage = () => {
    const navigate = useNavigate();
  
  const handleLogout = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Welcome to the Online Bookstore</h1>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login" className="active">
            Login
          </Link>
          <Link to="/products">Products</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/cart">cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/transactionadmin">Transaction</Link>
          <Link to="/useralldata">Usedata</Link>
          <Link to="/balance">Balance</Link>
          <Link to="/logout" className="active">
            Logout
          </Link>
        </div>
      </div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LoginPage;
