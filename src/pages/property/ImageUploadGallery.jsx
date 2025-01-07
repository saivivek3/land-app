import React, { useState } from 'react';
import TrachIcon from '@/assets/trash.svg';
import ZoomIn from '@/assets/zoom-in.svg';

const ImageUploadGallery = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative border border-bPrimary rounded-[4px] overflow-hidden"
          >
            <img
              src={image}
              alt={`Upload ${index + 1}`}
              className="w-full h-36 object-cover rounded-[4px]"
            />
            <button className="p-2  rounded-full shadow bg-tertiary absolute   top-2 right-2 ">
              <img src={TrachIcon} alt="Trash" />
            </button>
            <button className="p-2  rounded-full shadow bg-tertiary absolute bottom-2 right-2">
              <img src={ZoomIn} alt="zoom-in" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadGallery;
