import { useState } from 'react';
// import filterIcon from './images/filterIcon.svg';
import SearchInput from '@/components/SearchInput';

function SearchBar() {
  const [clearSearchbar, setClearSearchbar] = useState('');
  const handleClearSearch = () => {
    setClearSearchbar('');
    console.log('cleared');
  };
  return (
    <div className="px-4 md:px-20">
      {/* Search Bar Container */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        {/* Search Input */}
        <SearchInput
          className="w-full"
          rounded="rounded-md"
          py="py-2"
          value={clearSearchbar}
          onChange={e => setClearSearchbar(e.target.value)}
        />

        <div className="flex gap-2 w-full sm:w-1/4">
          <button
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            onClick={handleClearSearch}
          >
            Clear
          </button>
          <button className="rounded-lg bg-black text-white px-4 py-2 w-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
