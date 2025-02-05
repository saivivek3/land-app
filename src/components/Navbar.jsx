import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@/assets/avatar-icon.svg';

function Navbar({
  logoText = 'Land App',
  // avatarSrc = 'Avatar',
  avatarAlt = 'Avatar',
  profileLink = '/profile',
  menuItems = [
    { label: 'All Lands', to: '/all-lands' },
    { label: 'Developers', to: '#' },
    { label: 'Lakes', to: '#' },
    { label: 'Premium', to: '/premium-property/satellite-view' },
    { label: 'Services', to: '#' },
  ],
  children,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="flex items-center justify-between bg-white z-50 relative w-full text-black 
      mt-4 md:mt-0 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 md:shadow-lg"
    >
      {/* Left Section - Logo and Menu */}
      <div className="flex items-center gap-6">
        <Link to="/">
          <div className="font-bold cursor-pointer">{logoText}</div>
        </Link>
        {/* Menu */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex gap-6 py-6 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col font-semibold justify-center items-center md:flex-row md:items-center gap-5 cursor-pointer">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section - Notifications and Avatar (Hidden in Mobile View) */}
      <div className="flex items-center md:gap-4 gap-3">
        {children && <div className="addtional-content">{children}</div>}

        <div className="relative">
          <Link to={profileLink}>
            <img
              src={Avatar}
              alt={avatarAlt}
              className="  w-10 h-19 cursor-pointer"
            />
            <div className="absolute top-6 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
          </Link>
        </div>

        {/* Hamburger Menu - Visible on Small Screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-6"
          onClick={handleToggleMenu}
        >
          {/* Hamburger Icon */}
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close Icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger Icon
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
