import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosinstance'; 
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "./postDemo.css";

function EditProduct() {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
  });

  useEffect(() => {
    axiosInstance.get(`/books/details/${productId}`)
      .then((response) => {
        setProduct(response.data.data);
        setUpdatedProduct({
          title: response.data.data.title,
          description: response.data.data.description,
          price: response.data.data.price,
          stock: response.data.data.stock,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    const token = localStorage.getItem('token');
    axiosInstance.patch(`/books/update/${productId}`, updatedProduct,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Product updated successfully:', response.data);
        navigate("/products");
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="book-container">
      <h2>Edit Product</h2>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            className="input-field"
            value={updatedProduct.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            className="input-field"
            value={updatedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            className="input-field"
            value={updatedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Stock:</label>
          <input
            type="text"
            name="stock"
            className="input-field"
            value={updatedProduct.stock}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="create-button" onClick={handleUpdate}>
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
