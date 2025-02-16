// import Button from "../common/Button";
import AgentOne from '@/assets/images/man.png';
import WhatsApp from '@/assets/whatsapp.svg';

import { useGet } from '@/apis';
import { useSelector } from 'react-redux';
// import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

function AgentReusable() {
  const { data: allRegionalPatners } = useGet(
    'allTopRegionalPatners',
    '/Users/GetAllAgents',
    {
      staleTime: 300000, // 5 minutes
    },
  );

  const { data: allDistricts } = useGet(
    'allDistricts',
    '/GeoLocation/GetAllDistricts',
    {
      staleTime: 300000, // 5 minutes
      cacheTime: 600000,
    },
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsDistrictId = searchParams.get('districtId');
  const paramsStateId = searchParams.get('stateId');

  const { data: allStates } = useGet('allStates', '/GeoLocation/GetAllStates', {
    staleTime: 300000, // 5 minutes
  });
  const { districtId, stateId } = useSelector(state => state.location);

  const districtName = allDistricts?.find(
    district =>
      district.id === (Number(paramsDistrictId) || Number(districtId)),
  )?.name;

  const stateName = allStates?.find(
    state => state.id === stateId || Number(paramsStateId),
  )?.name;

  return (
    <div className="mx-4 md:mx-20">
      <div className="mt-6 text-lg md:text-xl font-semibold text-center md:text-left">
        Top Agents in {districtName}, {stateName}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 border border-gray-300 rounded-md p-4 mt-6">
        {allRegionalPatners?.map((agent, index) => (
          <div
            key={index}
            className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start"
          >
            <div className="flex gap-3 items-center w-full justify-between">
              <div className="flex gap-3 items-center">
                <img
                  src={AgentOne}
                  alt={agent.profileName}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{agent.profileName}</span>
                  <span className="text-sm">{`${allStates?.find(state => state.id === agent.stateId)?.name} ${agent.landsPosted} Listings`}</span>
                </div>
              </div>
              <img
                src={WhatsApp}
                alt="WhatsApp"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
            <div className="mt-4 w-full">
              <button className="w-full rounded-md py-2 text-gray-300 text-sm bg-black">
                Contact Partner
              </button>
            </div>
          </div>
        ))}

        {/* <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentTwo} alt={AgentTwo} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              className="w-full rounded-md py-2"
            >
              Contact Partner
            </Button>
          </div>
        </div>
        <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentThree} alt={AgentThree} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              className="w-full rounded-md py-2"
            >
              Contact Partner
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AgentReusable;
