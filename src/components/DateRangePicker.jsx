'use client';

import * as React from 'react';
import {  format } from 'date-fns';
import { CalendarIcon, ChevronDown } from 'lucide-react';

import cn from '@/lib/cn';
import Button from '@/components/ui/Button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function DatePickerWithRange({ className, onDateChange }) {
  const [date, setDate] = React.useState(null);

  const handleDateSelect = newDate => {
    setDate(newDate);
    onDateChange?.(newDate);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              'md:w-[300px] w-full justify-start text-left  hover:bg-transparent font-normal bg-white text-primary mt-0 ',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto  p-0 " align="start">
          <Calendar
            initialFocus
            mode="range"
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            fromYear={new Date().getFullYear() - 1}
            toYear={new Date().getFullYear() + 1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
