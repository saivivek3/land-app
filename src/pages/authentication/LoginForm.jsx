import useFormHook from '@/hooks/useFormHook.jsx';
import Input from '@/components/ui/Input.jsx';
import Button from '@/components/ui/Button.jsx';
import { Link } from 'react-router-dom';

function LoginForm() {
  const onSubmit = data => console.log(data);
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

      <Link
        to="/forgot-password"
        className="text-brandTertiary text-[10px] font-bold  mt-1"
      >
        {' '}
        Forgot Password
      </Link>

      {/* Action Buttons */}
      <Button>Sign In</Button>
    </form>
  );
}

export default LoginForm;
