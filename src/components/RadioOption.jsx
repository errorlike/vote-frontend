
const RadioOption = ({ questionId, optionName, optionId, selectOption, handleOptionChanged }) => {

  return (
    <div className='form-control'>
      <label className="label cursor-pointer" htmlFor={optionId} >
        <span className="label-text">{optionName}</span>
        <input
          onChange={handleOptionChanged}
          type="radio"
          name={questionId}
          className="radio"
          value={optionId}
          checked={selectOption === optionId}
          id={optionId}
        />
      </label>
    </div>
  );

};
export default RadioOption;