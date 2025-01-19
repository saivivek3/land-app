import AvatarIcon from '@/assets/avatar-icon.svg';

function Header() {
  return (
    <header className="bg-white shadow-md h-11 flex justify-between  items-center py-3 px-36">
      <h1 className="text-base text-black font-bold">Land App</h1>
      <img src={AvatarIcon} alt="avatar" className="h-7 w-7 rounded-full" />
    </header>
  );
}

export default Header;
