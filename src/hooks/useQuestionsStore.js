import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { questionService } from '../services/question';


const useQuestionsStore = create(devtools(set => ({
  questions: [],
  fetchQuestionsByFormId: async (formId) => {
    const getQuestions = await questionService.getQuestionsByFormId(formId);
    set(() => ({ questions: getQuestions }));
  }
})));

export default useQuestionsStore;