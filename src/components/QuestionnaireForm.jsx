import { useState } from 'react';
import { useFormsStore } from '../hooks/useFormsStore';
import AddedQuestionForm from './AddedQuestionForm';
import QuestionForm from './QuestionForm';

const QuestionnaireForm = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(0);
  const [addedQuestionForms, setAddedQuestionForms] = useState([{
    name: 'hhh',
    questionType: 1,
    questionOption: [{ name: 'hell1' }, { name: 'h323' }]
  }]);
  const createForm = useFormsStore(state => state.createForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    createForm({ name, duration, questions: addedQuestionForms });
    setName('');
    setDuration(0);
    setAddedQuestionForms([]);
  };
  const addNewQuestionForm = (newQuestionFrom) => {
    const found = addedQuestionForms.find(addedQuestionForm => addedQuestionForm.name === newQuestionFrom.name);
    if (!found) {
      setAddedQuestionForms(addedQuestionForms.concat(newQuestionFrom));
    }
  };
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl ">QuestionaireForm</h1>
      </div>
      <form className='mx-auto mt-8 mb-0 max-w-md space-y-4' onSubmit={handleSubmit}>
        <div className='relative'>
          <label htmlFor="questionaireName">name</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm' type="text" id='questionaireName' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='relative'>
          <label htmlFor="duration">duration(minute)</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm' type="number" id='duration' value={duration} onChange={(event) => { setDuration(event.target.value); }} min={1} />
        </div>

        <h1 className=" pt-10 text-2xl font-bold sm:text-3xl mx-auto  max-w-lg text-center">AddedQuestion</h1>

        {
          addedQuestionForms.length === 0 ? null : addedQuestionForms.map((addedQuestionForm, index) => <AddedQuestionForm data={addedQuestionForm} index={index} key={addedQuestionForm.name}
          />)}
        <QuestionForm addNewQuestionForm={addNewQuestionForm} />
        <button type='submit' className='btn  bg-primary'>
          submit
        </button>
      </form>
    </div>

  );
};

export default QuestionnaireForm;