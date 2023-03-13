import { useEffect, useState } from 'react';
import CHeckBoxOption from './CheckBoxOption';

const CheckBoxQuestion = ({ questionName, questionId, options, setAnswerStates, answerStates }) => {
  const [checkedIds, setCheckedIds] = useState([]);
  useEffect(() => {
    if (checkedIds.length !== 0) {

      if (!answerStates.find(answerState => answerState.questionId === questionId)) {
        setAnswerStates(answerStates
          .concat({
            questionId,
            isAnswered: true,
            selectedIds: checkedIds
          }));
      } else {
        setAnswerStates(answerStates
          .map(answerState => answerState.questionId === questionId
            ? { ...answerState, selectedIds: checkedIds }
            : answerState));
      }
    }
  }, [checkedIds]);
  const handleCheckBoxChanged = (event) => {
    event.preventDefault();
    const value = +event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedIds(checkedIds.concat(value));
    } else {
      setCheckedIds(checkedIds.filter(checkedId => checkedId !== value));
    }
  };
  return (
    <div>
      <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-purple-800">
        {questionName}
      </h5>
      {options.length === 0 ? null :
        options.map(option => <CHeckBoxOption
          handleCheckBoxChanged={handleCheckBoxChanged}
          questionId={questionId}
          optionName={option.name}
          key={option.id}
          optionId={option.id}
          checkedIds={checkedIds}
        />

        )
      }
      <div className="divider"></div>
    </div>
  );
};
export default CheckBoxQuestion;