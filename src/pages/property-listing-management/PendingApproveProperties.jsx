import { PendingApproveAllProperties } from '@/data/data';
import { useState } from 'react';

function PendingApproveProperties() {
  const [active, setActive] = useState('posted');
  const handleClick = tab => {
    setActive(tab);
  };

  return (
    <div>
      <div className="border border-gray-200 rounded-md cursor-pointer p-2 flex gap-3 mt-6 font-extralight">
        <div
          className={active === 'posted' ? 'font-semibold' : 'font-light'}
          onClick={() => handleClick('posted')}
        >
          Posted Property
        </div>
        <div
          className={active === 'approved' ? 'font-semibold' : 'font-light'}
          onClick={() => handleClick('approved')}
        >
          Approved Property
        </div>
      </div>
      <div className="space-y-4 mt-4">
        {PendingApproveAllProperties.map(property => (
          <div
            className="flex gap-4 border border-gray-300 rounded-md p-4"
            key={property.id}
          >
            <img
              src={property.image}
              alt="Property Img"
              className="rounded-l-md py-2 w-62 h-28 object-cover"
            />
            <div className="py-4 space-y-2">
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

            <div className="py-4 space-y-4">
              <div className="p-2">
                Price: <span>{property.price}</span>
              </div>
              <div className="w-full border border-gray-250"></div>
              <div className="-pt-2">
                Area: <span>{property.area}</span>
              </div>
            </div>

            <div className="py-4 space-y-4">
              <div className="p-2">
                Date Listed: <span>{property.dateListed}</span>
              </div>
              <div className="w-full border border-gray-250"></div>
              <div className="-pt-3">
                Status: <span>{property.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingApproveProperties;
