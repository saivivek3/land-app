import { Home, LayoutDashboard, ListPlus, User, Settings } from 'lucide-react';
import AvatarIcon from '@/assets/avatar-icon.svg';

import ChevronVerticalIcon from '@/assets/chevron-vertical.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarLink = ({ icon: Icon, label, active, onClick }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${active ? 'bg-active text-[#252327]' : 'hover:text-[#252327]  hover:bg-active '}`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    <span className="text-xs font-medium">{label}</span>
  </div>
);

const sidebarLinksArr = [
  { icon: Home, label: 'Home', active: false, navigate: '/' },
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    active: false,
    navigate: '/dashboard',
  },
  {
    icon: ListPlus,
    label: 'Listings Management',
    active: false,
    navigate: '/listings',
  },
  { icon: User, label: 'Profile', active: true, navigate: '/profile' },
  { icon: Settings, label: 'Settings', active: false, navigate: '/settings' },
];

function PropertySidebar({ className = 'max-w-80' }) {
  const [sidebarLinks, setSideBarLinks] = useState(() => sidebarLinksArr);
  const navigate = useNavigate();

  const handleClick = (label, navigateLink) => {
    setSideBarLinks(prev =>
      prev.map(link =>
        link.label === label
          ? { ...link, active: true }
          : { ...link, active: false },
      ),
    );

    navigate(navigateLink);
  };

  return (
    <div
      className={` ${className} bg-white p-4 border-r rounded-xl  ml-2 mt-2 flex flex-col min-h-full`}
    >
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-6">LandApp</h1>
        {/* <Input
            placeholder="Search"
            className="mb-4"
            icon={<Search className="w-4 h-4" />}
          /> */}
      </div>
      <div className="space-y-2">
        {sidebarLinks.map((link, index) => (
          <SidebarLink
            key={index}
            onClick={() => handleClick(link.label, link.navigate)}
            icon={link.icon}
            label={link.label}
            active={link.active}
          />
        ))}
      </div>
      <div className="shadow-sm border border-bSecondary rounded-lg mt-auto">
        <div className="flex items-center gap-2 p-4 ">
          <img
            src={AvatarIcon}
            alt="avatar-icon"
            className="w-8 h-8 rounded-full "
          />
          <div className="">
            <p className="text-primary font-semibold text-xs">Pradeep Kumar</p>
            <p className="text-tertiary text-xs">pradeep@landapp.com</p>
          </div>

          <img
            src={ChevronVerticalIcon}
            alt="avatar-icon"
            className="w-6 h-6 object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default PropertySidebar;
