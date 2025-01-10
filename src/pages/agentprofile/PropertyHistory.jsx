import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, Edit } from 'lucide-react';
import SearchHistoryTable from './SearchHistoryTable';
import useFormHook from '@/hooks/useFormHook';
import cn from '@/lib/cn';

const PropertyHistory = () => {
  const { register } = useFormHook();
  const [selectedTab, setSelectedTab] = useState('allHistory');

  const historyData = [
    {
      id: 1,
      investor: 'Charles T',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Active',
    },
    {
      id: 2,
      investor: 'Davis Torff',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      id: 3,
      investor: 'Zain Korsgaard',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      id: 4,
      investor: 'Martin Philips',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      id: 5,
      investor: 'Anika Dias',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
    {
      id: 6,
      investor: 'Miracle Geidt',
      property: 'Janapriya Properties',
      contacted: 'Dec 5, 2024, 3 PM',
      location: 'Shamshabad, Hyderabad',
      status: 'Revisit Appointment',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="space-y-4">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="search">Search History</TabsTrigger>
            <TabsTrigger value="viewed">Viewed Properties</TabsTrigger>
            <TabsTrigger value="communication">
              Communication History
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <h2 className="text-primary text-sm font-semibold">Search History</h2>
        <p className="text-tertiary text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum
        </p>

        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="flex items-center ">
            <Button
              variant="outline"
              className={cn(
                'border-r-[1px] border-r-bPrimary bg-white rounded-r-none text-secondary text-xs font-semibold hover:bg-transparent',
                selectedTab === 'allHistory' && 'bg-disabledlight',
              )}
            >
              All History
            </Button>
            <Button
              variant="outline"
              className={cn(
                'bg-white rounded-l-none borfer-l-[1px] border-l-bPrimary text-secondary text-xs font-semibold hover:bg-transparent',
                selectedTab != 'allHistory' && 'bg-disabledlight',
              )}
            >
              Contacted
            </Button>
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative top-[18px] ">
              <Search className="absolute left-3 top-4 flex items-center text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className=" w-[250px] rounded-lg  border border-bPrimary p-0 h-10 placeholder:pl-8 "
                register={register}
                name="search"
              />
              <p className="absolute right-3  top-3 border border-bSecondary rounded-[4px] p-1 text-xs text-quaternary font-medium">
                ⌘K
              </p>
            </div>
            <Button variant="outline" className="bg-white">
              Filters
            </Button>
          </div>
        </div>
        <SearchHistoryTable />
      </div>
    </div>
  );
};

export default PropertyHistory;
