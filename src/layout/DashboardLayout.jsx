import PropertySidebar from '@/components/PropertySidebar';

import AvatarIcon from '@/assets/avatar-icon.svg';

import Button from '@/components/ui/Button';
import Filter from '@/assets/filter.svg';
import { Card, CardContent } from '@/components/ui/card';
import { MoreVertical, PlusIcon } from 'lucide-react';
import TabsWithTable from '@/pages/agentprofile/TabsWithTable';
import { useState } from 'react';
import { addDays, format } from 'date-fns';
import IncreaseIcon from '@/assets/increase-icon.svg';
import DecreaseIcon from '@/assets/decrease-icon.svg';
import ReportIcon from '@/assets/report-icon.svg';
import { DatePickerWithRange } from '@/components/DateRangePicker';
import { Outlet, useLocation } from 'react-router-dom';

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
        <h3 className=" text-tertiary font-semibold text-sm">{title}</h3>
        <MoreVertical className="h-5 w-5 text-gray-400 cursor-pointer" />
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-3xl font-bold">{value}</span>
        <div className="flex items-center space-x-1 border border-bPrimary shadow-sm rounded-lg px-2 py-1">
          {isPositive ? (
            <img src={IncreaseIcon} alt="increase-icon" />
          ) : (
            <img src={DecreaseIcon} alt="decrease-icon" />
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

function DashboardLayout() {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[2];

  const headingTypes = {
    agent: {
      heading: 'Listing Managemet',
      subHeading:
        'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum',
    },
    admin: {
      heading: 'Property Listing',
      subHeading:
        'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum',
    },
    user: {
      heading: 'Active Summary',
      subHeading:
        'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum',
    },
  };
  return (
    <div className="shadow-sm py-4 px-6 rounded-lg bg-white ml-[216px]">
      <div className="flex">
        <PropertySidebar />
        <div className="flex-1 px-4">
          <section className="flex gap-2 justify-between py-2 ">
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
          </section>

          {/* -------calender--------------- */}
          <div className="flex items-center ">
            <div className="rounded-lg border border-bPrimary min-w-96 flex items-end  w-8 h-8 bg-white flex-1">
              <div className="shadow-sm ">
                <button className="rounded-l-lg max-w-32 px-4 py-1 text-sm border-r border-bPrimary bg-white">
                  Default
                </button>
              </div>
            </div>
            <div className="min-w-96 ml-14  ">
              <DatePickerWithRange />
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-white text-secondary text-xs font-semibold mt-0 hover:bg-white/50"
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

          <Outlet />
          {/* //table */}
          <section className="shadow-sm border border-bSecondary rounded-xl b-white p-4  ">
            <div className="flex gap-2 items-center  p-2">
              <div className="flex-1 space-y-1">
                <p className="text-primary text-base font-semibold">
                  {headingTypes[pathName].heading}
                </p>
                <p className="text-tertiary text-xs">
                  {' '}
                  {headingTypes[pathName].subHeading}
                </p>
              </div>

              {['user', 'admin'].includes(pathName) && (
                <Button className="shadow-sm bg-white text-tertiary max-w-fit mt-0 p-2 ">
                  <div className="flex gap-2 items-center">
                    <img
                      src={ReportIcon}
                      alt="report-icon"
                      className="w-4 h-4 object-cover"
                    />
                    <span>
                      {pathName === 'user' ? 'Report' : 'Bulk Upload'}
                    </span>
                  </div>
                </Button>
              )}

              {pathName === 'agent' && (
                <div className="flex gap-4">
                  <Button className="bg-white min-w-fit px-4 mt-0 hover:bg-white/50">
                    <div className="flex items-center gap-2 ">
                      <img
                        src={ReportIcon}
                        alt="report-icon"
                        className="w-6 h-6 object-cover  "
                      />
                      <span className="text-sm font-semibold text-secondary ">
                        Download CSV
                      </span>
                    </div>
                  </Button>
                  <Button className=" min-w-fit px-4 mt-0">
                    <div className="flex items-center gap-2 ">
                      <PlusIcon />
                      <span className="text-sm font-semibold text-white ">
                        Create New
                      </span>
                    </div>
                  </Button>
                </div>
              )}
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
