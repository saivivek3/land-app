import Icon from '@/assets/react.svg';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

function CheckEmailForm() {
  const navigate = useNavigate();
  function navigateToPasswordReset() {
    navigate('/forgot-password/new-password');
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={Icon} alt="Forgot Password" className="w-8 h-8  " />
      </div>

      <h2 className="text-2xl font-semibold text-primary">Check your email</h2>
      <p className="text-tertiary text-base text-center">
        We sent a password reset link to olivia@untitledui.com
      </p>
      <Button onClick={navigateToPasswordReset}>Open Email app</Button>
      <p className="text-tertiary text-sm  text-center">
        Didn’t receive the email?{' '}
        <span className="text-buttontertiary font-semibold cusor-pointer">
          Click to resend
        </span>
      </p>
    </>
  );
}

export default CheckEmailForm;
