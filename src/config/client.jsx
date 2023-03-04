import axios from 'axios';
let accessToken;
let refreshToken;
let setUser;
const clearstate = () => {
  window.localStorage.removeItem('loginUser');
  accessToken = null;
  refreshToken = null;
  setUser(null);
};
const setAccessToken = (newAccessToken) => {
  accessToken = `Bearer ${newAccessToken}`;
};
const setRefreshToken = (newRefreshToken) => {
  refreshToken = newRefreshToken;
};
const setSetUser = (fn) => {
  setUser = fn;
};
const baseURL = 'http://localhost:8080/api/v1';

const client = axios.create({
  baseURL
});

client.interceptors.request.use(
  config => {
    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }
    return config;
  },
  error => Promise.reject(error)
);
//todo fix  infinite loop
client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalConfig = error.config;
    if (originalConfig.url !== '/auth/login' && originalConfig.url !== '/auth/register' && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const response = await axios.post(`${baseURL}/auth/refreshToken`, {
            refreshToken
          });
          accessToken = `Bearer ${response.data.accessToken}`;
          refreshToken = response.data.refreshToken;
          return client(originalConfig);
        } catch (error) {
          clearstate();
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }

);
export { setAccessToken, setRefreshToken, setSetUser };
export default client;