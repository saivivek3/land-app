import { useNavigate } from 'react-router-dom';
import LeftArrow from '../Landapp_v1/images/leftArrow.svg';

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="relative px-4 py-2">
      <div
        className="flex gap-2 items-center cursor-pointer text-sm sm:text-base"
        onClick={() => navigate(-1)}
      >
        <img
          src={LeftArrow}
          alt="Left Arrow"
          className="w-4 h-4 filter brightness-0 contrast-100"
        />
        <div>Back to</div>
      </div>
      <h2 className="text-black mt-3 text-lg font-semibold text-left">
        Property Listings
      </h2>
      <p className="text-sm text-gray-500 mt-1 text-left">
        Borem ipsum dolor sit amet
      </p>
    </div>
  );
}

export default Topbar;
