import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/cart/cart.page";
import { useParams } from "react-router";

const useCartDetails = () => {
  const {id: productId} = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem('user');

  const { fetchReload, setFetchReload } = useContext(ProductContext);
  

  useEffect(() => {
    console.log("Fetch API called");
    const token = localStorage.getItem('token');

    if (user) {
      console.log(token);
      setLoading(true);
      axiosInstance
        .get(`/cart/getById/${user}`,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          if (resp.status === 200) {
            return resp.data;
          }
        })
        .then((data) => {
          console.log(data.data.result.total);
          setProductData(data.data.result.products);
        })
        .catch((err) => {
          console.error("Error: ", err);
        })
        .finally(() => {
          setLoading(false);
          setFetchReload(true);
        });
    }
  }, [fetchReload, user]);


  const handleDeleteProduct = (productId) => {
    const token = localStorage.getItem('token');
    console.log(user);
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
      .patch("cart/remove", cartData)
      .then((resp) => {
        console.log(`Successfully deleted one product with ID ${productId} from cart`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error deleting product with ID ${productId}`, err);
      })
      .finally(() => setLoading(false));
  };


  const handleAddProduct = (productId) => {
    const token = localStorage.getItem('token');
    console.log(user);
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

  const handlecheckout = (user) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    console.log(user);
    const userJSON = JSON.stringify(user);
  
    axiosInstance
    .post(`/transactions/checkout`, userJSON, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      })
      .then((resp) => {
        console.log(`Transaction successfull!`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error transaction`, err);
      })
      .finally(() => setLoading(false));
  };

  return { productData, loading, handleDeleteProduct, handleAddProduct, handlecheckout };
};

export default useCartDetails;
