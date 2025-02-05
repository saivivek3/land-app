import LandLeft from '../Components/images/landLeft.svg';
import secondLand from '../Components/images/secondLand.svg';
import thirdLand from '../Components/images/thirdland.svg';
import LandCard from '@/components/LandCard';

const Lands = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 gap-6 sm:gap-8">
      {/* First Image */}
      <div className="w-full sm:w-3/4 mb-6 sm:mb-0">
        <LandCard imageUrl={LandLeft} altText="Big Land Image 1" />
      </div>

      {/* Second Column with Smaller Images */}
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
