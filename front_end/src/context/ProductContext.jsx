import { createContext, useContext, useState } from "react";
import ProductApi from "../services/api/user/ProductApi";


export const ProductContext = createContext({
  products: {},
  getProducts: () => {},

});

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState({});

  const getProducts = async (prange = 0 , brands = 0 , category , page , searchTerm = '') => {
    const response = await ProductApi.getAllProducts(prange , brands ,category ,page, searchTerm);
    setProducts(response.data.products.data);
    
    return response;
  };

 return (
    <ProductContext.Provider
      value={{ products, getProducts , setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
