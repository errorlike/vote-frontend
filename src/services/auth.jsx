import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/auth';
const login = async (loginObject) => {
  const request = await axios.post(`${baseUrl}/login`, loginObject);
  return request.data;
};
const authService = {
  login
};
export default authService;