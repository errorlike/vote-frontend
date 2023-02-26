import axios from 'axios';
let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGlzb24gSGVybWFubiIsImlhdCI6MTY3Njk5MTc4NywiZXhwIjoxNjc2OTkzMjI3fQ.fVHX2R5uBheBD1x6uOGxgk2ULLcESWxBxN7cUqYKuOY';
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};
const client = axios.create({
  baseURL: 'http://localhost:8080/v1/api',
  headers: { Authorization: token }

});

client.interceptors.request.use({

}
);
export { setToken };
export default client;