import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import cn from '@/lib/cn.js';
import { useState } from 'react';

function SelectComponent({ placeholder, className, options }) {
  const [inputvalue, setValue] = useState(null);
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className={cn('w-full', className)}>
        <SelectValue
          placeholder={
            inputvalue
              ? `${inputvalue.label}, ${inputvalue.value}`
              : placeholder
          }
        />
      </SelectTrigger>
      <SelectContent className="flex gap-40">
        {options.map(option => (
          <SelectItem key={option.id} value={option}>
            <span>{option.label}</span>
            <span className="ml-1">{option.value}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
