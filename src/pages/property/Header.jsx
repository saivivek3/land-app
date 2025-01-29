import AvatarIcon from '@/assets/avatar-icon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md flex justify-between items-center py-5 px-16">
      <Link to="/">
        <h1 className="text-base text-black font-bold">Land App</h1>
      </Link>

      <Link to="/profile">
        <img src={AvatarIcon} alt="avatar" className="h-7 w-7 rounded-full" />
      </Link>
    </header>
  );
}

export default Header;
