import { useNavigate } from 'react-router-dom';
import SelectLocation from './SelectLocation';
import SelectState from './SelectState';
import SelectComponent from '@/components/SelectComponent';

function FindYourLand() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 mx-4 sm:mx-10 md:mx-24">
      <div className="border-2 border-gray-300 shadow-xl rounded-lg p-4 w-full max-w-3xl md:max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4">
          {/* <SelectLocation /> */}
          <SelectComponent
            placeholder="Select Location"
            valueClassName="ml-auto"
            options={[
              { id: 1, label: 'Mehdipatnam,', value: 'Hyd' },
              { id: 2, label: 'Tolichowki,', value: 'Hyd' },
              { id: 3, label: 'Hitech City,', value: 'Hyd' },
              { id: 4, label: 'Madhapur,', value: 'Hyd' },
            ]}
          />

          <SelectComponent
            placeholder="Select District"
            options={[
              { id: 1, label: 'Medak,', value: 'Ts' },
              { id: 2, label: 'Warangal,', value: 'Ts' },
              { id: 3, label: 'KarimNagar,', value: 'Ts' },
              { id: 4, label: 'Adilabad,', value: 'Ts' },
            ]}
          />
          <SelectComponent
            placeholder="Select State"
            options={[
              { id: 1, label: 'Telangana,', value: 'India' },
              { id: 2, label: 'Karnataka,', value: 'India' },
              { id: 3, label: 'Maharashtra,', value: 'India' },
              { id: 4, label: 'Delhi,', value: 'India' },
            ]}
          />
          {/* Search Button with consistent padding */}
          <button
            className="w-full md:w-auto border border-gray-300 rounded-md bg-black text-white py-2 px-4"
            onClick={() => navigate('/all-lands')}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindYourLand;
