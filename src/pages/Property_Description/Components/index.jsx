import Lands from './lands';
import PathInfo from './PathInfo';
import VentureDetails from './ventureDetails';
import VentureFacilities from './VentureFacilities';
// import Map from './Map';
import Testimonial from './Testimonial';

import PropertyMoreDetails from './PropertyMoreDetails';
import PremiumProperties from './PremiumProperties';
import { properties } from '@/data/data';
import Navbar from '@/components/Navbar';
import GoogleMapComponent from '@/components/GoogleMap';
import Footer from './Footer';

const PropertyDescription = () => {
  return (
    <div className="">
      <Navbar />
      <PathInfo />
      <Lands />
      <VentureDetails />
      <VentureFacilities />
      <div className="mt-12 md:mx-20 border border-gray-400 rounded-md">
        <GoogleMapComponent oneMarker mapHeight="500px" />
      </div>
      <PropertyMoreDetails />
      <PremiumProperties
        title="Related Premium Properties"
        properties={properties}
      />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default PropertyDescription;
