
import Button from '@/components/ui/Button.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MoreVertical, Star, MoreHorizontal } from 'lucide-react';
import AvatarIcon from '@/assets/avatar-icon.svg';
// import ChevronVerticalIcon from '@/assets/chevron-vertical.svg';
import ArrowLeftIcon from '@/assets/arrow-left.svg';
import PhoneCallIcon from '@/assets/phone.svg';
import cn from '@/lib/cn';
import PropertySidebar from '@/components/PropertySidebar';
import { useNavigate } from 'react-router-dom';

const AgentProfileLayout = ({ children, value }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen shadow-sm  ">
      {/* Sidebar */}
      <PropertySidebar />
      {/* Main Content */}
      <div className="flex-1">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cover"
            className="w-full h-48 object-cover"
          />
          <div className="border-b border-b-disabledDark p-4">
            <div className=" px-8  -mt-10">
              <section className="flex  items-center ">
                <img
                  src={AvatarIcon}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white "
                />
                <div className=" mt-12 ml-4 space-y-1">
                  <div
                    className="flex items-center gap-2 text-primary mb-4 cursor-pointer"
                    onClick={() => navigate(-1)}
                  >
                    <img src={ArrowLeftIcon} alt="" />
                    <span className="text-base font-bold">Back to</span>
                  </div>
                  <h1 className="text-xl font-semibold">Pradeep Kumar</h1>
                  <p className="text-tertiary text-sm">
                    Senior Real Estate Consultant
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#fdb022] fill-[#fdb022]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 ml-auto items-center ">
                  <Button className="shadow-sm border border-bPrimary p-2 bg-white hover:bg-white/50 text-black">
                    <MoreVertical className="w-4 h-4 rotate-90" />
                  </Button>
                  <Button className="text-xs px-3 ">Follow</Button>
                </div>
              </section>
            </div>
          </div>

          {/* <Button className="w-full mb-8 bg-violet-600 hover:bg-violet-700">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Pradeep
          </Button> */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-center px-8  pt-3  pb-6 border-b borer-b-bDisabledDark">
            <div className="flex justify-center items-center border-r-2 border-r-[#d9d9d9] ">
              <Button
                iconUrl={PhoneCallIcon}
                className="py-3 max-w-fit w-full px-4"
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

          {/* experience */}
          <div className="space-y-2 p-4 border-b-bSecondary border-b-[1px] mb-4 flex gap-2 justify-between items-center">
            <article>
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
              className="object-cover text-gray-400 cursor-pointer"
            />
          </div>

          {/* experience */}

          <Tabs defaultValue="profile" className="w-full px-4">
            <TabsList className="border-1 border-bSecondary rounded-lg  w-full justify-start block h- space-x-2 py-2 h-fit">
              <TabsTrigger
                value="profile"
                className=" rounded-md text-secondary text-xs font-semibold transition-all duration-500 ease-in-out py-2 px-4"
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

            {children}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileLayout;
