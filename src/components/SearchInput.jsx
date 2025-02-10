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
  className = 'w-full',
  padding,
  borderBold,
  width = 'w-full',
  py,
  rounded,
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${borderColor} ${padding} placeholder-${
          placeholderColor || 'gray-500'
        } ${width} px-8 ${py} text-sm text-gray-700 border ${borderBold} border-gray-400 ${rounded} shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none`}
      />
      {children}

      {/* Search Icon */}
      {showIcon && (
        <div className="absolute inset-y-0 left-2 flex items-center pr-3">
          <img src={SearchIcon} alt="Search Icon" />
        </div>
      )}

      {/* Right Icon */}
      {showIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img src={RightIcon} alt="Right Icon" />
        </div>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string, // Controlled input value
  onChange: PropTypes.func, // Prop for handling input changes
  showIcon: PropTypes.bool,
  className: PropTypes.string,
  padding: PropTypes.string,
  borderColor: PropTypes.string,
  placeholderColor: PropTypes.string,
};

export default SearchInput;
