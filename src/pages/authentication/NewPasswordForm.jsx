import Icon from "@/assets/react.svg";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useFormHook from "@/hooks/useFormHook";
import CheckIcon from "@/assets/check-icon.svg";

function NewPasswordForm() {
  const { handleSubmit, register } = useFormHook();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={Icon} alt="Forgot Password" className="w-8 h-8 " />
      <h2 className="text-primary text-3xl font-semibold ">Set New Password</h2>
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
            <img src={CheckIcon} alt="check-icon" />
            <p className="text-tertiary text-sm">
              Must be at least 8 characters
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={CheckIcon} alt="check-icon" />
            <p className="text-tertiary text-sm">
              Must contain one special character
            </p>
          </div>
        </div>

        <Button>Reset Password</Button>
      </form>
    </>
  );
}

export default NewPasswordForm;
