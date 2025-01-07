import Icon from '@/assets/react.svg';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import useFormHook from '@/hooks/useFormHook';
import CheckIcon from '@/assets/check-icon.svg';
import { useNavigate } from 'react-router-dom';

function NewPasswordForm() {
  const { handleSubmit, register } = useFormHook();
  const navigate = useNavigate();

  function onSubmit(data) {
    console.log(data);
  }

  function navigateToPasswordResetSuccess() {
    navigate('/forgot-password/password-reset');
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <img src={Icon} alt="Forgot Password" className="w-8 h-8 " />
      </div>

      <h2 className="text-primary text-2xl font-semibold  text-center">
        Set New Password
      </h2>
      <p className="text-tertiary text-base text-center">
        Your new password must be different to previously used passwords.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          placeholder="Create a password"
          labelName="Password"
          name="password"
          register={register}
        />
        <Input
          type="password"
          placeholder="Create a password"
          labelName="Password"
          name="password"
          register={register}
        />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="h-3 w-3 object-cover"
            />
            <p className="text-tertiary text-xs">
              Must be at least 8 characters
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={CheckIcon}
              alt="check-icon"
              className="h-3 w-3 object-cover"
            />
            <p className="text-tertiary text-xs">
              Must contain one special character
            </p>
          </div>
        </div>

        <Button onClick={navigateToPasswordResetSuccess}>Reset Password</Button>
      </form>
    </>
  );
}

export default NewPasswordForm;
