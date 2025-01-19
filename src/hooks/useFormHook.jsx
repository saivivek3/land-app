import { useForm } from 'react-hook-form';

function useFormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return { register, handleSubmit, watch, errors };
}

export default useFormHook;
