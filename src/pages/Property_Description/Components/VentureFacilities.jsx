import React, { useState } from 'react';
import Dropdown from '../Components/images/Dropdown.svg';
import arrowUp from '../Components/images/arrowup.svg';
import Clipboard from '../Components/images/clipboard.svg';

import { propertydetailsOne } from '@/data/data';
import Button from '@/components/ui/Button';
import Box from '@/components/Box';

const VentureFacilities = () => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-72 px-6 md:px-20">
      {/* Content Section */}
      <div className="w-full md:w-3/4 h-[320px] mt-auto">
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
            <svg
              width="200"
              height="190"
              viewBox="0 0 200 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-gray-300"
            >
              <path
                d="M190 100C190 88.181 187.672 76.4778 183.149 65.5585C178.626 54.6392 171.997 44.7177 163.64 36.3604C155.282 28.0031 145.361 21.3738 134.442 16.8508C123.522 12.3279 111.819 10 100 10C88.181 9.99999 76.4779 12.3279 65.5585 16.8508C54.6392 21.3737 44.7177 28.0031 36.3604 36.3604C28.0031 44.7176 21.3738 54.6391 16.8509 65.5584C12.3279 76.4777 10 88.181 10 100"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-300"
              />
              <path
                d="M10 100C10 80.9939 16.017 62.4756 27.1885 47.0993C38.36 31.723 54.1126 20.2781 72.1885 14.4049C90.2644 8.53169 109.736 8.5317 127.812 14.4049C145.887 20.2781 161.64 31.7231 172.812 47.0994"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              />
            </svg>
            <div className="flex ml-auto items-center gap-1 mb-auto text-sm relative">
              <div className="absolute mt-20 md:-left-40 right-40 -bottom-20 font-bold text-xl">
                90
              </div>
              <img src={arrowUp} alt={arrowUp} />
              <div className="text-green-600">10%</div>
            </div>
          </div>
        </div>
        <div className="-mt-12 relative">
          <div className="text-sm font-semibold">90 property visits</div>
          <div className="w-full md:w-[300px] text-xs text-gray-600">
            Distance (2 km from ORR), Land Size (2 Acres), Development Zone
            (Premium Growth Area), and Expected Appreciation (15–20% annually).
          </div>
          {/* <!-- Adjusted Border --> */}
          <div className="absolute left-0 -ml-4 mt-4 w-[calc(100%+2rem)] border-b border-gray-300"></div>
          <div className="flex gap-3 mt-8">
            <Button className="text-black p-3 rounded-md border border-gray-300 flex gap-2 items-center text-xs md:text-md">
              <img src={Clipboard} alt={Clipboard} /> Report Property
            </Button>
            <Button className="text-black p-3 rounded-md border border-gray-300 items-center flex gap-2">
              {/* <Heart
                onClick={toggleLike}
                className={`w-6 h-6 ${like ? 'fill-red-500' : ''}`}
              /> */}
              Shortlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureFacilities;
