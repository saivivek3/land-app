import { useForm } from 'react-hook-form';

function useFormHook() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  return { register, handleSubmit, watch, errors, control };
}

export default useFormHook;
