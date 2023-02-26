const CHeckBoxOption = ({ checkedIds, optionName, optionId, questionId, handleCheckBoxChanged }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{optionName} </span>
        <input
          type="checkbox"
          name={questionId}
          value={optionId}
          checked={checkedIds.includes(optionId)}
          onChange={handleCheckBoxChanged}
          className="checkbox checkbox-primary" />
      </label>
    </div>
  );
};

export default CHeckBoxOption;