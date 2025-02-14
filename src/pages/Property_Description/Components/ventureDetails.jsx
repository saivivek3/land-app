import LocationIcon from '../Components/images/locationIcon.svg';
import shareLocation from '../Components/images/share.svg';
import Verified from '@/assets/Verified.svg';
import Star from '../Components/images/YellowStar.svg';
import ShareCross from '../Components/images/shareCross.svg';
import Button from '@/components/ui/Button';
import WishlistButton from '@/components/WishListButton';
import { useState } from 'react';
import { toIndianLakhs } from '@/utils/helper';

const VentureDetails = ({
  propertyDetails: {
    landName,
    description,
    pincode,
    address,
    totalPrice,
    userId,
  },
}) => {
  const [like, setLike] = useState(false);

  function handleLike(e) {
    e.preventDefault(); // Prevent navigation on SVG click
    setLike(!like);
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-24">
      {/* Left Side: Venture Details */}
      <div className="text-left w-full lg:w-2/3">
        <div className="flex flex-row items-center sm:items-start justify-between w-full xl:-mt-12">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              {landName}
            </h2>
            <img src={Verified} alt="Verified Badge" className="w-6 sm:w-8" />
          </div>

          <div className="flex gap-2 items-center">
            <WishlistButton
              border="border border-gray-300"
              userId={userId}
              landId={6}
            />
            <img src={shareLocation} alt="Share Location" className="w-6 h-6" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 mt-4 text-sm sm:text-base text-black">
          <img src={LocationIcon} alt="Location Icon" className="w-6 sm:w-8" />
          <p>
            {address}, <span>Pin Code {pincode}</span>
          </p>
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
          {description}
        </p>
      </div>

      {/* Right Side: Pricing & Contact */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col sm:flex-row md:flex-col gap-4 mt-6 md:mt-0 md:ml-24">
        <div className="border p-4 flex flex-col justify-center items-center sm:items-start gap-2 rounded-md w-full">
          <p className="text-gray-500 text-sm sm:text-base">Price</p>
          <p className="font-bold text-lg sm:text-xl">
            {toIndianLakhs(totalPrice)}
          </p>
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
