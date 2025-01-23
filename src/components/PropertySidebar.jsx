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
    navigate: '/dashboard',
  },
  {
    icon: ListIcon,
    label: 'Listings Management',
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

function PropertySidebar({ className = 'max-w-80' }) {
  const [sidebarLinks, setSideBarLinks] = useState(sidebarLinksArr);
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

  console.log(sidebarLinks, 'sidebarlinks', activeLinkName);

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
  };

  return (
    <div
      className={` ${className} bg-white p-4 border-r rounded-xl cursor-pointer  ml-2 mt-2 flex flex-col min-h-full`}
    >
      <section className="mb-8">
        <h1
          className="text-xl font-semibold mb-6"
          onClick={() => navigate('/')}
        >
          LandApp
        </h1>
        <Search />
      </section>
      <ul className="space-y-2">
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
