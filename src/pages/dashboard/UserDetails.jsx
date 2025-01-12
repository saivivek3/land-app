import Button from '@/components/ui/Button';
import { Cloud } from 'lucide-react';
import React from 'react';

function UserDetails() {
  const recommendations = [
    {
      image:
        'https://images.unsplash.com/photo-1698296193806-df2054b6c9b3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Land Kalpataru Avante',
      location: 'Shamshabad, Rangareddy Dist',
      price: '1.2',
      area: '2546',
    },
    {
      image:
        'https://images.unsplash.com/photo-1698296193806-df2054b6c9b3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Land Kalpataru Avante',
      location: 'Shamshabad, Rangareddy Dist',
      price: '1.2',
      area: '2546',
    },
  ];

  const PropertyCard = ({ image, title, location, price, area }) => (
    <div className="shadow-sm border border-bSecondary rounded-xl flex gap-2">
      <img
        src="https://images.unsplash.com/photo-1698296193806-df2054b6c9b3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
        alt={title}
        className="w-32 rounded-lg h-32 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-base text-tertiary">{title}</h3>
        <p className=" text-tertiary text-xs">{location}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold  text-primary text-base ">
            Rs {price}Cr
          </span>
          <span className="text-primary text-base font-bold">|</span>
          <span className=" text-primary text-base font-bold">{area} sqft</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="shadow-sm border border-bSecondary rounded-xl b-white p-4 mb-4">
      <h2 className="text-primary text-sm font-semibold mb-4">
        Personalized Recommendations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {recommendations.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </section>
  );
}

export default UserDetails;
