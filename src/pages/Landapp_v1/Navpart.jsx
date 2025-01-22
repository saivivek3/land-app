import { useNavigate } from 'react-router-dom';

function NavPart() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-3">
        <div className="absolute right-16 top-11 border border-white bg-green-500 rounded-full w-2 h-2"></div>
        <div
          className="border border-gray-300 px-2 py-1 rounded-md shadow-md text-sm font-semibold cursor-pointer"
          onClick={() => navigate('/authentication')}
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
