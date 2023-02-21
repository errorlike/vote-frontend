import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/auth';
const login = async (loginObject) => {
  const response = await axios.post(`${baseUrl}/login`, loginObject);
  return response.data;
};
const register = async (registerObject) => {
  const response = await axios.post(`${baseUrl}/register`, registerObject);
  return response;
};
const authService = {
  login,
  register
};
export default authService;