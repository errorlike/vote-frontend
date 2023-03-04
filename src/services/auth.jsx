import client from '../config/client';

const login = async (loginObject) => {
  const response = await client.post('/auth/login', loginObject, { headers: {} });
  return response.data;
};
const register = async (registerObject) => {
  const response = await client.post('/auth/register', registerObject, { headers: {} });
  return response;
};
const authService = {
  login,
  register
};
export default authService;