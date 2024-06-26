import axiosClient from "../../../api/axios";

axiosClient.defaults.withCredentials = true;
axiosClient.defaults.withXSRFToken = true;

const BASE_URL = 'http://localhost:8000'; 

const UserApi = {
  getCsrf: async () => {
    return await axiosClient.get(`${BASE_URL}/sanctum/csrf-cookie`);
  },
  login: async (email, password) => {
    return await axiosClient.post(`${BASE_URL}/login`, { email, password });
  },
  logout: async () => {
    window.localStorage.removeItem('user');
    return await axiosClient.post(`${BASE_URL}/logout`);
  },
  getUser: async () => {
    const data = await axiosClient.get(`${BASE_URL}/api/user`);
    window.localStorage.setItem('user', JSON.stringify(data.data));
    return data;

  },
  getUserById: async (id) => {
    return await axiosClient.get(`${BASE_URL}/api/user/${id}`);
  },
  register: async (data) => {
    return await axiosClient.post(`${BASE_URL}/register`, data);
  },
};

export default UserApi;
