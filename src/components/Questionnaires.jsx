import { useEffect, useState } from 'react';
import { useCurrentParticipationsStore } from '../hooks/useCurrentParticipationsStore';
import { useFormsStore } from '../hooks/useFormsStore';
import { useUserStore } from '../hooks/useUserStore';
import Questionnaire from './Questionnaire';

const Questionnaires = () => {
  const user = useUserStore(state => state.user);
  const initForms = useFormsStore(state => state.initForms);
  const [loading, setLoading] = useState(true);
  const forms = useFormsStore(state => state.forms);
  const userParticipations = useCurrentParticipationsStore(state => state.userParticipations);
  console.log(userParticipations);
  const getAll = useCurrentParticipationsStore(state => state.getAll);
  useEffect(() => {
    initForms();
    getAll(user.user.id);
    setLoading(false);
  }, [user]);
  if (loading) {
    return <div>loading...</div>;
  }

  let attendedFormId;
  if (userParticipations.length !== 0) {
    attendedFormId = userParticipations.map(userParticipation => userParticipation.formId);
  }

  return (
    <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
      {forms.length === 0 ? null : forms.map(form => <Questionnaire
        name={form.name}
        duration={form.duration}
        key={form.id}
        id={form.id}
        isParticipate={attendedFormId ? attendedFormId.includes(form.id) : false}
      />)}
    </div>
  );
};

export default Questionnaires;