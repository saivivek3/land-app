import Icon from '@/assets/react.svg';
import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import useFormHook from '@/hooks/useFormHook.jsx';
import { useNavigate } from 'react-router-dom';

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
      <div className="flex justify-center items-center">
        <img src={Icon} alt="Forgot Password" className="w-8 h-8 flex " />
      </div>

      <h2 className="text-primary text-2xl font-semibold text-center">
        Forgot Password
      </h2>
      <p className="text-sm  text-tertiary ">
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
