import client from '../config/client';

const create = async (formId) => {
  const response = await client.post('/participations', { formId });
  return response.data;
};

const getParticipationByUserId = async (userId) => {
  const response = await client.get('/participations', {
    params: {
      userId
    }
  });
  return response.data;
};

const participationService = {
  create,
  getParticipationByUserId
};
export default participationService;