import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";

const DeleteDemo = () => {
  const [productId, setProductId] = useState("");
  const { deleteProductById } = useProductHook();

  const handleDelete = () => {
    if (productId) {
      deleteProductById(productId);
      setProductId("");
    } else {
      alert("Please enter a product ID.");
    }
  };

  return (
    <div>
      <h2>Delete Product by ID</h2>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleDelete}>Delete Product</button>
      </div>
    </div>
  );
};

export default DeleteDemo;
