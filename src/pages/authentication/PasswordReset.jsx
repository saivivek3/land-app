import Icon from "@/assets/react.svg";
import Button from "@/components/ui/Button";
function PasswordReset() {
  return (
    <>
      <img src={Icon} alt="Forgot Password" className="w-8 h-8 " />
      <h2 className="text-3xl font-semibold text-primary">Password reset</h2>
      <p className="text-tertiary text-base text-center">
        Your password has been successfully reset. Click below to log in
        magically.
      </p>
      <Button>Continue</Button>
    </>
  );
}

export default PasswordReset;
