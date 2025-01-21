// import CalendarDropdown from "./Calenderdropdown";
// import Button from "../common/Button";
import PriceDropdown from './Pricedropdown';
import filterIcon from '../Components/images/filterIcon.svg';
import StateDropdown from './StateDropdown';
import Location from './images/location.svg';

import CalendarDropdown from '@/components/CalenderDropdown';
import Button from '@/components/ui/Button';

function Filter() {
  return (
    <div className="px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start -z-50">
      <div className="flex flex-col md:flex-row justify-between py-4 w-full gap-4">
        {/* Dropdown Section */}
        <div className="flex flex-col md:flex-row z-40 items-center gap-4">
          <StateDropdown />
          <CalendarDropdown />
          <PriceDropdown />
        </div>

        {/* Mobile View Buttons */}
        <div className="block md:hidden w-full flex flex-col items-center gap-4">
          <Button className="w-full max-w-xs py-2 border border-gray-300 rounded-md">
            <span className="flex gap-2 items-center justify-center">
              <img src={Location} alt="Location Icon" className="w-4 h-4" />
              Map View
            </span>
          </Button>
          <Button
            className="w-full max-w-xs py-2 border border-gray-300 rounded-md"
            rounded="rounded-md"
          >
            <span className="flex gap-2 items-center justify-center">
              <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
              More Filters
            </span>
          </Button>
        </div>

        {/* Desktop View Buttons */}
        <div className="hidden md:flex ml-auto gap-4">
          <Button
            rounded="rounded-md"
            py="py-2"
            px="px-4"
            border="border border-gray-300"
          >
            <span className="flex gap-2 items-center">
              <img src={Location} alt="Location Icon" className="w-4 h-4" />
              Map View
            </span>
          </Button>
          <Button
            py="py-2"
            px="px-4"
            rounded="rouned-md"
            border="border border-gray-300"
          >
            <span className="flex gap-2 items-center">
              <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
              More Filters
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
