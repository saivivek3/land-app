import LandLeft from '../Components/images/landLeft.svg';
import secondLand from '../Components/images/secondLand.svg';
import thirdLand from '../Components/images/thirdland.svg';
import LandCard from '@/components/LandCard';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Lands = ({ propertyDetails }) => {
  console.log({ propertyDetails });
  const slideProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
  };

  return (
    <div className="flex flex-col sm:flex-row w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 gap-6 sm:gap-8">
      <div className="w-full sm:w-2/3 mb-6 sm:mb-0">
        {propertyDetails?.images?.length > 0 && (
          <Slide {...slideProperties}>
            {propertyDetails.images.map((image, index) => (
              <div key={index} className="each-slide-effect">
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        )}
      </div>

      <div className="flex flex-col w-full sm:w-1/3 gap-4">
        <LandCard
          imageUrl={secondLand}
          altText="Big Land Image 2"
          className="w-full"
        />
        <LandCard
          imageUrl={thirdLand}
          altText="Big Land Image 3"
          className="w-full mt-auto"
        />
      </div>
    </div>
  );
};

export default Lands;
