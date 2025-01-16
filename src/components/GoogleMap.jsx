// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import React, { useCallback, useState } from 'react';

// function GoogleMapComponent({ children }) {
//   const center = {
//     lat: 17.375278,
//     lng: 78.432818,
//   };

//   const [map, setMap] = useState(null);
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28',
//   });
//   const onMapLoad = useCallback(map => {
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return (
//     <div className="min-h-[400px] w-full rounded-lg overflow-hidden">
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={{ maxWidth: '100%', height: '100%' }}
//           center={center}
//           zoom={12}
//           onLoad={onMapLoad}
//           onUnmount={onUnmount}
//         >
//           {children}
//         </GoogleMap>
//       )}
//     </div>
//   );
// }

// export default GoogleMapComponent;

import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import GmapMarker from '@/assets/googlemarker.png';

const GoogleMapComponent = ({ oneMarker, mapWidth }) => {
  const mapContainerStyle = {
    width: '100%',
    height: 'auto',
  };

  const center = {
    lat: 17.2403,
    lng: 78.4294,
  };

  // Marker data (coordinates and price text)
  const markers = [
    { id: 1, lat: 17.2453, lng: 78.4291, price: 'Rs 2Cr' },
    { id: 2, lat: 17.2409, lng: 78.431, price: 'Rs 1.2Cr' },
    { id: 3, lat: 17.2375, lng: 78.425, price: 'Rs 80 Lakhs' },
    // Add more markers as needed
  ];

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
  };

  const createCustomMarkerSVG = price => `
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 120 50">
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="rgba(0, 0, 0, 0.3)" />
      </filter>
    </defs>
    <rect x="0" y="0" width="120" height="40" rx="8" ry="8" fill="white" filter="url(#shadow)" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">
      ${price}
    </text>
  </svg>
`;

  return (
    <LoadScript googleMapsApiKey="AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        options={mapOptions}
      >
        {oneMarker ? (
          <MarkerF
            position={center}
            icon={{
              url: GmapMarker,
            }}
          />
        ) : (
          markers.map(marker => (
            <MarkerF
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(createCustomMarkerSVG(marker.price))}`,
              }}
            />
          ))
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
