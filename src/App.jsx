import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import QuestionnaireForm from './components/QuestionnaireForm';
import Questionnaires from './components/Questionnaires';
import RegisterForm from './components/RegisterForm';
import SurveyForm from './components/SurveyForm';
import { setAccessToken, setRefreshToken, setSetUser } from './config/client';
import { useUserStore } from './hooks/useUserStore';

function App() {
  const setUser = useUserStore(state => state.setUser);
  const user = useUserStore(state => state.user);
  const [loading, setLoading] = useState(true);
  //fixme after token expiration  don't remove localStorage
  const loggedUserJSON = window.localStorage.getItem('loginUser');
  useEffect(() => {
    if (loggedUserJSON) {
      const loginUser = JSON.parse((loggedUserJSON));
      setUser(loginUser);
      setSetUser(setUser);
      setRefreshToken(loginUser.refreshToken);
      setAccessToken(loginUser.accessToken);
    }
    setLoading(false);
  }, [loggedUserJSON]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    < div >
      <Navigation />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/questionnaires' element={user ? <Questionnaires /> : <Navigate replace={true} to={'/login'} />} />
        <Route path='/questionnaireForm' element={user ? <QuestionnaireForm /> : <Navigate replace={true} to={'/login'} />} />
        <Route path='/questionnaireForm/:id' element={<SurveyForm />} />
      </Routes>

    </div >
  );
}

export default App;
