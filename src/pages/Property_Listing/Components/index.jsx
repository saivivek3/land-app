import { ImSpinner8 } from 'react-icons/im';
import Agents from './Agents';
import Filter from './Filter';
import LandDetails from './LandDetails';
import PathInfo from './PathInfo';
import SearchBar from './SearchBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLands } from '../api';

function PropertyListing() {
  const { data, isLoading, isError } = useLands(); // React Query for fetching lands

  return (
    <div>
      <Navbar />
      <PathInfo />
      <Filter />
      <SearchBar />
      <Agents />

      {isLoading ? (
        <div className="flex justify-center items-center">
          <ImSpinner8 className="animate-spin text-4xl text-blue-500 " />
        </div>
      ) : isError ? (
        <p className="text-center text-red-500">Error fetching data</p>
      ) : (
        <LandDetails
          title={`${data?.data?.length || 0} Lands - Shamshabad Region`}
          landsData={data?.data || []}
          link="/property-description"
        />
      )}

      <Footer />
    </div>
  );
}

export default PropertyListing;
