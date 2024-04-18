import axiosClient from "../../../api/axios";

const BASE_URL = 'http://localhost:8000'; 

const ProductApi = {
  getAllProducts: async (prange , brands) => {
    return await axiosClient.get(`${BASE_URL}/api/products?prange=${prange}&brands=${brands}`);
  },
};

export default ProductApi;
