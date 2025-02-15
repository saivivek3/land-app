import { useNavigate } from 'react-router-dom';
import SelectComponent from '@/components/SelectComponent';
import { useGet } from '@/apis';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '@/features/property/propertySlice';

function FindYourLand() {
  const [inputvalue, setValue] = useState({
    state: { stateID: '', label: '', value: '' },
    district: { districtID: '', label: '', value: '', stateID: '' },
    mandal: { mandalID: '', label: '', value: '', districtID: '' },
  });

  const dispatch = useDispatch();
  const { data: allStates } = useGet('allStates', '/GeoLocation/GetAllStates', {
    staleTime: 300000, // 5 minutes
    cacheTime: 600000, // 10 minutes - keeps data in cache longer
  });

  const { data: allDistricts } = useGet(
    'allDistricts',
    '/GeoLocation/GetAllDistricts',
    {
      staleTime: 300000, // 5 minutes
      cacheTime: 600000,
    },
  );
  const { data: allMandals } = useGet(
    'allMandals',
    '/GeoLocation/GetAllMandals',
    {
      staleTime: 300000, // 5 minutes
      cacheTime: 600000,
    },
  );

  useEffect(() => {
    dispatch(
      setLocation({
        stateID: inputvalue?.state?.stateID,
        districtID: inputvalue.district?.districtID,
      }),
    );
  }, [inputvalue.state.stateID, inputvalue.district.districtID, dispatch]);

  const formatAllStates = allStates?.map(state => ({
    id: state.id,
    label: state.name,
    value: state.name,
    name: 'state',
  }));

  const formatAllDistricts = allDistricts?.map(district => ({
    id: district.id,
    label: district.name,
    value: district.name,
    stateID: district.stateId,
    name: 'district',
  }));
  const filterDistrictByStateID = () => {
    console.log(inputvalue.state.stateID, 'inputvalue.state.stateID');
    if (inputvalue.state.stateID) {
      const filteredDistricts = formatAllDistricts
        .filter(district => district.stateID === inputvalue.state.stateID)
        .map(district => ({
          id: district.id,
          label: district.label,
          value: district.label,
          stateID: district.stateID,
          name: 'district',
        }));
      return filteredDistricts;
    }
    return formatAllDistricts;
  };

  const formatAllMandals = allMandals?.map(mandal => ({
    id: mandal.id,
    label: mandal.name,
    value: mandal.name,
    districtID: mandal.districtId,
    name: 'mandal',
  }));

  const filterMandalByDistrictID = () => {
    if (inputvalue.district.districtID) {
      const filteredMandals = formatAllMandals
        .filter(mandal => mandal.districtID === inputvalue.district.districtID)
        .map(mandal => ({
          id: mandal.id,
          label: mandal.label,
          value: mandal.label,
          districtID: mandal.districtID,
          name: 'mandal',
        }));
      return filteredMandals;
    }
    return formatAllMandals;
  };
  console.log(formatAllMandals, 'formatAllMandals');

  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-24">
      <div className="border-2 border-gray-300 shadow-xl rounded-lg p-4 w-full max-w-3xl md:max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4">
          <SelectComponent
            placeholder="Select State"
            options={Array.isArray(formatAllStates) ? formatAllStates : []}
            inputvalue={inputvalue}
            setValue={setValue}
            name="state"
          />

          <SelectComponent
            placeholder="Select District"
            options={
              Array.isArray(filterDistrictByStateID())
                ? filterDistrictByStateID()
                : []
            }
            inputvalue={inputvalue}
            setValue={setValue}
            name="district"
          />
          <SelectComponent
            placeholder="Select Mandal"
            options={
              Array.isArray(filterMandalByDistrictID())
                ? filterMandalByDistrictID()
                : []
            }
            inputvalue={inputvalue}
            setValue={setValue}
            name="mandal"
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
