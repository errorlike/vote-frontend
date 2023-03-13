import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { participationResultService } from '../services/participationResult';

export const useParticipationResultStore = create(devtools(set => (
  {
    results: [],
    createResult: async (paricipationId, optionIds) => {
      const createdResult = await participationResultService.createResult(paricipationId, optionIds);
      set((state) => ({ results: state.results.concat(createdResult) }));
    },
  }
)));
