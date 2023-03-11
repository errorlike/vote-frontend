import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import participationService from '../services/participation';

export const useCurrentParticipationsStore = create(devtools(set => ({
  userParticipations: [],
  add: (newParicipation) => {
    set((state) => ({ userParticipations: state.userParticipations.concat(newParicipation) }));
  },
  getAll: async (userId) => {
    const paricipations = await participationService.getParticipationByUserId(userId);
    return set(() => ({ userParticipations: paricipations }));
  },
}))); 