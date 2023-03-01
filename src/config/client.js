import axios from 'axios';
let accessToken;
const setAccessToken = (newToken) => {
  accessToken = `Bearer ${newToken}`;
};
const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
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

);
export { setAccessToken };
export default client;