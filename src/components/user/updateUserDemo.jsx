import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosinstance'; 
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "./updateUser.css";

function EditUser() {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axiosInstance.get(`/users/details/${productId}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProduct(response.data.data);
        setUpdatedProduct({
          name: response.data.data.name,
          email: response.data.data.email,
          address: response.data.data.address,
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
    console.log(productId);
    axiosInstance.patch(`/users/update/${productId}`, updatedProduct,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Product updated successfully:', response.data);
        navigate("/useralldata");
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="book-container">
      <h2>Edit User</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            className="input-field"
            value={updatedProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="Email"
            className="input-field"
            value={updatedProduct.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            className="input-field"
            value={updatedProduct.address}
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

export default EditUser;
