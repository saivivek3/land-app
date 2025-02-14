import { useEffect, useState } from 'react';
import HeartFill from '../Components/images/HeartFill.svg';

function PremiumProperties({ title, properties = [] }) {
  const [like, setLike] = useState([]);

  useEffect(() => {
    setLike(properties.map(() => false)); // Initialize likes state
  }, [properties]);

  function toggleLike(index) {
    setLike(prevlike =>
      prevlike.map((liked, i) => (i === index ? !liked : liked)),
    );
  }

  return (
    <div className="mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
      <h2 className="md:text-xl md:text-center xl:text-start text-center text-[14px] font-bold mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-6">
        {properties && properties.length > 0 ? (
          properties.map((property, index) => (
            <div
              key={index}
              title={property.address}
              className="border-none mt-4"
            >
              <div className="relative">
                {/* Property Image */}
                <img
                  src={property.images[0]} // Displaying the first image
                  alt={property.address}
                  className="w-full h-[200px] object-cover rounded-lg"
                />

                {/* Heart and Share Icons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  {like[index] ? (
                    <img
                      src={property.heartempty}
                      onClick={() => toggleLike(index)}
                      alt="Heart Icon"
                      className="cursor-pointer w-8 h-8 bg-white rounded-full p-1 shadow-md"
                    />
                  ) : (
                    <img
                      src={HeartFill}
                      onClick={() => toggleLike(index)}
                      alt="Filled Heart Icon"
                      className="absolute bg-white rounded-full p-1 shadow-md top-0 right-10 cursor-pointer"
                    />
                  )}

                  <img
                    src={property.imgshare}
                    alt="Share Icon"
                    className="cursor-pointer w-8 h-8 bg-white rounded-full p-1 shadow-md"
                  />
                </div>

                {/* Property Details */}
                <div className="p-1">
                  <div className="flex items-center md:justify-start justify-center mt-6 text-sm">
                    <p className="font-semibold text-black">
                      {property.address}
                    </p>
                    <span className="ml-1">.</span>
                    <p className="font-semibold">
                      {property.postedOn || 'Recently Posted'}
                    </p>
                  </div>
                  <div className="flex flex-col md:text-center text-center sm:flex-row sm:items-center md:justify-start justify-center gap-1 text-sm sm:text-lg font-bold">
                    <p>₹{property.pricePerAcre} / acre</p>
                    <span className="hidden sm:inline">-</span>
                    <p>{property.sizeInAcres}</p>
                  </div>

                  <p className="text-sm md:text-left text-center font-medium text-gray-600">
                    {property.soilType
                      ? `Soil: ${property.soilType}`
                      : 'Soil Type: N/A'}{' '}
                    |
                    {property.landCategory === 1
                      ? ' Agricultural Land'
                      : ' Land'}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Properties are available</p>
        )}
      </div>
      <div className="border-b-2 border-gray-100 mt-8"></div>
    </div>
  );
}

export default PremiumProperties;
