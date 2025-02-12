import CalendarDropdown from '@/components/CalenderDropdown';
import SearchInput from '@/components/SearchInput';
import FilterIcon from '../Property_Listing/Components/images/filterIcon.svg';
import { DatePickerWithRange } from '@/components/DateRangePicker';
// md:gap-36
function FilterPanel() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 mt-10">
      <div className="relative w-full md:w-auto">
        <SearchInput
          className="relative"
          py="py-1.5"
          rounded="rounded-md"
          showIcon={true}
          width="w-full md:w-60"
        />
        <p className="absolute right-3 bottom-1 border border-bSecondary rounded-[4px] p-1 text-xs text-quaternary font-medium">
          ⌘K
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto ml-auto">
        <button className="border border-gray-300 rounded-md bg-white text-black px-4 py-1.5 whitespace-nowrap w-full md:w-auto">
          Sort by date
        </button>
        <CalendarDropdown width="md:w-96 md:hidden block" />
        <DatePickerWithRange className="md:block hidden" />
        <button className="border border-gray-300 px-6 py-1.5 flex items-center rounded-md gap-2 w-full md:w-auto justify-center">
          <img src={FilterIcon} alt="Filter icon" className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}

export default FilterPanel;
