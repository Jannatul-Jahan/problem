import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Design from "../components/alldesign";

export const ProductContext = createContext();

function HomePage() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);


  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Welcome to the Online Bookstore</h1>
        </div>
        <div className="navbar">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/products">Products</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/cart">cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/transactionadmin">Transaction</Link>
          <Link to="/useralldata">Usedata</Link>
          <Link to="/balance">Balance</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <Design />
      </ProductContext.Provider>
    </>
  );
}

export default HomePage;
