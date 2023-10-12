import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/transactionall.page";

const useTransactionHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");
    const token = localStorage.getItem('token');
    console.log(token);
    setLoading(true);
    axiosInstance
      .get(`/transactions/all`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => resp)
      .then((data) => {
        console.log("Data : ", data.data.data.result);
        setProductData(data.data.data.result);
        setLoading(false);

        return data;
      })
      .catch((err) => {
        // return "Some error";
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setFetchReload(true);
      });
  }, [fetchReload]);


    return { productData, loading, setLoading };
};

export default useTransactionHook;