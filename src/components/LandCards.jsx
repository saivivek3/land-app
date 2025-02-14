import { useState } from 'react';
import { Link } from 'react-router-dom';
import verifiedIcon from '@/assets/verified.svg';
import MapMarkerDown from '@/assets/map-marker-down.svg';
import CurrencyDollar from '@/assets/currency-dollar.svg';
import Rating from '@/assets/rating.svg';

function LandCards({ item, link = '/property-description' }) {
  const [like, setLike] = useState(false);
  function handleLike(e) {
    e.preventDefault(); // Prevent navigation on SVG click
    setLike(!like);
  }
  return (
    <Link
      to={link}
      className="p-2 relative block bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Logo */}
      <img
        src={item.images?.[0] || 'https://via.placeholder.com/400'}
        alt={item.landName}
        className="w-full md:min-w-400 h-48 object-cover rounded-md"
      />

      {/* Featured Tag */}
      <span className="absolute top-4 left-4 text-white text-xs bg-black/70 rounded-full px-3 py-1">
        Featured
      </span>

      <svg
        onClick={handleLike}
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 top-6 right-6 absolute cursor-pointer"
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

      <div className="p-4">
        {/* Title and Verified Icon */}
        <div className="flex items-center mb-2">
          <h3 className="font-semibold text-lg text-gray-800">
            {item.landName || 'Land Name'}
          </h3>
          {item.verifiedIcon && (
            <img
              src={verifiedIcon}
              alt="Verified"
              className="w-5 h-5 ml-auto"
            />
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <img src={MapMarkerDown} alt="Location" className="w-4 h-4" />
          <span>{item.address}</span>
        </div>

        {/* Separator */}
        <div className="border-b border-gray-200 mb-3"></div>

        {/* Price, Size, and Rating */}
        <div className="flex justify-between text-xs sm:flex-row xl:text-sm items-center text-gray-600">
          <p className="flex items-center gap-2">
            <img src={CurrencyDollar} alt="Location" className="w-4 h-4" />

            {item.pricePerAcre}
          </p>
          <span className="text-gray-300">|</span>
          <p className="flex items-center gap-2">
            <img src={MapMarkerDown} alt="Location" className="w-4 h-4" />
            {item.sizeInAcres || 'N/A'} acres
          </p>
          <span className="text-gray-300">|</span>
          <p className="flex items-center gap-2">
            <img src={Rating} alt="Location" className="w-4 h-4" />

            {item.rating||0}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default LandCards;
