import filterIcon from '../Components/images/filterIcon.svg';
import Location from './images/location.svg';
import { useNavigate } from 'react-router-dom';
import { DatePickerWithRange } from '@/components/DateRangePicker';
import SelectComponent from '@/components/SelectComponent';
import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

function Filter() {
  const navigate = useNavigate();
  const { stateId } = useSelector(state => state.location);
  const queryClient = useQueryClient();
  const allDistricts = queryClient.getQueryData(['allDistricts']);

  const districts = allDistricts
    ?.filter(district => district.stateId === stateId)
    .map(district => ({
      id: district.id,
      label: district.name,
      value: district.name,
    }));

  return (
    <div className="px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start">
      <div className="flex flex-col md:flex-col xl:flex-row justify-between py-4 w-full gap-4">
        {/* Dropdown Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <SelectComponent
            placeholder="Select District"
            className="py-5 gap-2 flex items-center"
            options={districts}
          />
          <DatePickerWithRange className="w-full" />
          <SelectComponent
            placeholder="Select Price"
            className="py-5 gap-2 flex items-center"
            options={[
              { id: 1, label: '$50' },
              { id: 2, label: '$100' },
              { id: 3, label: '$150' },
              { id: 4, label: '$200' },
            ]}
          />
        </div>

        {/* Desktop View Buttons */}
        <div className="flex gap-4">
          <button
            className="j justify-center items-center w-full py-2 border border-gray-300 rounded-md flex gap-2 text-sm"
            onClick={() => navigate('/premium-property/property-map-view')}
          >
            <img src={Location} alt="Location Icon" className="w-4 h-4" />
            <span>Map View</span>
          </button>
          <button className="px-4 w-full border border-gray-300 rounded-md flex items-center gap-1 text-sm justify-center whitespace-nowrap">
            <img src={filterIcon} alt="Filter Icon" className="w-4 h-4" />
            <span className="">More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
