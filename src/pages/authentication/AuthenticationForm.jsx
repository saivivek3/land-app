import { useEffect, useState } from 'react';
import SignUpForm from './SignUpForm.jsx';
import LoginForm from './LoginForm.jsx';
import Button from '@/components/ui/Button.jsx';
import GoogleIcon from '@/assets/google-icon.svg';
import { useSearchParams } from 'react-router-dom';

function AuthenticationForm() {
  const [userType, setUserType] = useState('User');
  const userTypes = ['User', 'Owner', 'Agent', 'Other'];
  const [activeTab, setActiveTab] = useState('signup');
  const [searchParams] = useSearchParams();

  const tab = searchParams.get('tab');

  useEffect(() => {
    if (tab === 'login') {
      setActiveTab('login');
    } else {
      setActiveTab('signup');
    }
  }, [tab]);

  console.log(tab, searchParams);
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create an account</h1>
      <div className="max-w-md w-full">
        <div className="grid grid-cols-2 mb-3 relative">
          <button
            onClick={() => setActiveTab('signup')}
            className={`p-2 text-[11px]  text-quaternary border z-10 border-bPrimary transition-all font-semibold duration-300  rounded-lg shadow-sm  ${
              activeTab === 'signup' &&
              '  text-secondary font-bold  border-bQuinary bg-blightMode'
            }`}
          >
            Sign up
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={` p-2  absolute left-[40%] w-[60%]  text-[11px] border-bPrimary text-quaternary border transition-all font-semibold duration-300   rounded-lg shadow-sm border-l-0  rounded-s-none overflow-hidden  ${
              activeTab === 'login' &&
              '  text-secondary font-bold  border-bQuinary bg-blightMode rounded-s-lg  '
            }`}
          >
            Log in
          </button>
        </div>
      </div>

      {/* User Type Section */}
      <div className="mb-6">
        <p className="text-xl mb-3">You are</p>
        <div className="flex flex-wrap gap-3">
          {userTypes.map(type => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-6 py-2 rounded-full border border-solid border-bQuinary text-secondary text-[10px] ${
                userType === type && 'bg-blightMode b text-primary'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      {activeTab === 'signup' ? <SignUpForm /> : <LoginForm />}
      <Button
        iconUrl={GoogleIcon}
        className="bg-white text-secondary hover:bg-white/50"
      >
        {activeTab === 'signup' ? 'Sign up ' : 'Sign in '}with Google
      </Button>

      {/* Footer */}
      <div className="mt-6 flex gap-2 items-center justify-center">
        <p className="text-tertiary text-xs  text-center">
          {activeTab === 'signup' ? 'Already ' : 'Dont '} have an account?{' '}
        </p>
        <span
          className="text-buttontertiary text-xs cursor-pointer  font-semibold"
          onClick={() =>
            setActiveTab(activeTab === 'signup' ? 'login' : 'signup')
          }
        >
          {activeTab === 'signup' ? 'Login' : 'Sign up'}
        </span>
      </div>
    </div>
  );
}

export default AuthenticationForm;
