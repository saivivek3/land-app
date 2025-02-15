import Agents from './Agents';
import Filter from './Filter';
import LandDetails from './LandDetails';
import PathInfo from './PathInfo';
import SearchBar from './SearchBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import { useLands } from '../api';
import { useGet } from '@/apis';
import SkeletonCard from '@/components/SkeletonCard';
import { useQueryClient } from '@tanstack/react-query';

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

  // const queryClient = useQueryClient();
  // const allStates = queryClient.getQueryData(['allStates']);

  return (
    <div>
      <Navbar />
      <PathInfo />
      <Filter />
      <SearchBar />
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
          title={`${allLandProperties?.data?.length || 0} Lands - Shamshabad Region`}
          landsData={allLandProperties?.data || []}
          link="/property-description"
        />
      )}

      <Footer />
    </div>
  );
}

export default PropertyListing;
