import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useFormHook from '@/hooks/useFormHook';
import cn from '@/lib/cn';
import Filter from '@/assets/filter.svg';
import DataTable from './DataTable';
import SearchComponent from '@/components/ui/Search';

const TabsWithTable = ({ tabsTriggerData, tabsData }) => {
  const [selectedTab, setSelectedTab] = useState({
    tabsData: tabsData[0]?.value,
    tabsTriggerData: tabsTriggerData[0]?.value,
  });

  function handleTabValue(value) {
    setSelectedTab(prev => ({ ...prev, tabsTriggerData: value }));
  }

  return (
    <div className="bg-white rounded-lg mt-3">
      <div className="space-y-4">
        {tabsTriggerData.length > 0 && (
          <Tabs
            defaultValue={selectedTab.tabsTriggerData.value}
            className="w-full"
            onValueChange={handleTabValue}
          >
            <TabsList className="border-1 border-bSecondary rounded-lg  py-2  w-full justify-start block h-fit space-x-2  ">
              {tabsTriggerData?.map(tbTrigger => (
                <TabsTrigger
                  key={tbTrigger.label}
                  value={tbTrigger.value}
                  className={cn(
                    ' rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4 ',
                    selectedTab.tabsTriggerData === tbTrigger.value
                      ? 'bg-white text-primary font-bold'
                      : 'text-primary bg-transparent',
                  )}
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
              {selectedTab.tabsTriggerData}
            </h2>
            <p className="text-tertiary text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </p>
          </>
        )}

        <div className="flex justify-between items-center gap-4 mb-4 shadow-sm">
          <section className="flex items-center ">
            {tabsData.map(tabD => (
              <Button
                key={tabD.id}
                onClick={() =>
                  setSelectedTab(prev => ({
                    ...prev,
                    tabsData: tabD.value,
                  }))
                }
                className={cn(
                  'text-secondary text-xs font-semibold hover:bg-transparent bg-white min-w-fit',
                  'border-r border-r-bPrimary rounded-none  px-4',
                  // First child styling
                  'first:rounded-l-md',
                  // Last child styling
                  'last:rounded-r-md ',
                  selectedTab.tabsData === tabD.value &&
                    'bg-bSecondary/50 font-bold',
                )}
              >
                {tabD.label}
              </Button>
            ))}
          </section>
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
