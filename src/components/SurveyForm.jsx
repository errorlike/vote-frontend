import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCurrentParticipationsStore } from '../hooks/useCurrentParticipationsStore';
import { useFormsStore } from '../hooks/useFormsStore';
import { useParticipationResultStore } from '../hooks/useParticipationResultStore';
import useQuestionsStore from '../hooks/useQuestionsStore';
import participationService from '../services/participation';
import CheckBoxQuestion from './CheckBoxQuestion';
import CountdownTimer from './CountDownTimer';
import RadioQuestion from './RadioQuestion';

const SurveyForm = () => {
  const formId = +useParams().id;
  console.log(formId);
  const fetchQuestionsByFormId = useQuestionsStore(state => state.fetchQuestionsByFormId);
  const createNewParicipation = useCurrentParticipationsStore(state => state.createNewParicipation);
  const forms = useFormsStore(state => state.forms);
  console.log(forms);
  const currentForm = forms.find(form => form.id === formId);
  const navigate = useNavigate();
  const createResult = useParticipationResultStore(state => state.createResult);

  useEffect(() => {
    fetchQuestionsByFormId(formId);
  }, []);

  const questions = useQuestionsStore(state => state.questions);
  const radioQuestions = questions.filter(question => question.questionType === 1);
  const checkboxQuestions = questions.filter(question => question.questionType === 2);
  const [answerStates, setAnswerStates] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (questions.length > answerStates.length) {
      // todo Alert error
    } else {
      const selectedOptionIds = answerStates.flatMap(answerState => answerState.selectedIds);
      const createdParticipation = await participationService.create(formId);
      createNewParicipation({ ...createdParticipation, formId });
      createResult(createdParticipation.id, selectedOptionIds);
      navigate('/');
    }
  };
  return (
    <>
      <div className='w-64  mt-4 float-right'>
        <CountdownTimer
          initialMinutes={Math.floor(currentForm.duration / 60)}
          initialSeconds={currentForm.duration % 60}
          onComplete={() => {
            navigate('/');
          }}
        />
      </div>
      <div className="mx-auto max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <form className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" onSubmit={handleSubmit}>
            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-800">
              {/* {currentForm.name} */}
            </h3>
            {radioQuestions === 0 ? null :
              radioQuestions
                .map(radioQuestion => <RadioQuestion
                  questionName={radioQuestion.name}
                  questionId={radioQuestion.id}
                  key={radioQuestion.id}
                  options={radioQuestion.questionOptions}
                  setAnswerStates={setAnswerStates}
                  answerStates={answerStates}
                />
                )}
            {checkboxQuestions === 0 ? null :
              checkboxQuestions
                .map(checkboxQuestion => <CheckBoxQuestion
                  questionName={checkboxQuestion.name}
                  questionId={checkboxQuestion.id}
                  key={checkboxQuestion.id}
                  options={checkboxQuestion.questionOptions}
                  setAnswerStates={setAnswerStates}
                  answerStates={answerStates}
                />)}
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>

  );
};
export default SurveyForm;