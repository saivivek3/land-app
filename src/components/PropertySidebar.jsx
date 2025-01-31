import HomeIcon from '@/assets/sidebar-icons/home.svg';
import DashboardIcon from '@/assets/sidebar-icons/dashboard.svg';
import ListIcon from '@/assets/sidebar-icons/listing.svg';
import ProfileIcon from '@/assets/sidebar-icons/profile.svg';
import SettingsIcon from '@/assets/sidebar-icons/settings.svg';
import AvatarIcon from '@/assets/avatar-icon.svg';

import ChevronVerticalIcon from '@/assets/chevron-vertical.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '@/components/ui/Search';
import cn from '@/lib/cn';

const SidebarLink = ({ icon: Icon, label, active, onClick }) => (
  <li
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${active && 'bg-active text-[#252327] hover:text-[#252327]   '}`}
    onClick={onClick}
  >
    <img src={Icon} className="w-5 h-5 object-cover" alt={label} />
    <span className="text-xs font-medium">{label}</span>
  </li>
);

const sidebarLinksArr = [
  { icon: HomeIcon, label: 'Home', active: false, navigate: '/' },
  {
    icon: DashboardIcon,
    label: 'Dashboard',
    active: false,
    navigate: '/dashboard/user',
  },
  {
    icon: ListIcon,
    label: 'Listing Management',
    active: false,
    navigate: '/listings',
  },

  { icon: ProfileIcon, label: 'Profile', active: false, navigate: '/profile' },
  {
    icon: SettingsIcon,
    label: 'Settings',
    active: false,
    navigate: '/settings',
  },
];

function PropertySidebar({ className = '' }) {
  const [sidebarLinks, setSideBarLinks] = useState(sidebarLinksArr);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // state to control sidebar visibility
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const activeLinkName = pathname.split('/')[1];

  useEffect(() => {
    setSideBarLinks(prev =>
      prev.map(item =>
        item.navigate === '/' + activeLinkName
          ? { ...item, active: true }
          : { ...item, active: false },
      ),
    );
  }, [activeLinkName]);

  const handleClick = (label, navigateLink) => {
    setSideBarLinks(prev => {
      const prevItems = JSON.parse(JSON.stringify(prev));
      const newItems = prevItems.map(item => ({
        ...item,
        active: item.label === label,
      }));
      return newItems;
    });

    navigate(navigateLink);
    setIsSidebarOpen(false); // Close sidebar after navigation on mobile
  };

  return (
    <div
      className={`${className}  bg-white p-2 border-r rounded-xl cursor-pointer flex flex-col min-h-full  `}
    >
      {/* Mobile toggle button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-lg text-primary"
        >
          ☰
        </button>
      </div>

      {/* Sidebar when open in mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 md:hidden transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked outside
      ></div>
      <div
        className={cn(
          'fixed left-0 top-0 bg-white p-4 border-r rounded-xl cursor-pointer flex flex-col w-64 transform transition-transform z-50 h-screen md:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Top Section */}
        <section className="mb-8 ">
          <h1 className="text-xl font-semibold mb-6">LandApp</h1>
          <Search className="max-w-[230px]" />
        </section>

        {/* Middle Section */}
        <ul className="space-y-2 flex-1 ">
          {sidebarLinks.map(link => (
            <SidebarLink
              key={link.label}
              onClick={() => handleClick(link.label, link.navigate)}
              icon={link.icon}
              label={link.label}
              active={link.active}
            />
          ))}
        </ul>

        {/*  Close button for mobile sidebar */}
        <div className="absolute top-4 right-4 md:hidden block ">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-xl text-primary"
          >
            ✖
          </button>
        </div>

        {/* Bottom Section */}
        <div className="shadow-sm border border-bSecondary rounded-lg  ">
          <div className="flex items-center gap-2 p-4">
            <img
              src={AvatarIcon}
              alt="avatar-icon"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-primary font-semibold text-xs">
                Pradeep Kumar
              </p>
              <p className="text-tertiary text-xs">pradeep@landapp.com</p>
            </div>
            <img
              src={ChevronVerticalIcon}
              alt="avatar-icon"
              className="w-6 h-6 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySidebar;
