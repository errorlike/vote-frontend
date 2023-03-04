import client from '../config/client';

const getQuestionsByFormId = async (formId) => {
  const response = await client.get(`forms/${formId}/questions`);
  return response.data;
};

export const questionService = {
  getQuestionsByFormId
};