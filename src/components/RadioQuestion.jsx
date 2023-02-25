import { useState } from 'react';
import RadioOption from './RadioOption';

const RadioQuestion = ({ questionName, questionId, options }) => {
  const [selectOption, setSelectOption] = useState(0);

  const handleOptionChanged = (event) => {
    if (event.target.checked) {
      setSelectOption(+event.target.value);
    }
  };
  return (
    <div>
      <div className="divider"></div>
      <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-red-800">
        {questionName}
      </h5>
      {
        options.length === 0 ? null : (options.map(option => {
          return <RadioOption
            questionId={questionId}
            optionName={option.name}
            key={option.id}
            optionId={option.id}
            selectOption={selectOption}
            handleOptionChanged={handleOptionChanged}
          />;
        })
        )
      }
      <div className="divider"></div>
    </div>
  );
};

export default RadioQuestion;