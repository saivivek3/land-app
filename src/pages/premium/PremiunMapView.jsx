import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';
import CircleYellowIcon from '@/assets/circle-yellow.png';
import CircleRedIcon from '@/assets/circle-red.png';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@/assets/search.svg';
import FilterIcon from '@/assets/filter-icon.svg';
import ArrowLeftIcon from '@/assets/arrow-left.svg';

const MapMarker = ({ property, onClick }) => {
  return (
    <MarkerF
      position={property.position}
      onClick={() => onClick(property)}
      icon={{
        url: property.type === 'regular' ? CircleYellowIcon : CircleRedIcon,
        anchor: new google.maps.Point(10, 20),
        scaledSize: new google.maps.Size(20, 20),
      }}
    />
  );
};

const PropertyMap = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28',
  // });

  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: 17.385044,
    lng: 78.486671,
  };

  const properties = [
    {
      id: 1,
      position: { lat: 17.385044, lng: 78.386671 },
      price: 'Rs.1.2CR',
      area: '2536 sqft',
      description: '2-Acre Land Near Shamshabad Airport',
      type: 'regular',
    },
    {
      id: 2,
      position: { lat: 17.395044, lng: 78.496671 },
      price: 'Rs.1.5CR',
      area: '3000 sqft',
      description: 'Premium Plot',
      type: 'premium',
    },

    {
      id: 3,
      position: { lat: 17.405044, lng: 78.406671 },
      price: 'Rs.1.2CR',
      area: '2536 sqft',
      description: '2-Acre Land Near Shamshabad Airport',
      type: 'regular',
    },
    {
      id: 4,
      position: { lat: 17.395044, lng: 78.496671 },
      price: 'Rs.1.5CR',
      area: '3000 sqft',
      description: 'Premium Plot',
      type: 'premium',
    },
    {
      id: 5,
      position: { lat: 17.385044, lng: 78.386671 },
      price: 'Rs.1.2CR',
      area: '2536 sqft',
      description: '2-Acre Land Near Shamshabad Airport',
      type: 'regular',
    },
    {
      id: 6,
      position: { lat: 17.395044, lng: 78.496671 },
      price: 'Rs.1.5CR',
      area: '3000 sqft',
      description: 'Premium Plot',
      type: 'premium',
    },
    {
      id: 7,
      position: { lat: 18.385044, lng: 78.386671 },
      price: 'Rs.1.2CR',
      area: '2536 sqft',
      description: '2-Acre Land Near Shamshabad Airport',
      type: 'regular',
    },
    {
      id: 8,
      position: { lat: 19.395044, lng: 78.496671 },
      price: 'Rs.1.5CR',
      area: '3000 sqft',
      description: 'Premium Plot',
      type: 'premium',
    },
    {
      id: 9,
      position: { lat: 20.385044, lng: 78.386671 },
      price: 'Rs.1.2CR',
      area: '2536 sqft',
      description: '2-Acre Land Near Shamshabad Airport',
      type: 'regular',
    },
    {
      id: 10,
      position: { lat: 17.395044, lng: 78.496671 },
      price: 'Rs.1.5CR',
      area: '3000 sqft',
      description: 'Premium Plot',
      type: 'premium',
    },
  ];

  const handleMarkerClick = property => {
    setSelectedProperty(property);
  };

  const mapOptions = {
    mapTypeId: 'hybrid', // Set default to satellite view
    mapTypeControl: true, // Show the map type control

    disableDefaultUI: false,
    zoomControl: true,
  };

  return (
    <div className="relative ">
      {/* search */}
      <div className="absolute z-10 left-[28%] top-2 w-1/2 flex  gap-1 items-center">
        <div className=" w-full flex-1  flex items-center  ">
          <input
            type="search"
            placeholder="Search"
            className=" w-full border rounded-lg px-4 text-xs py-3 pl-10 shadow-xs border-bPrimary placeholder:[ #717680]"
          />
          <img
            src={SearchIcon}
            alt="search-Icon"
            className="absolute top-[30%] left-5 h-4 w-4"
          />

          <div className="absolute top-[25%] right-28 text-[10px] border border-bPrimary shadow-customBoxShadow bg-white text-primary p-[2px] rounded-lg shasow-sm ">
            ⌘K
          </div>
        </div>

        <Button className="border rounded-lg  bg-white text-primary border-bPrimary hover:bg-white/50 mt-0 max-w-fit  px-5 py-3  ">
          <div className="flex gap-2 items-center ">
            <img src={FilterIcon} alt="filter-icon" className="h-3 w-3" />
            <span className="text-xs"> filters</span>
          </div>
        </Button>
      </div>

      {/* arrowleft */}

      <div
        onClick={() => navigate(-1)}
        className="absolute top-16 left-4  z-10 text-[10px] border border-bPrimary shadow-customBoxShadow bg-white text-primary p-[5px] rounded-lg shadow-sm "
      >
        <img
          src={ArrowLeftIcon}
          alt="arrow-left-icon"
          className="h-4 w-4  cursor-pointer"
        />
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={mapOptions}
      >
        {properties.map(property => (
          <MapMarker
            key={property.id}
            property={property}
            onClick={handleMarkerClick}
          />
        ))}

        {selectedProperty && (
          <InfoWindowF
            position={selectedProperty.position}
            onCloseClick={() => setSelectedProperty(null)}
          >
            <div className="bg-white py-2 px-4  rounded-lg shadow-md min-w-36">
              <div className="flex gap-2 items-center ">
                <div className="text-sm font-bold">
                  {selectedProperty.price}
                </div>
                <div className="divide-y-2 divide-primary"></div>
                <div className="text-sm text-primary font-bold">
                  {selectedProperty.area}
                </div>
              </div>
              <div className="text-[10px] mt-2 text-primary font-medium">
                {selectedProperty.description}
              </div>
              <Button
                className="bg-primary text-white text-center text-xs hover:bg-primary/50"
                onClick={() =>
                  navigate('/premium-property/single-property-view/1')
                }
              >
                View Details
              </Button>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
};

export default PropertyMap;
