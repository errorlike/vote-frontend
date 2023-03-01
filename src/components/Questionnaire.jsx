import { Link } from 'react-router-dom';

const Questionnaire = ({ name, duration, id }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='text-end'>{`duration:${duration}`}</p>
        <div className="card-actions justify-end">
          <Link to={`/questionnaireForm/${id}`}>
            <button className="btn btn-primary" type='button'>start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

//我希望在我点击的时候，fetchquestions 并且切换路径，

export default Questionnaire;