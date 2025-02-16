import { useNavigate } from 'react-router-dom';

function NavPart() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative flex md:gap-6 gap-1">
        {/* Sell Your Land Button */}
        <div
          className="border border-gray-300 px-4 py-2 rounded-md text-[10px] shadow-md md:text-sm font-semibold cursor-pointer"
          onClick={() => navigate('/create-property')}
        >
          Sell your Land
        </div>

        {/* Container with Black Border */}
        <div className="flex gap-1 border-2 p-1 cursor-pointer rounded-md border-black bg-white items-end">
          {/* Left Line */}
          <div className="w-[2px] h-2 bg-black rounded-md"></div>
          {/* Middle (Tall) Line */}
          <div className="w-[2px] h-4 bg-black rounded-md"></div>
          {/* Right Line */}
          <div className="w-[2px] h-3 bg-black rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default NavPart;
