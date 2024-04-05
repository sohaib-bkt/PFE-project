import axios from "../../../api/axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const BASE_URL = 'http://localhost:8000'; 

const UserApi = {
  getCsrf: async () => {
    return await axios.get(`${BASE_URL}/sanctum/csrf-cookie`);
  },
  login: async (email, password) => {
    return await axios.post(`${BASE_URL}/login`, { email, password });
  },
  logout: async () => {
    return await axios.post(`${BASE_URL}/logout`);
  },
  getUser: async () => {
    return await axios.get(`${BASE_URL}/api/user`);

  },
  register: async (data) => {
    return await axios.post(`${BASE_URL}/register`, data);
  },
};

export default UserApi;
