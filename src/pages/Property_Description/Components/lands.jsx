import React from 'react';
// import Land from "../Components/images/big-land-land.jpg";
import LandLeft from '../Components/images/landLeft.svg';
// import LandCard from "../Common/landCard";
import secondLand from '../Components/images/secondLand.svg';
import thirdLand from '../Components/images/thirdland.svg';
import LandCard from '@/components/LandCard';

const Lands = () => {
  return (
    <div className="flex px-5 sm:px-20 w-screen gap-8 flex-col sm:flex-row">
      {/* First Image */}
      <div className="w-full sm:w-3/4 mb-8 sm:mb-0">
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
