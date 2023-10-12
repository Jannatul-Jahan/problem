import axios from "axios";
import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosinstance";
import { ProductContext } from "../pages/productDetails.page";
import { useParams } from "react-router";

const useProductDetails = () => {
  const {id: productId} = useParams();
  const [productData, setProductData] = useState([]); 
  const [loading, setLoading] = useState(false);

  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");
    console.log(productId);

    setLoading(true);
    axiosInstance
      .get(`/books/details/${productId}`)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.data; // Return data when the response status is 200
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => {
        console.log("Data: ", data);
        setProductData(data.data);
        return data;
      })
      .catch((err) => {
        console.error("Error: ", err);
      })
      .finally(() => {
        setLoading(false);
        setFetchReload(true);
      });
  }, [fetchReload, productId]);
  

  return { productData, loading };
};

export default useProductDetails;
