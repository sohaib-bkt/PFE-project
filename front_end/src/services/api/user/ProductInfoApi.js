import axiosClient from "../../../api/axios";

const BASE_URL = 'http://localhost:8000'; 

const ProductInfoApi = {
  getAllProducts: async (prange  , category ,page, searchTerm,order) => {
    return await axiosClient.get(`${BASE_URL}/api/info?prange=${prange}&categories=${category}&page=${page}&search=${searchTerm}&order=${order}`);
  },
};

export default ProductInfoApi;