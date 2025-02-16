import { useEffect, useState } from 'react';
// import filterIcon from './images/filterIcon.svg';
import SearchInput from '@/components/SearchInput';
import { useGet, usePost } from '@/apis';
import { useDispatch, useSelector } from 'react-redux';
import { setAllLandProperties } from '@/features/property/propertySlice';
import { useQueryClient } from '@tanstack/react-query';

function SearchBar({ onHandleSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const { districtId, stateId, mandalId, selectedDate } = useSelector(
    state => state.location,
  );

  const handleClearSearch = () => {
    setSearchInput('');
  };

  async function handleSubmit() {
    const data = {
      stateId,
      districtId,
      mandalId,
      keyword: searchInput,
      // isDescending: true,
      postedFrom: selectedDate?.from,
      postedTo: selectedDate?.to,
    };
    console.log(data, 'data');
    onHandleSubmit(data);
  }

  return (
    <div className="px-4 md:px-20">
      {/* Search Bar Container */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        {/* Search Input */}
        <SearchInput
          className="w-full"
          rounded="rounded-md"
          py="py-2"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />

        <div className="flex gap-2 w-full sm:w-1/4">
          <button
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            onClick={handleClearSearch}
          >
            Clear
          </button>
          <button
            className="rounded-lg bg-black text-white px-4 py-2 w-full"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
