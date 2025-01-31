import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import useFormHook from '@/hooks/useFormHook.jsx';
import CheckIcon from '@/assets/check-icon.svg';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@/assets/mail-icon.svg';
import GreyCheckedIcon from "@/assets/gray-check-icon.svg";

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
        <div className="rounded-lg shadow-customShadow border border-bSecondary p-3">
          <img src={MailIcon} alt="Forgot Password" className="w-6 h-6 flex " />
        </div>
      </div>

      <h2 className="text-primary text-3xl font-semibold  text-center">
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
              src={GreyCheckedIcon}
              alt="check-icon"
              className="h-4 w-4 object-cover"
            />
            <p className="text-tertiary text-base">
              Must be at least 8 characters
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={GreyCheckedIcon}
              alt="check-icon"
              className="h-4 w-4 object-cover"
            />
            <p className="text-tertiary text-base">
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
