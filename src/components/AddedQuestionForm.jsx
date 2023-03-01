import AddedQuestionOption from './AddedQuestionOption';

const AddedQuestionForm = ({ data, index }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div >
          <div className="relative" >
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm disabled:opacity-50 disabled:shadow  disabled:bg-gray-300"
              placeholder="name"
              value={data.name}
              readOnly
              disabled
            />
          </div>
          <fieldset className="space-y-4" disabled>
            <legend className="sr-only">{`addedQuestion${index}`}</legend>

            <div >
              <input
                type="radio"
                name={`addedquestionTypedata${index}`}
                value={1}
                checked={data.questionType === 1}
                id={`radio${index}`}
                className="peer hidden [&:checked_+_label_svg]:block"
                disabled
              />

              <label
                htmlFor={`radio${index}`}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 opacity-50 bg-gray-300 "
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="hidden h-5 w-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="text-gray-700">Radio</p>
                </div>
              </label>
            </div>

            <div>
              <input
                type="radio"
                name={`addedquestionTypedata${index}`}
                value={2}
                id={`multi${index}`}
                checked={data.questionType === 2}
                className="peer hidden [&:checked_+_label_svg]:block shadow-sm disabled:opacity-50"
                readOnly
              />

              <label
                htmlFor={`multi${index}`}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 opacity-50 bg-gray-300"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="hidden h-5 w-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="text-gray-700">Muliti</p>
                </div>
              </label>
            </div>
          </fieldset>
        </div>
        <div>QuestionOption</div>
        {data.questionOptions.length === 0 ? null : data.questionOptions.map(addedOption => <AddedQuestionOption name={addedOption.name} key={addedOption.name} />)}
      </div>
    </div>);
};

export default AddedQuestionForm;