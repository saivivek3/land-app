// import LandLeft from '../Components/images/landLeft.svg';
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
    prevArrow: (
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 ml-3 p-1 rounded-full shadow-lg border border-gray-300 transition-all duration-300 hover:scale-110">
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-1 mr-3 rounded-full shadow-lg border border-gray-300 transition-all duration-300 hover:scale-110">
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
  };

  return (
    <div className="flex flex-col w-full px-6 md:px-8 md:flex-row lg:px-12 xl:px-16 2xl:px-20 gap-6">
      <div className="md:w-[400px] lg:w-2/3 relative rounded-lg">
        {propertyDetails?.images?.length > 0 && (
          <Slide {...slideProperties}>
            {propertyDetails.images.map((image, index) => (
              <div
                key={index}
                className="each-slide-effect rounded-lg overflow-hidden"
              >
                <div
                  className="w-full bg-cover bg-center sm:h-[200px] h-[160px] md:h-[250px] lg:h-[304px]object-cover rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        )}
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col gap-4">
        <LandCard
          imageUrl={secondLand}
          altText="Big Land Image 2"
          className="w-full"
        />
        <LandCard
          imageUrl={thirdLand}
          altText="Big Land Image 3"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Lands;
