import Icon from "@/assets/react.svg";
import Button from "@/components/ui/Button";

function CheckEmailForm() {
  return (
    <>
      <img src={Icon} alt="Forgot Password" className="w-8 h-8 " />
      <h2 className="text-3xl font-semibold text-primary">Check your email</h2>
      <p className="text-tertiary text-base text-center">
        We sent a password reset link to olivia@untitledui.com
      </p>
      <Button>Open Email app</Button>
      <p className="text-tertiary text-sm  text-center">
        Didn’t receive the email?{" "}
        <span className="text-buttontertiary font-semibold cusor-pointer">
          Click to resend
        </span>
      </p>
    </>
  );
}

export default CheckEmailForm;
