import { AllLandsDetails } from '@/data/data.js';
import Agents from './Agents';
import Filter from './Filter';
import LandDetails from './LandDetails';
import PathInfo from './PathInfo';
import SearchBar from './SearchBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function PropertyListing() {
  return (
    <div>
      <Navbar />
      <PathInfo />
      <Filter />
      <SearchBar />
      <Agents />
      <LandDetails
        title="3895 Lands - Shamshabad Region"
        landsData={AllLandsDetails}
        link="/property-description"
      />
      <Footer />
    </div>
  );
}

export default PropertyListing;
