import client from '../config/client';

const createResult = async (participationId, optionIds) => {
  const response = await client.post(`/participations/${participationId}/participationResults`, optionIds);
  return response.data;
};
export const participationResultService = {
  createResult
};

