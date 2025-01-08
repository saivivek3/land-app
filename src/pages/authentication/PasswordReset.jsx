import Icon from '@/assets/react.svg';
import Button from '@/components/ui/Butto.jsx';
function PasswordReset() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={Icon} alt="Forgot Password" className="w-8 h-8 " />
      </div>

      <h2 className="text-2xl font-semibold text-primary text-center">
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
