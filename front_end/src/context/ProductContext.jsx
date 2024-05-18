import { createContext, useContext, useEffect, useState } from "react";
import ProductApi from "../services/api/user/ProductApi";
import axiosClient from "../api/axios";


export const ProductContext = createContext({
  products: [],
  getProducts: () => {},
  getCountWishList: () => {},
  countWishList: 0,
  setCountWishList : () => {},

});

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [countWishList, setCountWishList] = useState(0);

  const getProducts = async (prange = 0 , category , page , searchTerm = '',order) => {
    const response = await ProductApi.getAllProducts(prange ,category ,page, searchTerm,order);
    setProducts(response.data.products.data);
    return response;
  };
  const getCountWishList = async () => await axiosClient.get('http://localhost:8000/api/wishlist/count').then((response) => {
    setCountWishList(response.data.count);

  })
  useEffect(() => {
    
    getCountWishList();
  }, [countWishList]);
 return (
    <ProductContext.Provider
      value={{ products, getProducts , setProducts , setCountWishList , countWishList }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
