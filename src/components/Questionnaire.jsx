import { Link } from 'react-router-dom';

const Questionnaire = ({ name, duration, formId, isParticipate }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='text-end'>{`
        duration:${Math.floor(duration / 60)}m${duration - Math.floor(duration / 60)} s`}</p>
        <div className="card-actions justify-end">
          {
            isParticipate ?
              <Link to={`/questionnaireForm/${formId}/result`}>
                <button
                  className="btn btn-accent"
                  type='button'
                >view</button>
              </Link>
              : <Link to={`/questionnaireForm/${formId}`}>
                <button
                  className="btn btn-primary"
                  type='button'
                >start</button>
              </Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Questionnaire;