import React, { useEffect, useState } from "react";
import useBalanceHook from "../../hooks/useBalancehook";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../FetchDemo.css";

const BalanceDetails = ( ) => {
    const { productData, loading } = useBalanceHook();
  
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
            <h1>Balance: {product.balance}</h1>
          </div>
          
          );
        })}
       
      </div>
      </>
    );
  };
  
  export default BalanceDetails;