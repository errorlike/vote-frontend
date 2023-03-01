
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

              <span className='absolute inset-y-0 right-4 inline-flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </span>
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
