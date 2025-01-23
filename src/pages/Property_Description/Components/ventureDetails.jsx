import LocationIcon from '../Components/images/locationIcon.svg';
import shareLocation from '../Components/images/share.svg';
import Verified from '../Components/images/verified-added.svg';
import Like from '../Components/images/like.svg';
import Star from '../Components/images/YellowStar.svg';
import ShareCross from '../Components/images/shareCross.svg';
import Button from '@/components/ui/Button';
import { useState } from 'react';

const VentureDetails = () => {
  const [like, setLike] = useState(false);
  function handleLike(e) {
    e.preventDefault(); // Prevent navigation on SVG click
    setLike(!like);
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-6 items-center py-3 rounded-lg mx-5 sm:mx-20">
      {/* Left Side: Venture Details */}
      <div className="text-left relative -mt-6 w-full sm:w-3/4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-60 items-center sm:items-start w-full sm:w-[740px]">
          <div className="flex gap-4">
            <h2 className="md:text-2xl font-bold text-gray-800 mb-2">
              Janapriya Ventures
            </h2>
            <img src={Verified} alt={Verified} className="w-8" />
            <img src={Like} alt={Like} className="w-8 md:hidden block" />
            <img
              src={shareLocation}
              alt={shareLocation}
              className="md:hidden block"
            />
          </div>
          <div className="flex md:block hidden md:flex-row ml-auto gap-3 md:flex">
            <div className="flex gap-2 items-center">
              {/* Heart Icon */}
              <svg
                onClick={handleLike}
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 cursor-pointer p-1 border border-gray-300 rounded-md"
                viewBox="0 0 24 24"
                fill={like ? 'red' : 'transparent'}
                stroke={like ? 'white' : 'gray'}
                strokeWidth="2"
              >
                <path
                  fill={like ? 'red' : 'transparent'}
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>

              <img
                src={shareLocation}
                alt="Share Icon"
                className="w-8 h-8 cursor-pointer border border-gray-300 p-1 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 text-black items-center mt-4">
          <img src={LocationIcon} alt={LocationIcon} />
          Hyderabad West, Pin Code 500072
          {/* <ShareComponent /> */}
          <img src={ShareCross} alt={ShareCross} />
        </div>
        <div className="flex gap-2 items-center mt-4">
          <img src={Star} alt={Star} />
          <img src={Star} alt={Star} />
          <img src={Star} alt={Star} />
          <img src={Star} alt={Star} />
        </div>
        <p className="w-full sm:w-[680px] mt-4 text-black font-semibold text-sm">
          Strategically located near Shamshabad Airport, offering excellent
          connectivity to the city and key landmarks. Verified and clear-title
          property, ideal for commercial, residential, or investment purposes.
        </p>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 rounded-md mt-4 w-full sm:w-1/3 ml-0 sm:ml-6">
        <div className="border p-4 flex flex-col justify-center items-left gap-1 rounded-md w-full">
          <p className="text-gray-500 text-sm md:text-left text-center">
            Price
          </p>
          <p className="font-bold text-xl md:text-left text-center">
            70.6 Lakhs
          </p>
          <Button className="bg-black py-2 px-4 text-gray-200 rounded-md w-full sm:w-auto">
            Quotation
          </Button>
        </div>
        <div className="border p-4 flex flex-col justify-center items-left gap-1 rounded-md w-full">
          <p className="font-bold text-sm text-gray-500 md:text-left text-center">
            Land Owner
          </p>
          <p className="font-bold text-xl md:text-left text-center">
            Mr.Sandeep
          </p>
          <Button className="bg-black text-gray-200 py-2 px-16 w-full sm:w-[120px] rounded-md whitespace-nowrap">
            Contact Owner
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VentureDetails;
