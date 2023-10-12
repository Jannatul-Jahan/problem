import React, { useEffect, useState } from "react";
import useProductDetails from "../hooks/useProductDetails";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./FetchDemo.css";

const ProductDetails = ( ) => {
    const { productData, loading } = useProductDetails();
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!productData) {
      return <p>Product not found.</p>;
    }
  
  
    return (
        <div className="product-container">
        {loading === true && <h1>Loading...</h1>}
            <div className="product">
              <h5>Title: {productData.title}</h5>
              <p>Description: {productData.description}</p>   
            </div>
     
      </div>
    );
  };
  
  export default ProductDetails;