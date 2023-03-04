import client from '../config/client';


const create = async (form) => {
  const response = await client.post('/forms', form);
  return response.data;
};
const getAll = async () => {
  const response = await client.get(('/forms'));
  return response.data;
};
const formService = {
  create,
  getAll
};
export default formService;