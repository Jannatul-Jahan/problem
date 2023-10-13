import axios from "axios";
import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/products.page";
import { useParams } from "react-router";

const useProductHook = () => {
  const {id: productId} = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const {user} = localStorage.getItem('user') || [];
  

  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");

    setLoading(true);
    axiosInstance
      .get(`/books/total`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data);
        setProductData(data.data.result);
        setLoading(false);

        return data;
      })
      .catch((err) => {
        return "Some error";
      })
      .finally(() => {
        setLoading(false);
        setFetchReload(true);
      });
  }, [fetchReload]);


  
  const createPost = (formData) => {
    const token = localStorage.getItem('token');
    console.log(token);
    setLoading(true);
    axiosInstance
      .post("/books/create", formData,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Successfully created", data);
        setFetchReload(true);
      })
      .finally(() => setLoading(false));
  };

  const handleDeleteProduct  = (productId) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    axiosInstance
      .delete(`/books/delete?id=${productId}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(`Successfully deleted product with ID ${productId}`);
        setFetchReload(true);
        window.location.reload();
      })
      .catch((err) => {
        console.error(`Error deleting product with ID ${productId}:`, err);
      })
      .finally(() => setLoading(false));
  };

  const AddtoCart = (productId, user) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    const cartData = {
      user: user, 
      products: [
        {
          product: productId, 
          quantity: 1, 
        },
      ],
    };
  
    axiosInstance
      .post("/cart/add", cartData,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(`Successfully added product with ID ${productId} into cart`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error adding product with ID ${productId}`, err);
      })
      .finally(() => setLoading(false));
  };
  


    return { productData, loading, setLoading, createPost, handleDeleteProduct, AddtoCart  };
};

export default useProductHook;