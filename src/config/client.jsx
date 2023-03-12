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
const changeStorge = (accessToken, refreshToken) => {
  const loginUserJSON = localStorage.getItem('loginUser');
  const loginUser = JSON.parse(loginUserJSON);
  loginUser.accessToken = accessToken;
  loginUser.refreshToken = refreshToken;
  localStorage.setItem('loginUser', JSON.stringify(loginUser));
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
          changeStorge(response.data.accessToken, refreshToken);
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