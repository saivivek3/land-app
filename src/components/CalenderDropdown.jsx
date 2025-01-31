import { useState } from 'react';

const CalendarDropdown = ({ width = 'md:w-40' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    from: '2024',
    to: '2025',
  });

  // Function to format the date to "Jan 6"
  const formatDate = date => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const handleDateChange = (key, value) => {
    setDateRange(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`relative w-full ${width} z-30`}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center md:justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 justify-center"
      >
        <div className="flex items-center">
          {/* Calendar Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 4h-1V2a1 1 0 10-2 0v2H8V2a1 1 0 10-2 0v2H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1V10h16v9zM5 8V7a1 1 0 011-1h1v1a1 1 0 002 0V6h8v1a1 1 0 002 0V6h1a1 1 0 011 1v1H5z" />
          </svg>
          {/* Formatted Date Range */}
          <span className="text-gray-700">
            {formatDate(dateRange.from)} - {formatDate(dateRange.to)}
          </span>
        </div>
        {/* Down Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
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

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-2">Select Date Range:</p>
            <div className="flex flex-col gap-4">
              {/* From Date */}
              <div>
                <label className="block text-gray-600 text-sm">From:</label>
                <input
                  type="date"
                  value={dateRange.from}
                  onChange={e => handleDateChange('from', e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {/* To Date */}
              <div>
                <label className="block text-gray-600 text-sm">To:</label>
                <input
                  type="date"
                  value={dateRange.to}
                  onChange={e => handleDateChange('to', e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDropdown;
