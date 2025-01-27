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
      {PendingApproveAllProperties.map(property => (
        <div className="flex" key={property.id}>
          <img
            src={property.image}
            alt="Property Img"
            className=" rounded-l-md"
          />
          <div className="">
            <div>{property.discription}</div>
            <div>{property.landType}</div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default PendingApproveProperties;
