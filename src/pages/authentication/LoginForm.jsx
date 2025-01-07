import useFormHook from "@/hooks/useFormHook";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function LoginForm() {
  const onSubmit = (data) => console.log(data);
  const { handleSubmit, register } = useFormHook();
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="tel"
        placeholder="Enter your Mobile Number"
        className="w-full mt-1 p-3 border rounded-lg"
        labelName="Mobile Number"
        name="mobile"
        register={register}
      />

      <Input
        type="password"
        placeholder="Create a password"
        className="w-full mt-1 p-3 border rounded-lg"
        labelName="Password"
        name="password"
        register={register}
      />

      {/* Action Buttons */}
      <Button>Sign In</Button>
    </form>
  );
}

export default LoginForm;
