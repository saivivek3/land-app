import PropertySidebar from '@/components/PropertySidebar';
import React from 'react';
import AvatarIcon from '@/assets/avatar-icon.svg';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import cn from '@/lib/cn';
import Button from '@/components/ui/Button';
import Filter from '@/assets/filter.svg';
import { Card, CardContent } from '@/components/ui/card';
import { MoreVertical, ChevronUp, ChevronDown, Cloud } from 'lucide-react';
import TabsWithTable from '@/pages/agentprofile/TabsWithTable';

const stats = [
  { title: 'Saved Properties', value: 13, change: 10, isPositive: true },
  { title: 'My Investments', value: 4, change: 12, isPositive: true },
  { title: 'Recent Searches', value: 9, change: 2, isPositive: false },
  { title: 'Deals in Progress', value: 4, change: 2, isPositive: false },
];

const StatCard = ({ title, value, change, isPositive }) => (
  <Card className="flex-1 min-w-[200px]">
    <CardContent className="pt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className=" text-tertiary font-semibold text-xs">{title}</h3>
        <MoreVertical className="h-5 w-5 text-gray-400" />
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-xl font-bold">{value}</span>
        <div className="flex items-center space-x-1 border border-bPrimary shadow-sm rounded-lg px-2 py-1">
          {isPositive ? (
            <ChevronUp className="h-4 w-4 text-green-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-red-500" />
          )}
          <span
            className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}
          >
            {change}%
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="flex">
        <PropertySidebar />
        <div className="flex-1 px-4">
          <div className="flex gap-2 justify-between py-2 ">
            <div>
              <h2 className="text-primary text-xl font-semibold">
                Hello, Uday! Here's your property journey at a glance.
              </h2>
              <p className="text-tertiary text-sm">
                We're excited to have you back! Here's a quick glance at your
                progress:
              </p>
            </div>
            <img
              src={AvatarIcon}
              alt="avatar-icon"
              className="rounded-full h-8 w-8"
            />
          </div>

          {/* -------calender--------------- */}
          <div className="flex items-center ">
            <div className="rounded-lg border border-bPrimary min-w-96 flex items-end  w-8 h-8 bg-white flex-1"></div>
            <div className="min-w-96 ml-14  ">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[240px] pl-3 text-left font-normal bg-white text-primary mt-0',
                    )}
                    type="button"
                  >
                    {/* {field.value ? (
              format(field.value, 'PPP')
            ) : (
              <span>Pick a date</span>
            )} */}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    // selected={field.value}
                    // onSelect={field.onChange}
                    disabled={date =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-white text-secondary text-xs font-semibold mt-0"
                iconUrl={Filter}
              >
                Filters
              </Button>
            </div>
          </div>
          {/* userstatus */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {children}

          {/* //table */}
          <section className="shadow-sm border border-bSecondary rounded-xl b-white p-4  ">
            <div className="flex gap-2 items-center  p-2">
              <div className="flex-1 space-y-1">
                <p className="text-primary text-base font-semibold">
                  Activity Summary
                </p>
                <p className="text-tertiary text-xs">
                  Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum
                </p>
              </div>

              <Button className="shadow-sm bg-white text-tertiary max-w-32 mt-0 p-2 ">
                <div className="flex gap-2 items-center">
                  <Cloud />
                  <span>Report</span>
                </div>
              </Button>
            </div>

            <div className=" h-[1px] bg-bPrimary w-full"></div>
            <TabsWithTable
              tabsData={[
                { id: 1, value: 'viewall', label: 'View All' },
                { id: 2, value: 'monitored', label: 'Monitored' },
                { id: 3, value: 'shortlisted', label: 'Shortlisted' },
              ]}
              tabsTriggerData={[]}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
