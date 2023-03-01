import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import QuestionnaireForm from './components/QuestionnaireForm';
import Questionnaires from './components/Questionnaires';
import RegisterForm from './components/RegisterForm';
import SurveyForm from './components/SurveyForm';
import { setAccessToken } from './config/client';
import { useFormsStore } from './hooks/useFormsStore';
import { useUserStore } from './hooks/useUserStore';

function App() {
  const setUser = useUserStore(state => state.setUser);
  const initForms = useFormsStore(state => state.initForms);
  const user = useUserStore(state => state.user);
  //fixme after token expiration  don't remove localStorage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loginUser');
    if (loggedUserJSON) {
      const user = JSON.parse((loggedUserJSON));
      setUser(user);
      setAccessToken(user.accessToken);
    }
  }, []);
  useEffect(() => {
    if (user) {
      initForms();
    }
  }, [user]);

  return (
    < div >
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/questionnaires' element={<Questionnaires />} />
        <Route path='/questionnaireForm' element={<QuestionnaireForm />} />
        <Route path='/questionnaireForm/:id' element={<SurveyForm />} />
      </Routes>

    </div >
  );
}

export default App;
