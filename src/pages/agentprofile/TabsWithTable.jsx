import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useFormHook from '@/hooks/useFormHook';
import cn from '@/lib/cn';
import Filter from '@/assets/filter.svg';
import DataTable from './DataTable';
import SearchComponent from '@/components/ui/Search';

const TabsWithTable = ({ tabsTriggerData, tabsData }) => {
  const [selectedTab, setSelectedTab] = useState('allHistory');

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

        <div className="flex justify-between items-center gap-4 mb-4 shadow-sm">
          <div className="flex items-center ">
            {tabsData.map((tabD, index) => (
              <Button
                key={tabD.id}
                variant="outline"
                onClick={() => setSelectedTab(tabD.value)}
                className={cn(
                  'text-secondary text-xs font-semibold hover:bg-transparent bg-white min-w-fit',
                  'border-r border-r-bPrimary rounded-none  px-4',
                  // First child styling
                  'first:rounded-l-md',
                  // Last child styling
                  'last:rounded-r-md ',
                  selectedTab === tabD.value && 'bg-bSecondary/50 font-bold',
                )}
              >
                {tabD.label}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <SearchComponent />
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
