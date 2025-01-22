// import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Your districts data
const districts = [
  { city: 'Hyderabad', short: 'TS' },
  { city: 'Medak', short: 'TS' },
  { city: 'Warangal', short: 'TS' },
  { city: 'Karimnagar', short: 'TS' },
  { city: 'Khammam', short: 'TS' },
  { city: 'Nizamabad', short: 'TS' },
  { city: 'Adilabad', short: 'TS' },
  { city: 'Mahbubnagar', short: 'TS' },
  { city: 'Rangareddy', short: 'TS' },
  { city: 'Nalgonda', short: 'TS' },
];

export function SelectDistrict() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select District" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Districts</SelectLabel>
          {districts.map((district, index) => (
            <SelectItem
              key={index}
              value={`${district.city}, ${district.short}`}
            >
              {district.city}, {district.short}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectDistrict;
