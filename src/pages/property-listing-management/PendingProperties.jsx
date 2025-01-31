import { PendingApproveAllProperties } from '@/data/data';
const PendingProperties = ({ currentPage }) => {
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginateData = PendingApproveAllProperties.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  return (
    <div>
      <div className="space-y-4 mt-2">
        {paginateData.map(property => (
          <div
            className="flex md:flex-row flex-col border border-gray-300 rounded-md p-2 w-full md:gap-6 2xl:gap-28 xl:gap-12 lg:gap-6 gap-4"
            key={property.id}
          >
            <img
              src={property.image}
              alt="Property Img"
              className="rounded-l-md w-62 h-28 object-cover"
            />
            <div className="space-y-2">
              <div className="max-w-56 font-semibold">
                {property.discription}
              </div>
              <div className="w-full border border-gray-250"></div>
              <div>
                Land Type :
                <span className="text-gray-700 text-sm font-medium">
                  {property.landType}
                </span>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <div className="">
                Price: <span>{property.price}</span>
              </div>
              <div className="w-full border border-gray-250"></div>
              <div className="-pt-2">
                Area: <span>{property.area}</span>
              </div>
            </div>

            <div className="space-y-2 mt-6 gap-4">
              <div className="">
                Date Listed: <span>{property.dateListed}</span>
              </div>
              <div className="w-full border border-gray-250"></div>
              <div className="">
                Status:{' '}
                <span className="text-customBlue font-semibold">
                  {property.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingProperties;
