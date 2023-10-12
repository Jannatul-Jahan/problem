import React, { useEffect, useState } from "react";
import useProductHook from "../hooks/useProductHook";
import handleDeleteProduct from "../hooks/useProductHook";
// import getUserRoleFromToken from "../utils/jwttoken";
import { useNavigate, Link, useParams } from "react-router-dom";
import "./FetchDemo.css";

const FetchDemo = () => {
  const { productData, loading, handleDeleteProduct, AddtoCart } = useProductHook();
  const navigate = useNavigate();

  const userRole = localStorage.getItem('role');
  const user = localStorage.getItem('user');


 return (
    <div className="product-container">
      {loading === true && <h1>Loading...</h1>}
      {productData.map((product) => {
        return (
          <div className="product" key={product._id}>
            <h5>Title: {product.title}</h5>
            {/* <p>Description: {product.description}</p> */}
            <p>Price: {product.price}</p>
            
            <button onClick={() => navigate(`/products/${product._id}`)}>
                details
              </button>

              {userRole === '1' && (
              <div>
                <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                <button onClick={() => navigate(`/products/update/${product._id}`)}>
                  Update
                </button>
              </div>
              )}
              <br></br>
              {userRole === '2' && (
              <div>
                <button onClick={() => AddtoCart(product._id, user)}>
                Add to cart
              </button> 
              </div>
              )}
              <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default FetchDemo;