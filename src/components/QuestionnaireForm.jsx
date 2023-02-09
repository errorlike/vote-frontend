import { useState } from 'react';
import QuestionForm from './QuestionForm';

const QuestionnaireForm = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState(0);
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl ">QuestionaireForm</h1>
      </div>
      <form className='mx-auto mt-8 mb-0 max-w-md space-y-4'>
        <div className='relative'>
          <label htmlFor="questionaireName">name</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm' type="text" id='questionaireName' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='relative'>
          <label htmlFor="duration">duration(minute)</label>
          <input className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm' type="number" id='duration' value={duration} onChange={(event) => { setDuration(event.target.value); }} />
        </div>
        <QuestionForm />
      </form>
    </div>

  );
};

export default QuestionnaireForm;