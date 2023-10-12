import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";

import { useParams } from "react-router";

const useCheckoutHook = () => {
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
        .get(`/balance/check/${user}`,{
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
            console.log(data.data.result);
          setProductData(data.data.result);
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


  return { productData, loading };
};

export default useCheckoutHook;
