import React, { useEffect, useState } from "react";
import useUserHook from "../../hooks/useUserHook";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../FetchDemo.css";

const FetchDemo = () => {
  const { productData, loading, handleDeleteUser } = useUserHook();
  const navigate = useNavigate();

  const userRole = localStorage.getItem('role');
  const user = localStorage.getItem('user');


 return (
   <> 
    <h1 className="h1">All user data</h1>
    <br></br>
    <div className="product-container">
      {loading === true && <h1>Loading...</h1>}
      {productData.map((product) => {
        return (
          <div className="product" key={product._id}>
            <p>User id: {product._id}</p>
            <p>User Name: {product.name}</p>

              <div>
              <button onClick={() => handleDeleteUser(product._id)}>Delete</button>
                <button onClick={() => navigate(`/users/update/${product._id}`)}>
                  Update
                </button>
              </div>
              <br></br>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default FetchDemo;