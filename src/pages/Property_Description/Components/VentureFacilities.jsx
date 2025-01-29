import { useState } from 'react';
import Dropdown from '../Components/images/Dropdown.svg';
import arrowUp from '../Components/images/arrowup.svg';
import Clipboard from '../Components/images/clipboard.svg';

import { propertydetailsOne } from '@/data/data';
import Button from '@/components/ui/Button';
import Box from '@/components/Box';
import HalfRadialProgress from './HalfRadialProgress';

const VentureFacilities = () => {
  const [like, setLike] = useState(false);

  function handleLike(e) {
    e.preventDefault(); // Prevent navigation on SVG click
    setLike(!like);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-72 px-6 md:px-20">
      {/* Content Section */}
      <div className="w-full md:w-3/4 h-[320px] md:mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-10 px-4 rounded-md bg-gray-100 gap-4 border border-gray-400 p-4">
          {propertydetailsOne.map((box, index) => (
            <Box
              key={index}
              img={box.img}
              bg="bg-white"
              className="w-16 h-16 object bg-white rounded-md border border-gray-200"
              border="border border-gray-200" // Adjust image size for mobile
              title={
                <p className="text-xs sm:text-sm font-semibold">{box.title}</p>
              } // Adjust title size for mobile
              content={
                <p className="text-xs sm:text-sm text-gray-600">
                  {box.content}
                </p>
              } // Adjust content size for mobile
            />
          ))}
        </div>
      </div>

      {/* Opposite Section */}
      <div className="border border-gray-400 p-4 rounded-md w-full md:w-1/3 mr-auto flex flex-col">
        <div>
          <div className="flex">
            <p className="text-sm text-black font-bold leading-relaxed">
              Premium Property
            </p>
            <img src={Dropdown} alt="Dropdown" className="ml-auto" />
          </div>
          <p className="text-xs">Premium 2-Acre Land Near Shamshabad Airport</p>
          <div className="relative">
            <div className="absolute left-0 -ml-4 mt-4 w-[calc(100%+2rem)] border-b border-gray-300"></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex mt-6">
            <HalfRadialProgress progress={76} size={200} strokeWidth={20} />

            <div className="flex ml-auto items-center gap-1 mb-auto text-sm relative">
              <img src={arrowUp} alt={arrowUp} />
              <div className="text-green-600">10%</div>
            </div>
          </div>
        </div>
        <div className=" mt-4 relative">
          <div className="text-sm font-semibold">76 property visits</div>
          <div className="w-full md:w-[300px] text-xs text-gray-600">
            Distance (2 km from ORR), Land Size (2 Acres), Development Zone
            (Premium Growth Area), and Expected Appreciation (15–20% annually).
          </div>
          {/* <!-- Adjusted Border --> */}
          <div className="absolute left-0 -ml-4 mt-4 w-[calc(100%+2rem)] border-b border-gray-300"></div>

          <div className="flex gap-3 mt-8">
            <Button className="text-black bg-white p-3 rounded-md border border-gray-300 flex gap-2 items-center text-xs md:text-md whitespace-nowrap hover:bg-gray-300">
              <img src={Clipboard} alt={Clipboard} className="w-5 h-5" /> Report
              Property
            </Button>

            <Button className="text-black bg-white text-center p-3 rounded-md border border-gray-300 flex gap-2 items-center text-xs md:text-md hover:bg-gray-300">
              {/* Heart Icon */}
              <svg
                onClick={handleLike}
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 cursor-pointer p-1"
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
              Shortlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureFacilities;
