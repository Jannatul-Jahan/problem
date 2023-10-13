import React, { useContext, useEffect, useState } from 'react';
import axiosInstance from "../utils/axiosinstance";
import { Link } from "react-router-dom";
import Pagination from './pagination';
import Sorting from './sorting';
import Search from './search';
import { ProductContext } from "../pages/home.page";
import "./FetchDemo.css";

const Design = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [sortField, setSortField] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const { fetchReload } = useContext(ProductContext);

  const callProductApi = () => {
    axiosInstance
    .get(`/books/all?page=${page}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}&searchText=${searchText}`)
    .then((resp) => resp.data)
    .then((data) => {
      console.log("Data : ", data.data.data);
      setProducts(data.data.data); 
      setLoading(false);
      if (fetchReload) {
          fetchReload(true);
        }

      return data;
    })
    .catch((err) => {
      console.error("Error:", err);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    console.log("Fetch API called");
    const timeOutFunc = setTimeout(() => {
      callProductApi();
    }, 2000);

    return () => clearTimeout(timeOutFunc);
     }, [ page, limit, sortField, sortOrder, searchText]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSortChange = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handleSearchChange = (newSearchText) => {
    setSearchText(newSearchText);
  };

  return (
    <div>
      <h1 className="product-list-title">Book List</h1>

      <Search searchText={searchText} onSearchChange={handleSearchChange} />
      <br></br>
      <Sorting sortField={sortField} sortOrder={sortOrder} onSortChange={handleSortChange} />
      <br></br>
      <div className="product-container">
      {loading === true && <h1>Loading...</h1>}
      {products.map((product) => {
        return (
          <div className="product" key={product._id}>
            <h5>Title: {product.title}</h5>
            <p>Description: {product.description}</p> 
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            </div>
            );
        })}
        </div>

      <Pagination page={page} total={total} limit={limit} onPageChange={handlePageChange} />
    </div>
  );
};

export default Design;