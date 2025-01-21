import { useState } from "react";
import HeartFill from "../Components/images/HeartFill.svg";
import imgheart from "../Components/images/heart.svg";

function PremiumProperties({ title, properties }) {
  const [like, setLike] = useState(properties.map(() => true));

  function toggleLike(index) {
    setLike((prevlike) =>
      prevlike.map((like, i) => (i === index ? !like : like))
    );
  }
  return (
    <div className="md:px-20 mt-10">
      <h2 className="md:text-xl md:text-start text-center text-[14px] font-bold mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
        {properties && properties.length > 0 ? (
          properties.map((property, index) => (
            <div key={index} title={property.location} className="border-none">
              <div className="relative">
                {/* Property Image */}
                <img
                  src={property.img}
                  alt={property.location}
                  className="w-full h-[200px] object-cover rounded-lg"
                />

                {/* Heart and Share Icons */}
                <div className="absolute top-2 right-2 flex gap-2" key={index}>
                  {like[index] ? (
                    <img
                      src={property.heartempty}
                      onClick={() => toggleLike(index)}
                      alt="Heart Icon"
                      className={`cursor-pointer w-8 h-8 bg-white rounded-full p-1 shadow-md`}
                    />
                  ) : (
                    <img
                      src={HeartFill}
                      onClick={() => toggleLike(index)}
                      alt="Filled Heart Icon" // Corrected alt attribute for filled heart
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
                <div className="flex items-center md:justify-start justify-center mt-6 text-sm">
                  <p className="font-semibold text-black">
                    {property.location}
                  </p>
                  <span className="ml-1">.</span>
                  <p className="font-semibold">{property.date}</p>
                </div>
                <div className="flex flex-col md:text-start text-center sm:flex-row sm:items-center gap-1 text-sm sm:text-lg font-bold">
                  <p>{property.price}</p>
                  <span className="hidden sm:inline">-</span>{" "}
                  {/* Show only on medium screens or larger */}
                  <p>{property.size}</p>
                </div>

                <p className="text-sm md:text-start text-center font-medium text-gray-600">
                  {property.area}
                </p>
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
