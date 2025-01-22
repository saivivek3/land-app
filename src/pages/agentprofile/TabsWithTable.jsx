import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import useFormHook from '@/hooks/useFormHook';
import cn from '@/lib/cn';
import Filter from '@/assets/filter.svg';
import DataTable from './DataTable';

const TabsWithTable = ({ tabsTriggerData, tabsData }) => {
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
        {tabsTriggerData.length > 0 && (
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="border-1 border-bSecondary rounded-lg  w-full justify-start block h- space-x-2">
              {tabsTriggerData?.map(tbTrigger => (
                <TabsTrigger
                  key={tbTrigger.label}
                  value={tbTrigger.value}
                  className=" rounded-md text-secondary text-xs font-semibold"
                >
                  {tbTrigger.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}

        {tabsTriggerData.length > 0 && (
          <>
            <h2 className="text-primary text-sm font-semibold">
              Search History
            </h2>
            <p className="text-tertiary text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </p>
          </>
        )}

        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="flex items-center ">
            {tabsData.map((tabD, index) => (
              <Button
                key={tabD.id}
                variant="outline"
                onClick={() => setSelectedTab(tabD.value)}
                className={cn(
                  'text-secondary text-xs font-semibold hover:bg-transparent bg-white min-w-fit',
                  'border-r border-r-bPrimary rounded-none shadow-sm',
                  // First child styling
                  'first:rounded-l-md',
                  // Last child styling
                  'last:rounded-r-md last:border-r-0',
                  selectedTab === tabD.value && 'bg-bSecondary',
                )}
              >
                {tabD.label}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative top-[18px] ">
              <Search className="absolute left-3 top-4 flex items-center text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search"
                className=" w-[250px] rounded-lg  border border-bPrimary p-0 h-10  pl-8"
                register={register}
                name="search"
              />
              <p className="absolute right-3  top-3 border border-bSecondary rounded-[4px] p-1 text-xs text-quaternary font-medium">
                ⌘K
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-white text-secondary text-xs font-semibold"
              iconUrl={Filter}
            >
              Filters
            </Button>
          </div>
        </div>
        <DataTable />
      </div>
    </div>
  );
};

export default TabsWithTable;
