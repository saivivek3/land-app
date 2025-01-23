// import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectState() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a State" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select State</SelectLabel>
          <SelectItem value="apple">Telangana</SelectItem>
          <SelectItem value="banana">Karnataka</SelectItem>
          <SelectItem value="blueberry">Maharashtra</SelectItem>
          <SelectItem value="grapes">Uttar Pradesh</SelectItem>
          <SelectItem value="pineapple">Delhi</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectState;
