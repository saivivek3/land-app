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
import { Footer } from 'react-day-picker';

const PropertyDescription = () => {
  return (
    <div className="">
      <Navbar />
      <PathInfo />
      <Lands />
      <VentureDetails />
      <VentureFacilities />
      {/* <Map /> */}
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
