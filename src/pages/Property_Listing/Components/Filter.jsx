import filterIcon from '../Components/images/filterIcon.svg';
import Location from './images/location.svg';
import { useNavigate } from 'react-router-dom';
import { DatePickerWithRange } from '@/components/DateRangePicker';
import SelectComponent from '@/components/SelectComponent';

function Filter() {
  const navigate = useNavigate();
  return (
    <div className="px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start -z-50">
      <div className="flex flex-col md:flex-row justify-between py-4 w-full gap-4">
        {/* Dropdown Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:w-1/2">
          <SelectComponent
            placeholder="Select District"
            options={[
              { id: 1, label: 'Medak', value: 'Ts' },
              { id: 2, label: 'Warangal', value: 'Ts' },
              { id: 3, label: 'KarimNagar', value: 'Ts' },
              { id: 4, label: 'Adilabad', value: 'Ts' },
            ]}
          />
          <DatePickerWithRange />
          <SelectComponent
            placeholder="Select Price"
            options={[
              { id: 1, label: '$50' },
              { id: 2, label: '$100' },
              { id: 3, label: '$150' },
              { id: 4, label: '$200' },
            ]}
          />
        </div>

        {/* Mobile View Buttons */}
        <div className="block md:hidden w-full flex flex-col items-center gap-4">
          <button className="w-full max-w-xs py-2 border border-gray-300 rounded-md flex gap-2 items-center justify-center">
            <img src={Location} alt="Location Icon" className="w-4 h-4" />
            <span>Map View</span>
          </button>
          <button className="w-full max-w-xs py-2 border border-gray-300 rounded-md flex gap-2 items-center justify-center">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Desktop View Buttons */}
        <div className="hidden md:flex md:w-2/1 ml-auto gap-4">
          <button
            className="py-2 px-4 border border-gray-300 rounded-md flex gap-2 items-center"
            onClick={() => navigate('/premium-property/property-map-view')}
          >
            <img src={Location} alt="Location Icon" className="w-4 h-4" />
            <span>Map View</span>
          </button>
          <button className="py-2 px-4 border border-gray-300 rounded-md flex gap-2 items-center">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
