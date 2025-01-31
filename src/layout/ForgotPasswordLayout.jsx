import { Outlet, useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@/assets/arrow-left.svg';

function ForgotPasswordLayout() {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('/authentication?tab=login');
  }
  return (
    <div className="space-y-4 max-w-xs mx-auto ">
      <div className="flex flex-col  gap-5">
        <>
          <div className="mt-3 space-y-4">
            <Outlet />
          </div>

          <div className="flex items-center justify-center  gap-2 mt-4">
            <img
              src={ArrowLeftIcon}
              alt="arrow-left-icon"
              className="flex justify-center"
            />
            <p
              className="text-primary text-base cursor-pointer"
              onClick={navigateToLogin}
            >
              Back to Log In{' '}
            </p>
          </div>
        </>
      </div>
    </div>
  );
}

export default ForgotPasswordLayout;
