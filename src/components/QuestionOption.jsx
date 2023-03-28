import { useState } from 'react';
const QuestionOption = ({ createOption, errors }) => {
  const [name, setName] = useState('');
  return (
    <>
      {errors.optionName ? <span className="text-red-500 text-sm mt-1">{errors.optionName}</span> : null}
      <div className="relative">
        <input
          type="text"
          id="optionName"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button onClick={() => {
            createOption(name);
            setName('');
          }}
          type="button"
          className="rounded-full bg-blue-500 p-0.5 text-white hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
              />
            </svg>
          </button>
        </span>
      </div>
    </>
  );
};

export default QuestionOption;