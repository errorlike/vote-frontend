import { create } from 'zustand';

export const useUserStore = create(set => ({
  user: null,
  setUser: (loginUser) => set(() => ({ user: loginUser })),
})); 