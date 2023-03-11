import { Link } from 'react-router-dom';
import { useCurrentParticipationsStore } from '../hooks/useCurrentParticipationsStore';
import participationService from '../services/participation';

const Questionnaire = ({ name, duration, id, isParticipate }) => {
  const add = useCurrentParticipationsStore(state => state.add);
  //todo find use whether attended   
  const handleStartButton = async () => {
    const createdParticipation = await participationService.create(id);
    add(createdParticipation);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className='text-end'>{`duration:${duration} minute`}</p>
        <div className="card-actions justify-end">
          {
            isParticipate ?
              <Link to={`/questionnaireForm/${id}`}>
                <button
                  className="btn btn-primary"
                  type='button'
                >view</button>
              </Link>
              : <Link to={`/questionnaireForm/${id}`}>
                <button
                  className="btn btn-primary"
                  type='button'
                  onClick={handleStartButton}>start</button>
              </Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Questionnaire;