import { useNavigate } from 'react-router-dom';
import SelectDistrict from './SelectDistrict';
import SelectLocation from './SelectLocation';
import SelectState from './SelectState';

function FindYourLand() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 mx-4 sm:mx-10 md:mx-24">
      <div className="border-2 border-gray-300 shadow-xl rounded-lg p-4 w-full max-w-3xl md:max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4">
          <SelectLocation />
          <SelectDistrict />
          <SelectState />

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
