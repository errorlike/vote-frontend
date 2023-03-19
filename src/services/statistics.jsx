import client from '../config/client';

const getBarData = async (formId) => {
  const response = await client.get('/statistics', {
    params: { formId }
  });
  return response.data;
};

export const statisticService = {
  getBarData
};