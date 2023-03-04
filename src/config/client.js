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

const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

client.interceptors.request.use(
  config => {
    console.log(accessToken);
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
          const response = await client.post('/auth/refreshToken', {
            refreshToken
          });
          accessToken = response.data.accessToken;
          refreshToken = response.data.refreshToken;
          return client(originalConfig);
        } catch (_error) {
          clearstate();
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  }

);
export { setAccessToken, setRefreshToken, setSetUser };
export default client;