import React, { useState } from 'react';
import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  MoreVertical,
  Star,
  Home,
  LayoutDashboard,
  ListPlus,
  User,
  Settings,
} from 'lucide-react';
import AvatarIcon from '@/assets/avatar-icon.svg';
import ChevronVerticalIcon from '@/assets/chevron-vertical.svg';
import ArrowLeftIcon from '@/assets/arrow-left.svg';
import PhoneCallIcon from '@/assets/phone.svg';
import cn from '@/lib/cn';
import PropertySidebar from '@/components/PropertySidebar';

const SidebarLink = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${active ? 'bg-active text-[#252327]' : 'hover:text-[#252327]  hover:bg-active '}`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-xs font-medium">{label}</span>
  </div>
);

// const SearchHistory = () => {
//   const histories = [
//     {
//       investor: 'Charles T',
//       property: 'Janpriya Properties',
//       date: 'Dec 5, 2024, 3 PM',
//       location: 'Shamshadad, Hyderabad',
//       status: 'Active',
//     },
//     {
//       investor: 'Davis Teff',
//       property: 'Janpriya Properties',
//       date: 'Dec 6, 2024, 3 PM',
//       location: 'Shamshadad, Hyderabad',
//       status: 'Revisit Appointment',
//     },
//     // Add more history items as needed
//   ];

//   return (
//     <div className="mt-4">
//       <div className="flex justify-between items-center mb-4">
//         {/* <Input
//           placeholder="Search"
//           className="max-w-xs"
//           icon={<Search className="w-4 h-4" />}
//         /> */}
//         <Button variant="outline">Filters</Button>
//       </div>

//       <table className="w-full">
//         <thead className="text-sm text-gray-600">
//           <tr>
//             <th className="text-left p-3">Investor Name</th>
//             <th className="text-left p-3">Property Name</th>
//             <th className="text-left p-3">Contacted</th>
//             <th className="text-left p-3">Location</th>
//             <th className="text-left p-3">Status</th>
//             <th className="p-3"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {histories.map((item, index) => (
//             <tr key={index} className="border-t">
//               <td className="p-3">{item.investor}</td>
//               <td className="p-3 text-violet-600">{item.property}</td>
//               <td className="p-3">{item.date}</td>
//               <td className="p-3">{item.location}</td>
//               <td className="p-3">
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs ${
//                     item.status === 'Active'
//                       ? 'bg-green-100 text-green-600'
//                       : 'bg-blue-100 text-blue-600'
//                   }`}
//                 >
//                   {item.status}
//                 </span>
//               </td>
//               <td className="p-3">
//                 <Button variant="ghost" size="sm">
//                   <MoreVertical className="w-4 h-4" />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-between items-center mt-4">
//         <Button variant="ghost">Previous</Button>
//         <div className="flex gap-2">
//           {[1, 2, 3, 4].map(page => (
//             <Button
//               key={page}
//               variant={page === 1 ? 'secondary' : 'ghost'}
//               className="w-8 h-8 p-0"
//             >
//               {page}
//             </Button>
//           ))}
//         </div>
//         <Button variant="ghost">Next</Button>
//       </div>
//     </div>
//   );
// };

const AgentProfileLayout = ({ children, value }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex max-h-screen shadow-sm  ">
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
                  <div className="flex items-center gap-2 text-primary mb-4">
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
                className="py-3 max-w-[70%] w-full px-4"
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
          <div className="space-y-2 p-4 border-b-bSecondary border-b-[1px] mb-4">
            <h2 className="text-base text-primary font-semibold">Experience</h2>
            <p className="text-tertiary text-xs">
              12 years of experience in the real estate sector, specializing in
              agricultural and non-agricultural properties.
            </p>
          </div>

          {/* experience */}

          <Tabs defaultValue="profile" className="w-full ">
            <TabsList className="border-1 border-bSecondary rounded-lg  w-full justify-start block h- space-x-2">
              <TabsTrigger
                value="profile"
                className=" rounded-md text-secondary text-xs font-semibold"
              >
                Profile Details
              </TabsTrigger>
              <TabsTrigger
                value="properties"
                className={cn(
                  'rounded-md text-secondary text-xs font-semibold',
                )}
              >
                Posted Properties
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className={cn(
                  'rounded-md text-secondary text-xs font-semibold',
                )}
              >
                History
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className={cn(
                  'rounded-md text-secondary text-xs font-semibold',
                )}
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="locations"
                className={cn(
                  'rounded-md text-secondary text-xs font-semibold',
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
