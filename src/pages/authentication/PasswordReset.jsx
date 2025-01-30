import Button from '@/components/ui/Button.jsx';
import CheckCircleIcon from '@/assets/checkcircle-icon.svg';

function PasswordReset() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="rounded-lg shadow-customShadow border border-bSecondary p-3">
          <img
            src={CheckCircleIcon}
            alt="Forgot Password"
            className="w-6 h-6 flex "
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-primary text-center">
        Password reset
      </h2>
      <p className="text-tertiary text-base text-center">
        Your password has been successfully reset. Click below to log in
        magically.
      </p>
      <Button>Continue</Button>
    </>
  );
}

export default PasswordReset;
