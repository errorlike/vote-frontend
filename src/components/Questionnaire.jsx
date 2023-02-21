const Questionnaire = ({ name, duration }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='text-end'>{`duration:${duration}`}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">start</button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;