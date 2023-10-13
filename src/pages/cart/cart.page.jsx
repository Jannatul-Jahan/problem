import React from "react";
import { createContext, useEffect, useState } from "react";
import Cartfetch from "../../components/cart/cartfetch";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../HomePage.scss";


export const ProductContext = createContext();

function CartPage() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  const navigate = useNavigate();

  const handleCheckout = () => {
      navigate("/products");
    };


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
        <Link to="/cart" className="active">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/transactionadmin">Transaction</Link>
        <Link to="/useralldata">Usedata</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <Cartfetch />
      </ProductContext.Provider> 
      <br></br>
      <div><button onClick={handleCheckout} className="back-button">Back to buy</button></div>
    </div>;
};

export default CartPage;