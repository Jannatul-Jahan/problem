import React, { useEffect, useState } from "react";
import useCheckoutHook from "../../hooks/useCheckoutHook";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../FetchDemo.css";

const TransactionDetails = ( ) => {
    const { productData, loading } = useCheckoutHook();
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!productData) {
      return <p>Balance not found.</p>;
    }
  
  
    return (
      <>
        <div className="product-container">
        {loading === true && <h1>Loading...</h1>}
        {productData.map((product) => {
          return (
          <div className="product" key={product._id}>
            <h1>Total: {product.balance}</h1>
          </div>
          
          );
        })}
       
      </div>
      </>
    );
  };
  
  export default TransactionDetails;