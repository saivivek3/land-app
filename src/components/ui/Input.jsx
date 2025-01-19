import cn from '@/lib/cn.js';

function Input({
  type,
  name,
  labelName,
  placeholder,
  register,
  className,
  isLabelRequired = true,
  ...props
}) {
  return (
    <div className="mb-4 space-y-1">
      {isLabelRequired && (
        <label className=" block text-sm text-secondary " htmlFor={name}>
          {labelName}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          ' w-full border border-solid border-bPrimary rounded-lg bg-white text-primary text-base p-2 placeholder:text-quaternary shadow-sm placeholder:pl-4 placeholder:text-base',
          className,
        )}
        {...register(name)}
        {...props}
        autoComplete="true"
      />
    </div>
  );
}

export default Input;
