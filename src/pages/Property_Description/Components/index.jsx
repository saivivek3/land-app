import Lands from './lands';
import { ImSpinner8 } from 'react-icons/im';

import PathInfo from './PathInfo';
import VentureDetails from './ventureDetails';
import VentureFacilities from './VentureFacilities';
import Testimonial from './Testimonial';
import PropertyMoreDetails from './PropertyMoreDetails';
import PremiumProperties from './PremiumProperties';
// import { properties } from '@/data/data';
import Navbar from '@/components/Navbar';
import GoogleMapComponent from '@/components/GoogleMap';
import Footer from './Footer';
import { useGet } from '@/apis';

const PropertyDescription = () => {
  const propertyId = 6; // Set a fixed or dynamic property ID

  const {
    data: PropertyDetails,
    isLoading,
    isError,
  } = useGet('PropertyDetails', `/GetLandById?id=${propertyId}`, {
    staleTime: 300000, // 5 minutes
  });
  console.log('Fetched Properties:', PropertyDetails);
  return (
    <div className="">
      <Navbar />
      <PathInfo />
      <Lands />
      <VentureDetails />
      <VentureFacilities />
      <div className="mt-12">
        <GoogleMapComponent
          oneMarker
          mapHeight="500px"
          className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24  border border-gray-400 rounded-md"
        />
      </div>
      <PropertyMoreDetails />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <ImSpinner8 className="animate-spin text-4xl text-blue-500" />
        </div>
      ) : isError ? (
        <p className=" text-center text-red-500">Error fetching data</p>
      ) : (
        <PremiumProperties
          title="Related Premium Properties"
          properties={PropertyDetails?.data || []}
        />
      )}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default PropertyDescription;
