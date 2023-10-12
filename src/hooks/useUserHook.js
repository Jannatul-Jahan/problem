import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/user/userall.page";

import { useParams } from "react-router";

const useUserHook = () => {
  const {id: productId} = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");
    const token = localStorage.getItem('token');

    setLoading(true);
    axiosInstance
      .get(`/users/all`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data.data.result);
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


  const handleDeleteUser  = (productId) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    axiosInstance
      .delete(`/users/delete/${productId}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(`Successfully deleted product with ID ${productId}`);
        setFetchReload(true);
      })
      .catch((err) => {
        console.error(`Error deleting product with ID ${productId}:`, err);
      })
      .finally(() => setLoading(false));
  };

    return { productData, loading, setLoading, handleDeleteUser };
};

export default useUserHook;