import LocationIcon from '../Components/images/locationIcon.svg';
import shareLocation from '../Components/images/share.svg';
import Verified from '@/assets/Verified.svg';
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
    <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 mt-4">
      {/* Left Side: Venture Details */}
      <div className="text-left w-full md:w-2/3 lg:w-1/2">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Janapriya Ventures
            </h2>
            <img src={Verified} alt="Verified Badge" className="w-6 sm:w-8" />
          </div>
          <div className="hidden md:flex items-center gap-3">
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

        {/* Location */}
        <div className="flex items-center gap-4 mt-4 text-sm sm:text-base text-black">
          <img src={LocationIcon} alt="Location Icon" className="w-6 sm:w-8" />
          <span>Hyderabad West, Pin Code 500072</span>
          <img src={ShareCross} alt="Share Cross" className="w-6 sm:w-8" />
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-1 mt-3">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={Star}
              alt="Star Rating"
              className="w-5 sm:w-6"
            />
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-700 font-medium">
          Strategically located near Shamshabad Airport, offering excellent
          connectivity to the city, major highways, IT hubs, and key landmarks.
          This prime real estate boasts verified and clear-title documentation,
          ensuring a hassle-free transaction. The property is ideal for
          commercial, residential, or investment purposes, with rapidly growing
          infrastructure, high appreciation potential, and proximity to business
          centers, educational institutions, and healthcare facilities.
          Surrounded by greenery and modern amenities, it provides a perfect
          blend of convenience, luxury, and future growth prospects.
        </p>
      </div>

      {/* Right Side: Pricing & Contact */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col sm:flex-row md:flex-col gap-4 mt-6 md:mt-0 md:ml-24">
        <div className="border p-4 flex flex-col justify-center items-center sm:items-start gap-2 rounded-md w-full">
          <p className="text-gray-500 text-sm sm:text-base">Price</p>
          <p className="font-bold text-lg sm:text-xl">70.6 Lakhs</p>
          <Button className="bg-black text-white py-2 px-6 w-full rounded-md">
            Quotation
          </Button>
        </div>
        <div className="border p-4 flex flex-col justify-center items-center sm:items-start gap-2 rounded-md w-full">
          <p className="text-gray-500 text-sm sm:text-base">Land Owner</p>
          <p className="font-bold text-lg sm:text-xl">Mr. Sandeep</p>
          <Button className="bg-black text-white py-2 px-6 w-full rounded-md">
            Contact Owner
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VentureDetails;
