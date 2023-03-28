import { isEmpty, trim } from 'ramda';
import { useState } from 'react';
import { useFormsStore } from '../hooks/useFormsStore';
import AddedQuestionForm from './AddedQuestionForm';
import QuestionForm from './QuestionForm';

const QuestionnaireForm = () => {
  const [name, setName] = useState('');
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [addedQuestionForms, setAddedQuestionForms] = useState([]);
  const [errors, setErrors] = useState({});
  const createForm = useFormsStore(state => state.createForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!minute && !second) {
      setErrors({
        ...errors,
        duration: 'Time and seconds cannot both be 0 at the same time.'
      });
      return;
    }
    setErrors(preErrors => ({ ...preErrors, duration: '' }));
    if (addedQuestionForms.length === 0) {
      setErrors(preErrors => ({
        ...preErrors,
        addedQuestionForms: 'Please add at least one form.'
      }));
      return;
    }
    
    createForm({
      name,
      duration: minute * 60 + second,
      questions: addedQuestionForms
    });
    setName('');
    setMinute(0);
    setSecond(0);
    setAddedQuestionForms([]);
  };
  const addNewQuestionForm = (newQuestionForm) => {
    const questionName = newQuestionForm.name;
    const found = addedQuestionForms.find(addedQuestionForm => addedQuestionForm.name === questionName);
    if (found) {
      setErrors(preErrors => ({ ...preErrors, questionName: 'Please ensure that there are no duplicate names.' }));
      return;
    }
    if (isEmpty(trim(questionName))) {
      setErrors(preErrors => ({ ...preErrors, questionName: 'Question name cannot be empty' }));
      return;
    }
    if (isEmpty(newQuestionForm.questionOptions)) {
      setErrors(preErrors => ({ ...preErrors, questionName: 'Please add at least one option' }));
      return;
    }
    setAddedQuestionForms(addedQuestionForms.concat(newQuestionForm));
    setErrors(preErrors => ({ ...preErrors, questionName: '' }));
    setErrors(preErrors => ({
      ...preErrors,
      addedQuestionForms: ''
    }));
    return true;
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl ">QuestionaireForm</h1>
      </div>
      <form className='mx-auto mt-8 mb-0 max-w-md space-y-4' onSubmit={handleSubmit}>
        <div className='relative'>
          <label htmlFor="questionaireName">name</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
            type="text"
            id='questionaireName'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength={1}
          />
        </div>
        <div>countdown:</div>
        {errors.duration ? <p className="text-red-500 text-sm mt-1">{errors.duration}</p> : null}
        <div className='relative flex justify-center'>
          <label htmlFor="minute">minute</label>
          <input className='ml-2 w-1/2 rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
            type="number"
            id='minute'
            value={minute}
            onChange={(event) => { setMinute(+event.target.value); }}
            min={0}
          />

        </div>
        <div className='relative flex justify-center'>
          <label htmlFor="second">second</label>
          <input className='ml-2 w-1/2 rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
            type="number"
            id='second'
            value={second}
            onChange={(event) => { setSecond(+event.target.value); }}
            min={0}
          />

        </div>

        <h1 className=" pt-10 text-2xl font-bold sm:text-3xl mx-auto  max-w-lg text-center">AddedQuestion</h1>
        {errors.addedQuestionForms ? <p className="text-red-500 text-sm mt-1">{errors.addedQuestionForms}</p> : null}

        {
          addedQuestionForms.length === 0 ? null : addedQuestionForms.map((addedQuestionForm, index) => <AddedQuestionForm data={addedQuestionForm} index={index} key={addedQuestionForm.name}
          />)}
        <QuestionForm
          addNewQuestionForm={addNewQuestionForm}
          setErrors={setErrors}
          errors={errors}
        />
        <button type='submit' className='btn  bg-primary'>
          submit
        </button>
      </form>
    </div>

  );
};

export default QuestionnaireForm;