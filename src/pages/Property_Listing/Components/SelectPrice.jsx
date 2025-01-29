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

const prices = ['$50', '$100', '$150', '$200'];

export function SelectPrice() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Prices</SelectLabel>
          {prices.map((price, index) => (
            <SelectItem key={index} value={price}>
              {price}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectPrice;
