import Icon from "@/assets/react.svg";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useFormHook from "@/hooks/useFormHook";

function ForgotPasswordForm() {
  const { handleSubmit, register } = useFormHook();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={Icon} alt="Forgot Password" className="w-8 h-8 " />
      <h2 className="text-primary text-2xl font-semibold ">Forgot Password</h2>
      <p className="text-base text-tertiary">
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
        <Button>Reset Password </Button>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
