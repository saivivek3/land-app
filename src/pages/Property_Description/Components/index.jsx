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
import { useParams } from 'react-router-dom';
import { useGet } from '@/apis';

const PropertyDescription = () => {
  const { id: landID } = useParams();
  const { data: propertyDetails, isLoading } = useGet(
    'propertDescription',
    `/Land/GetLandById?id=${landID}`,
    {
      staleTime: 300000, // 5 minutes
      cacheTime: 600000, // 10 minutes - keeps data in cache longer
    },
  );

  console.log({ propertyDetails });

  return (
    <div className="">
      <Navbar />
      <PathInfo />
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <>
          <Lands propertyDetails={propertyDetails} />
          <VentureDetails propertyDetails={propertyDetails} />
          <VentureFacilities />
          <div className="mt-12">
            <GoogleMapComponent
              oneMarker
              mapHeight="500px"
              className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24  border border-gray-400 rounded-md"
              latitude={propertyDetails?.latitude}
              longitude={propertyDetails?.longitude}
            />
          </div>
          <PropertyMoreDetails propertyDetails={propertyDetails} />
          <PremiumProperties title="Related Premium Properties" />
        </>
      )}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default PropertyDescription;
