import { useState } from 'react';

// Telangana districts
const districts = [
  { city: 'Hyderabad', short: 'TS' },
  { city: 'Medak', short: 'TS' },
  { city: 'Warangal', short: 'TS' },
  { city: 'Karimnagar', short: 'TS' },
  { city: 'Khammam', short: 'TS' },
  { city: 'Nizamabad', short: 'TS' },
  { city: 'Adilabad', short: 'TS' },
  { city: 'Mahbubnagar', short: 'TS' },
  { city: 'Rangareddy', short: 'TS' },
  { city: 'Nalgonda', short: 'TS' },
];

const StateDropdown = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = district => {
    setSelectedDistrict(district);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <div className="flex items-center">
          <span className="mr-2">{selectedDistrict.city}</span>
          <span className="text-gray-500 text-xs">
            {selectedDistrict.short}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <ul className="py-1">
            {districts.map((district, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSelect(district)}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span className="mr-2">{district.city}</span>
                  <span className="text-gray-500 text-xs">
                    {district.short}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StateDropdown;
