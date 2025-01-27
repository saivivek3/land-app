import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@/assets/images/searchIcon.svg';
import RightIcon from '@/assets/images/RightIcon.svg';

function SearchInput({
  placeholder = 'Search',
  placeholderColor,
  borderColor,
  value,
  onChange,
  children,
  showIcon = true,
  className = 'w-full', // Default to "w-full" if no className is provided
  padding,
  borderBold,
  width = 'w-full',
  py,
  rounded,
}) {
  const [inputValue, setInputValue] = useState(''); // Step 1: Manage input value with state
  const handleInputChange = e => {
    setInputValue(e.target.value); // Step 2: Update state on user input
  };
  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <input
        type="text"
        value={value || inputValue} // Step 3: Bind input value to state or prop
        onChange={e => {
          handleInputChange(e);
          if (onChange) onChange(e); // Step 4: Update the state and call onChange prop
        }} // Step 4: Update the state on input change
        placeholder={placeholder}
        className={`${borderColor} ${padding} placeholder-${
          placeholderColor || 'gray-500'
        } ${width} px-8 ${py} text-sm text-gray-700 border ${borderBold} border-gray-400 ${rounded} shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none`}
      />
      {children}

      {/* Search Icon */}

      {showIcon && (
        <div className="absolute inset-y-0 left-2 flex items-center pr-3">
          <img src={SearchIcon} alt={SearchIcon} />
        </div>
      )}

      {/* Right Icon */}
      {showIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img src={RightIcon} alt={RightIcon} />
        </div>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string, // Added value prop type
  onChange: PropTypes.func, // Added onChange prop type
  showIcon: PropTypes.bool,
  className: PropTypes.string,
  padding: PropTypes.string,
  borderColor: PropTypes.string,
  placeholderColor: PropTypes.string,
};

export default SearchInput;
