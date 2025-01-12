import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import useFormHook from '@/hooks/useFormHook.jsx';
import React from 'react';

const SignUpForm = () => {
  const onSubmit = data => console.log(data);
  const { handleSubmit, register } = useFormHook();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Enter your name"
          labelName="Name"
          name="name"
          register={register}
          className="w-full"
        />

        <Input
          type="email"
          placeholder="Enter your email"
          labelName="Email"
          name="email"
          register={register}
        />

        <Input
          type="tel"
          placeholder="Enter your Mobile Number"
          labelName="Mobile Number"
          name="mobile"
          register={register}
        />

        <Input
          type="password"
          placeholder="Create a password"
          labelName="Password"
          name="password"
          register={register}
        />

        {/* Action Buttons */}
        <Button>Get Started</Button>
      </form>
    </>
  );
};

export default SignUpForm;
