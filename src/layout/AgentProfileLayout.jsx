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
    <div className="flex min-h-screen shadow-sm relative">
      {/* Sidebar */}
      <PropertySidebar absolute="absolute" />
      {/* Main Content */}
      <div className="flex-1 md:ml-60">
        <div className="relative">
          <img src={BgImg} alt="Cover" className="w-full h-48 object-cover" />
          <div className="border-b border-b-disabledDark px-4">
            <div className="px-4 md:px-10 md:py-6">
              <section className="flex flex-wrap items-center py-2 relative">
                <div className="absolute -mt-40 md:-mt-20 xl:-mt-28">
                  <img
                    src={AvatarIcon}
                    alt="Profile"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-white"
                  />
                </div>
                <div className="ml-28 md:ml-32 mt-4 md:mt-0 w-full md:w-auto">
                  <div
                    className="flex items-center gap-2 text-primary mb-4 cursor-pointer"
                    onClick={() => navigate(-1)}
                  >
                    <img src={ArrowLeftIcon} alt="" />
                    <span className="text-sm md:text-base font-bold">
                      Back to
                    </span>
                  </div>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Pradeep Kumar
                  </h1>
                  <p className="text-tertiary text-xs md:text-sm">
                    Senior Real Estate Consultant
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 text-[#fdb022] fill-[#fdb022]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 ml-auto items-center md:mt-0">
                  <Button className="shadow-sm border border-bPrimary p-2 bg-white hover:bg-white/50 text-black">
                    <MoreVertical className="w-4 h-4 rotate-90" />
                  </Button>
                  <Button className="text-xs px-3">Follow</Button>
                </div>
              </section>
            </div>
          </div>

          {/* <Button className="w-full mb-8 bg-violet-600 hover:bg-violet-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Pradeep
          </Button> */}
          <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 text-center md:px-4 sm:px-8 pt-3 pb-6 border-b border-bDisabledDark">
            <div className="flex justify-center items-center border-b sm:border-b-0 sm:border-r-2 border-r-[#d9d9d9]">
              <Button
                iconUrl={PhoneCallIcon}
                className="py-3 w-full sm:max-w-fit px-4"
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
                className="p-4 rounded-lg bg-white flex flex-col justify-center"
              >
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="px-8 space-y-2 p-4 border-b-bSecondary border-b-[1px] mb-4 flex flex-row gap-5 justify-between items-center">
            <article className="w-full sm:w-auto">
              <h2 className="text-base text-primary font-semibold">
                Experience
              </h2>
              <p className="text-tertiary text-xs">
                12 years of experience in the real estate sector, specializing
                in agricultural and non-agricultural properties.
              </p>
            </article>
            <MoreVertical
              size={20}
              className="object-cover text-gray-400 cursor-pointer self-start"
            />
          </div>

          <Tabs defaultValue="profile" className="px-8 w-full">
            <div className="overflow-x-auto">
              <TabsList className="border-1 border-bSecondary rounded-lg w-full flex md:justify-start space-x-2 py-2 h-fit whitespace-nowrap">
                <TabsTrigger
                  value="profile"
                  className="rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4"
                >
                  Profile Details
                </TabsTrigger>
                <TabsTrigger
                  value="properties"
                  className={cn(
                    'rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4',
                  )}
                >
                  Posted Properties
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className={cn(
                    'rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4',
                  )}
                >
                  History
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className={cn(
                    'rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4',
                  )}
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="locations"
                  className={cn(
                    'rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4',
                  )}
                >
                  Locations
                </TabsTrigger>
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
