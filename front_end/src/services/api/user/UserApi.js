import axios from "../../../api/axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const BASE_URL = 'http://localhost:8000'; // Set your base URL here

const UserApi = {
  getCsrf: async () => {
    return await axios.get(`${BASE_URL}/sanctum/csrf-cookie`);
  },
  login: async (email, password) => {
    return await axios.post(`${BASE_URL}/login`, { email, password });
  },
  logout: async () => {
    // Implement the logout logic here (e.g., making a request to invalidate the session)
  },
  getUser: async () => {
    return await axios.get(`${BASE_URL}/api/user`);

  }
};

export default UserApi;
