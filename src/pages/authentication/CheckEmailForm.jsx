import Button from '@/components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@/assets/mail-icon.svg'

function CheckEmailForm() {
  const navigate = useNavigate();
  function navigateToPasswordReset() {
    navigate('/forgot-password/new-password');
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="rounded-lg shadow-customShadow border border-bSecondary p-3">
          <img src={MailIcon} alt="Forgot Password" className="w-6 h-6 flex " />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-primary text-center">
        Check your email
      </h2>
      <p className="text-tertiary text-base text-center">
        We sent a password reset link to olivia@untitledui.com
      </p>
      <Button onClick={navigateToPasswordReset}>Open Email app</Button>
      <p className="text-tertiary text-smc:\Users\saivi\Downloads\lock-svg.svg  text-center">
        Didn’t receive the email?{' '}
        <span className="text-buttontertiary font-semibold cusor-pointer">
          Click to resend
        </span>
      </p>
    </>
  );
}

export default CheckEmailForm;
