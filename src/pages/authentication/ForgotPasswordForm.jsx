import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import useFormHook from '@/hooks/useFormHook.jsx';
import { useNavigate } from 'react-router-dom';
import KeyIcon from '@/assets/key-icon.svg';

function ForgotPasswordForm() {
  const { handleSubmit, register } = useFormHook();
  function onSubmit(data) {
    console.log(data);
  }
  const navigate = useNavigate();

  function navigateToEmail() {
    navigate('/forgot-password/check-email');
  }

  return (
    <>
      <div className="flex justify-center items-center  ">
        <div className="rounded-lg shadow-customShadow border border-bSecondary p-3">
          <img src={KeyIcon} alt="Forgot Password" className="w-6 h-6 flex " />
        </div>
      </div>

      <h2 className="text-primary text-3xl font-semibold text-center">
        Forgot Password ?
      </h2>
      <p className="text-base  text-tertiary min-w-96 ">
        No worries, we’ll send you reset instructions.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email"
          register={register}
          labelName="Name"
          name="name"
        />
        <Button onClick={navigateToEmail}>Reset Password </Button>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
