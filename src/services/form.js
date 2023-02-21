import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/forms';
let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGlzb24gSGVybWFubiIsImlhdCI6MTY3Njk5MTc4NywiZXhwIjoxNjc2OTkzMjI3fQ.fVHX2R5uBheBD1x6uOGxgk2ULLcESWxBxN7cUqYKuOY';
const setToken = (newToken) => {
  // token = `Bearer ${newToken}`;
};
const create = async (form) => {
  const response = await axios.post(baseUrl, form, { headers: { Authorization: token } });
  return response.data;
};
const getAll = async () => {
  const response = await axios.get((baseUrl), { headers: { Authorization: token } });
  return response.data;
};
const formService = {
  create,
  setToken,
  getAll
};
export default formService;