import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";
import "./postDemo.css";

const PostDemo = () => {
  const { createPost } = useProductHook();

  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");

  const handleCreateProduct = (e) => {
    e.preventDefault();

    const data = {
      title: productTitle,
      description: productDescription,
      price: productPrice,
      stock: productStock,
    };

    createPost(data);
    window.location.reload();

  };

  return (

    <div className="book-container">
      
      
      <form onSubmit={handleCreateProduct}>
      <h1>Add Book</h1>
      <br></br>
      <p>Enter title</p>
        <input
          type="text"
          label="title"
          placeholder="input title"
          className="input-field" // Use a CSS class
          onChange={(e) => setProductTitle(e.target.value)}
        />
        <p>Enter Description</p>
        <input
          type="text"
          label="description"
          placeholder="input description"
          className="input-field" // Use a CSS class
          onChange={(e) => setProductDescription(e.target.value)}
        />
         <p>Enter Price</p>
        <input
          type="text"
          label="price"
          placeholder="input price"
          className="input-field" 
          onChange={(e) => setProductPrice(e.target.value)}
        />
         <p>Enter Stock</p>
        <input
          type="text"
          label="stock"
          placeholder="input stock"
          className="input-field" // Use a CSS class
          onChange={(e) => setProductStock(e.target.value)}
        />
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
};

export default PostDemo;