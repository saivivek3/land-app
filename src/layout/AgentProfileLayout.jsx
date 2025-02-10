import Button from '@/components/ui/Button.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MoreVertical, Star, MoreHorizontal } from 'lucide-react';
// import AvatarIcon from '@/assets/ProfileAgent.svg';
import AvatarIcon from '@/assets/avatar-icon.svg';

import BgImg from '@/assets/BgImg.svg';
// import ChevronVerticalIcon from '@/assets/chevron-vertical.svg';
import ArrowLeftIcon from '@/assets/arrow-left.svg';

import PhoneCallIcon from '@/assets/phone.svg';
import cn from '@/lib/cn';
import PropertySidebar from '@/components/PropertySidebar';
import { useNavigate } from 'react-router-dom';

const AgentProfileLayout = ({ children, value }) => {
  const navigate = useNavigate();

  return (
    <div className="flex shadow-sm relative md:gap-2 lg:gap-3">
      {/* Sidebar */}
      <PropertySidebar absolute="absolute" />
      {/* Main Content */}
      <div className="flex-1 xs:ml-20 md:ml-60">
        <div className="relative">
          <img
            src={BgImg}
            alt="Cover"
            className="w-full h-36 xs:h-40 sm:h-48 object-cover"
          />
          <div className="border-b border-b-disabledDark px-2 xs:px-4">
            <div className="px-4 md:px-10 md:py-6">
              <section className="flex flex-wrap items-center py-2 relative">
                <div className="absolute -mt-32 xs:-mt-36 sm:-mt-40 md:-mt-20 xl:-mt-28">
                  <img
                    src={AvatarIcon}
                    alt="Profile"
                    className="w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 rounded-full border-white"
                  />
                </div>
                <div className="ml-24 xs:ml-28 sm:ml-32 mt-4 md:mt-0 w-full md:w-auto">
                  <div
                    className="flex items-center gap-2 text-primary mb-4 cursor-pointer"
                    onClick={() => navigate(-1)}
                  >
                    <img src={ArrowLeftIcon} alt="" />
                    <span className="text-xs xs:text-sm md:text-base font-bold">
                      Back to
                    </span>
                  </div>
                  <h1 className="text-sm xs:text-lg md:text-xl font-semibold">
                    Pradeep Kumar
                  </h1>
                  <p className="text-tertiary text-xs xs:text-sm">
                    Senior Real Estate Consultant
                  </p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-[#fdb022] fill-[#fdb022]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 xs:gap-3 ml-auto items-center md:mt-0">
                  <Button className="shadow-sm border border-bPrimary p-2 bg-white hover:bg-white/50 text-black">
                    <MoreVertical className="w-4 h-4 rotate-90" />
                  </Button>
                  <Button className="text-xs px-2 xs:px-3">Follow</Button>
                </div>
              </section>
            </div>
          </div>

          <div className="grid grid-cols-1 px-4 xs:px-6 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 text-center md:px-4 sm:px-8 pt-3 pb-6 border-b border-bDisabledDark">
            <div className="flex justify-center items-center border-b sm:border-b-0 sm:border-r-2 border-r-[#d9d9d9]">
              <Button
                iconUrl={PhoneCallIcon}
                className="py-2 xs:py-3 w-full sm:max-w-fit px-3 xs:px-4"
              >
                Call Pradeep
              </Button>
            </div>

            {[
              { label: 'Properties for Sale', value: '16' },
              { label: 'In Discussion', value: '04' },
              { label: 'Deals Closed', value: '20' },
            ].map(stat => (
              <div
                key={stat.label}
                className="p-3 xs:p-4 rounded-lg bg-white flex flex-col justify-center"
              >
                <div className="text-lg xs:text-xl font-bold">{stat.value}</div>
                <div className="text-xs xs:text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="px-4 xs:px-8 space-y-2 p-4 border-b-bSecondary border-b-[1px] mb-4 flex flex-row gap-5 justify-between items-center">
            <article className="w-full sm:w-auto ml-4">
              <h2 className="text-sm xs:text-base text-primary font-semibold">
                Experience
              </h2>
              <p className="text-tertiary text-xs">
                12 years of experience in the real estate sector, specializing
                in agricultural and non-agricultural properties.
              </p>
            </article>
            <MoreVertical
              size={18}
              className="object-cover text-gray-400 cursor-pointer self-start"
            />
          </div>

          <Tabs defaultValue="profile" className="px-4 xs:px-8 w-full">
            <div className="overflow-x-auto">
              <TabsList className="border-1 flex-wrap lg:flex-nowrap border-bSecondary rounded-lg w-full flex md:justify-start space-x-2 py-2 h-fit whitespace-nowrap">
                {[
                  { label: 'Profile Details', value: 'profile' },
                  { label: 'Posted Properties', value: 'properties' },
                  { label: 'History', value: 'history' },
                  { label: 'Reviews', value: 'reviews' },
                  { label: 'Locations', value: 'locations' },
                ].map(tab => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={cn(
                      'rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4',
                    )}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {children}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileLayout;
