import { useNavigate } from 'react-router-dom';
import LeftArrow from '../Landapp_v1/images/leftArrow.svg';

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img
          src={LeftArrow}
          alt="Left Arrow"
          className="w-3 h-3 filter brightness-0 contrast-100"
        />

        <div>Back to</div>
      </div>
      <h2 className=" text-black mt-3 text-lg font-semibold">
        Property Listings
      </h2>
      <p className="text-sm text-gray-500 mt-1">Borem ipsum dolor sit amet</p>
    </div>
  );
}

export default Topbar;
