import React, { useEffect, useState } from "react";
import useTransactionHook from "../../hooks/useTransactionHook";
import "../FetchDemo.css";

const Transactiondemo = () => {
  const { productData, loading } = useTransactionHook();

 return (
    <div>
      <h1 className="h1">All Transactions of all user</h1>
      {loading === true && <h1>Loading...</h1>}
      {productData.map((product) => {
        return (
          <div className="product" key={product._id}>
            <p>Transaction id: {product._id}</p>
            <p>User id: {product.user}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Transactiondemo;