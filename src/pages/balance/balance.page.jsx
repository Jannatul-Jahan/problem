import React from "react";
import { createContext, useEffect, useState } from "react";
import Balancefetch from "../../components/balance/balancefetch";
import { Link } from "react-router-dom";
import "../HomePage.css";


export const ProductContext = createContext();

function BalancePage() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);


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
        <Link to="/registration">Registration</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/transactionadmin">Transaction</Link>
        <Link to="/useralldata">Usedata</Link>
        <Link to="/balance" className="active">Balance</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <Balancefetch />
      </ProductContext.Provider> 
      <br></br>
    </div>;
};

export default BalancePage;