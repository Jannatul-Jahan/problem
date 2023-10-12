import React, { useEffect, useState } from "react";
import useCartDetails from "../../hooks/useCartDetails";
import { useNavigate, Link, useParams } from "react-router-dom";
//import "./FetchDemo.css";

const CartDetails = ( ) => {
    const { productData, loading, handleDeleteProduct, handleAddProduct, handlecheckout } = useCartDetails();

    const user = localStorage.getItem('user');
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!productData) {
      return <p>Product not found.</p>;
    }
  
  
    return (
      <>
        <div className="product-container">
        {loading === true && <h1>Loading...</h1>}
        {productData.map((product) => {
          return (
          <div className="product" key={product._id}>
            <h5>Book id: {product.product._id}</h5>
            <p> Quantity: {product.quantity} </p>
            <p>Book name: {product.product.title} </p>
            <div>
                <button onClick={() => handleDeleteProduct(product.product._id)}>-</button>
                <button onClick={() => handleAddProduct(product.product._id)}>+</button>
              </div>
          </div>
          
          );
        })}
      </div>
      <button onClick={() => handlecheckout(user)}>Checkout</button>
      <br></br>
      </>
    );
  };
  
  export default CartDetails;