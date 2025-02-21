import Agents from './Agents';
import Filter from './Filter';
import LandDetails from './LandDetails';
import PathInfo from './PathInfo';
import SearchBar from './SearchBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useGet, usePost } from '@/apis';
import SkeletonCard from '@/components/SkeletonCard';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setAllLandProperties } from '@/features/property/propertySlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function PropertyListing() {
  // React Query for fetching lands
  const {
    data: allLandProperties,
    isLoading,
    isError,
  } = useGet('allLands', '/Land/GetAllLands', {
    staleTime: 300000, // 5 minutes
    cacheTime: 600000, // 10 minutes - keeps data in cache longer
  });
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsStateId = searchParams.get('stateId');
  const paramsDistrictId = searchParams.get('districtId');
  const paramsMandalId = searchParams.get('mandalId');

  const { districtId, landPropertiesState, stateId, mandalId } = useSelector(
    state => state.location,
  );

  const { data: allDistricts } = useGet(
    'allDistricts',
    '/GeoLocation/GetAllDistricts',
    {
      staleTime: 300000, // 5 minutes
      cacheTime: 600000,
    },
  );

  const districtName = allDistricts?.find(
    district => district.id === (districtId || Number(paramsDistrictId)),
  )?.name;

  const dispatch = useDispatch();
  const createSearchData = usePost('allSearch', '/Search/search', {
    // Add onSuccess handler
    onSuccess: data => {
      dispatch(setAllLandProperties(data.data));
    },
  });

  useEffect(() => {
    if (paramsStateId || paramsDistrictId || paramsMandalId) {
      dispatch(
        setAllLandProperties(
          allLandProperties?.data?.filter(
            land =>
              land.districtId === (districtId || Number(paramsDistrictId)),
          ),
        ),
      );
    } else {
      dispatch(setAllLandProperties(allLandProperties?.data));
    }
  }, [allLandProperties, location]);

  async function handleSubmit(data) {
    try {
      await createSearchData.mutateAsync(data);
    } catch (error) {
      // Error handling
    }
  }

  return (
    <div>
      <Navbar />
      <PathInfo />
      <Filter />
      <SearchBar onHandleSubmit={handleSubmit} />
      <Agents />

      {isLoading ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 container mx-auto mt-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="">
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">Error fetching data</p>
      ) : (
        <LandDetails
          title={
            <p>
              {paramsMandalId || paramsStateId || paramsDistrictId
                ? landPropertiesState?.length +
                  ' Lands -' +
                  districtName +
                  '  Region'
                : 'All Lands'}
            </p>
          }
          landsData={landPropertiesState || []}
          link="/property-description"
        />
      )}

      <Footer />
    </div>
  );
}

export default PropertyListing;
