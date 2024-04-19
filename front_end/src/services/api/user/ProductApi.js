import axiosClient from "../../../api/axios";

const BASE_URL = 'http://localhost:8000'; 

const ProductApi = {
  getAllProducts: async (prange , brands , category) => {
    return await axiosClient.get(`${BASE_URL}/api/products?prange=${prange}&brands=${brands}&categories=${category}`);
  },
};

export default ProductApi;
