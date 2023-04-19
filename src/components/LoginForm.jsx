
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../hooks/useUserStore';
import authService from '../services/auth';
const LoginForm = () => {
  const setUser = useUserStore(state => state.setUser);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginUser = await authService.login({ username, password });
    window.localStorage.setItem('loginUser', JSON.stringify(loginUser));
    navigate('/');
    setUser(loginUser);
    setUsername('');
    setPassword('');
  };
  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg'>
        <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
          Voting
        </h1>

        <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
        </p>

        <form
          onSubmit={handleSubmit}
          className='mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl'
        >
          <p className='text-lg font-medium'>Sign in to your account</p>

          <div>
            <label htmlFor='username' className='text-sm font-medium'>
              Username
            </label>

            <div className='relative mt-1'>
              <input
                type='text'
                id='username'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter username'
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='text-sm font-medium'>
              Password
            </label>

            <div className='relative mt-1'>
              <input
                type='password'
                id='password'
                className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter password'
                value={password}
                onChange={handlePasswordChange}
              />

            </div>
          </div>

          <button
            type='submit'
            className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
          >
            Sign in
          </button>

          <p className='text-center text-sm text-gray-500'>
            No account?
            <Link className='underline' to='/register'>
              register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
