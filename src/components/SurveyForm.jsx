import { useState } from 'react';
import CheckBoxQuestion from './CheckBoxQuestion';
import RadioQuestion from './RadioQuestion';

const SurveyForm = () => {
  const questionOptions = [
    { id: 1, name: 'QLHDPKnrZU' },
    { id: 2, name: 'nBUgrYYDyl' },
    { id: 3, name: 'OInEHDGPdB' },
    { id: 4, name: 'TUCVIBURED' },
    { id: 5, name: 'sTXfcXHUYo' },
    { id: 6, name: 'ITfekWxduz' },
    { id: 7, name: 'JyifFEYfWh' },
    { id: 8, name: 'GjlYfDUwKD' },
    { id: 9, name: 'vqUQdjFgTm' },
    { id: 10, name: 'FHyaYvCUBN' }];
  const questions = [{
    id: 1,
    name: 'fisrt',
    questionType: 1,
    questionOptions
  },
  {
    id: 2,
    name: 'second',
    questionType: 2,
    questionOptions
  }];

  const radioQuestions = questions.filter(question => question.questionType === 1);
  const checkboxQuestions = questions.filter(question => question.questionType === 2);
  const [selectedId, setSelectId] = useState([]);
  // get question
  //questionanme 
  //qustionOption => map radiotype and checkbox type
  //submit select options  Need type?
  // manytomany 

  return (
    <div className="mx-auto max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <form className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
          <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-800">
            test
          </h3>
          {radioQuestions === 0 ? null :
            radioQuestions
              .map(radioQuestion => <RadioQuestion
                questionName={radioQuestion.name}
                questionId={radioQuestion.id}
                key={radioQuestion.id}
                options={radioQuestion.questionOptions} />
              )}
          {checkboxQuestions === 0 ? null :
            checkboxQuestions
              .map(checkboxQuestion => <CheckBoxQuestion
                questionName={checkboxQuestion.name}
                questionId={checkboxQuestion.id}
                key={checkboxQuestion.id}
                options={checkboxQuestion.questionOptions}
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
  );
};
export default SurveyForm;