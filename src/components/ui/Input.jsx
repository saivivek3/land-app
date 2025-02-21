import cn from '@/lib/cn.js';
import { Controller } from 'react-hook-form';
import { forwardRef } from 'react';

const ControlledInput = forwardRef(
  (
    {
      type,
      name,
      labelName,
      placeholder,
      className,
      isLabelRequired = true,
      control,
      rules,
      defaultValue = '',
      ...props
    },
    ref,
  ) => {
    return (
      <div className="mb-4 space-y-1">
        {isLabelRequired && (
          <label className="block text-sm text-secondary" htmlFor={name}>
            {labelName}
          </label>
        )}
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <input
              type={type}
              placeholder={placeholder}
              className={cn(
                'w-full border border-solid border-bPrimary rounded-lg bg-white text-primary text-base p-2 placeholder:text-quaternary shadow-sm placeholder:pl-4 placeholder:text-base',
                className,
              )}
              ref={ref}
              {...field}
              {...props}
              autoComplete="true"
            />
          )}
        />
      </div>
    );
  },
);


ControlledInput.displayName = 'ControlledInput';

export default ControlledInput;
