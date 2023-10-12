import { createContext, useEffect, useState } from "react";
import UpdateUserDemo from "../../components/user/updateUserDemo";
import { Link } from "react-router-dom";
import "../HomePage.css";

export const ProductContext = createContext();

function Products() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  return (
    <> 

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
        <Link to="/cart">cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/transactionadmin">Transaction</Link>
        <Link to="/useralldata" className="active">Usedata</Link>
        <Link to="/balance">Balance</Link>
        <Link to="/logout">Logout</Link>
        
      </div>
    </div>
      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <UpdateUserDemo />
      </ProductContext.Provider>
    </>
  );
}

export default Products;