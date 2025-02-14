import AvatarIcon from '@/assets/avatar-icon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md flex justify-between items-center py-5 md:px-16 px-6 xl:px-20 2xl:px-32">
      <Link to="/">
        <h1 className="text-xl text-black font-bold">Land App</h1>
      </Link>
      <Link to="/profile">
        <img src={AvatarIcon} alt="avatar" className="h-10 w-10 rounded-full" />
      </Link>
    </header>
  );
}

export default Header;
