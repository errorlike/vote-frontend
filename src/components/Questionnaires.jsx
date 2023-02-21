import { useFormsStore } from '../hooks/useFormsStore';
import Questionnaire from './Questionnaire';

const Questionnaires = () => {
  const forms = useFormsStore(state => state.forms);
  console.log(forms);
  return (
    <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
      {forms.length === 0 ? null : forms.map(form => <Questionnaire name={form.name} duration={form.duration} key={form.id} />)}
    </div>
  );
};

export default Questionnaires;