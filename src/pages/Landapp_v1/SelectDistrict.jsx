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

export function SelectDistrict() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a District" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select District</SelectLabel>
          <SelectItem value="apple">Hyderabad</SelectItem>
          <SelectItem value="banana">Karim Nagar</SelectItem>
          <SelectItem value="blueberry">Medak</SelectItem>
          <SelectItem value="grapes">Mehboob Nagar</SelectItem>
          <SelectItem value="pineapple">Adilabad</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectDistrict;
