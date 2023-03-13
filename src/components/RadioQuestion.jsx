import { useEffect, useState } from 'react';
import RadioOption from './RadioOption';

const RadioQuestion = ({
  questionName,
  questionId,
  options,
  setAnswerStates,
  answerStates,
}) => {
  const [selectOption, setSelectOption] = useState();

  useEffect(() => {
    if (selectOption) {
      if (!answerStates.find(answerState => answerState.questionId === questionId)) {
        setAnswerStates(answerStates
          .concat({
            questionId,
            isAnswered: true,
            selectedIds: selectOption
          }));
      } else {
        setAnswerStates(answerStates
          .map(answerState => answerState.questionId === questionId
            ? { ...answerState, selectedIds: selectOption }
            : answerState));
      }
    }
  }, [selectOption]);

  const handleOptionChanged = (event) => {
    setSelectOption(+event.target.value);
  };
  return (
    <div>
      <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-purple-800">
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