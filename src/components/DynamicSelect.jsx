import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Import the complete form component instead of using shadcn's form components
import { Controller } from 'react-hook-form';

export function DynamicSelect({
  name,
  control,
  label,
  options = [],
  placeholder = 'Select an option',
  required = false,
  className = '',
  defaultValue = '',
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {label && <label className="text-sm font-medium">{label}</label>}
          <Select
            onValueChange={field.onChange}
            value={field.value || defaultValue}
            onOpenChange={open => {
              if (!open) field.onBlur();
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && (
            <p className="text-sm text-red-500 mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
