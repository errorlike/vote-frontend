import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import formService from '../services/form';

export const useFormsStore = create(devtools(set => (
  {
    forms: [],
    createForm: async (newForm) => {
      const createdForm = await formService.create(newForm);
      set((state) => ({ forms: state.forms.concat(createdForm) }));
    },
    initForms: async () => {
      const getforms = await formService.getAll();
      set(() => ({ forms: getforms }));
    }
  }
)));
