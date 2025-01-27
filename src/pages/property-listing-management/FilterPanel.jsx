import CalendarDropdown from '@/components/CalenderDropdown';
import SearchInput from '@/components/SearchInput';
import FilterIcon from '../Property_Listing/Components/images/filterIcon.svg';
function FilterPanel() {
  return (
    <div className="flex items-center gap-36 mt-10">
      <div className="relative">
        <SearchInput
          className="relative"
          py="py-1.5"
          rounded="rounded-md"
          showIcon={true}
          width="w-60"
        />
        <p className="absolute right-3 bottom-1 border border-bSecondary rounded-[4px] p-1 text-xs text-quaternary font-medium ">
          ⌘K
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="border border-gray-300 rounded-md bg-white text-black px-4 py-1 whitespace-nowrap">
          Sort by date
        </button>
        <CalendarDropdown />
        <button className="border border-gray-300 px-6 py-1 flex items-center rounded-md gap-2">
          <img src={FilterIcon} alt="Filter icon" className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}

export default FilterPanel;
