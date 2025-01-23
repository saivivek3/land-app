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

export function SelectLocation() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Location</SelectLabel>
          <SelectItem value="apple">Shamshabad</SelectItem>
          <SelectItem value="banana">Secundrabad</SelectItem>
          <SelectItem value="blueberry">Tolichowki</SelectItem>
          <SelectItem value="grapes">Mehdipatnam</SelectItem>
          <SelectItem value="pineapple">RetiBowli</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectLocation;
