import React from "react";
import RegistrationForm from "../../components/register/registrationForm";
import { Link } from "react-router-dom";
import "../HomePage.css";

const RegistrationPage = () => {
  return <div>
    <div  className="container">
      <div className="header">
        <h1>Welcome to the Online Bookstore</h1>
      </div>
      <div className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration" className="active">Registration</Link>
        <Link to="/cart">cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/transactionadmin">Transaction</Link>
        <Link to="/useralldata">Usedata</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
    
    <RegistrationForm /></div>;
};

export default RegistrationPage;