// import { GoogleMap, MarkerF } from '@react-google-maps/api';
// import GmapMarker from '@/assets/googlemarker.png';
// import { useMemo } from 'react';

// const GoogleMapComponent = ({
//   oneMarker,
//   mapHeight,
//   mapWidth = '100%',
//   className = '',
//   stateAllLandProperties,
// }) => {
//   const mapContainerStyle = {
//     width: mapWidth,
//     height: mapHeight || '400px', // Set default height
//   };

//   const center = {
//     lat: 17.2403,
//     lng: 78.4294,
//   };

//   const markers = useMemo(
//     () => stateAllLandProperties,
//     [stateAllLandProperties],
//   );
//   console.log(markers, 'markers');

//   const mapOptions = {
//     disableDefaultUI: false,
//     zoomControl: true,
//   };

//   const createCustomMarkerSVG = price => `
//     <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 120 50">
//       <defs>
//         <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="rgba(0, 0, 0, 0.3)" />
//         </filter>
//       </defs>
//       <rect x="0" y="0" width="120" height="40" rx="8" ry="8" fill="white" filter="url(#shadow)" />
//       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">
//         ${price}
//       </text>
//     </svg>
//   `;

//   return (
//     <div className={` ${className}`}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={14}
//         options={mapOptions}
//       >
//         {oneMarker ? (
//           <MarkerF
//             position={center}
//             icon={{
//               url: GmapMarker,
//             }}
//           />
//         ) : (
//           markers.map(marker => (
//             <MarkerF
//               key={marker.id}
//               position={{ lat: marker.lat, lng: marker.lng }}
//               icon={{
//                 url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(createCustomMarkerSVG(marker.price))}`,
//               }}
//             />
//           ))
//         )}
//       </GoogleMap>
//     </div>
//   );
// };

// export default GoogleMapComponent;

import React, { useMemo } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

const GoogleMapComponent = ({
  oneMarker,
  mapHeight = '400px',
  mapWidth = '100%',
  className = '',
  stateAllLandProperties = [],
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28',
  });

  const mapContainerStyle = {
    width: mapWidth,
    height: mapHeight,
  };

  const center = useMemo(
    () => ({
      lat: stateAllLandProperties[0]?.lat || 17.2403,
      lng: stateAllLandProperties[0]?.lng || 78.4294,
    }),
    [stateAllLandProperties],
  );

  const markers = useMemo(
    () => stateAllLandProperties,
    [stateAllLandProperties],
  );

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

  if (loadError) {
    return <div className="text-red-500">Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="text-gray-500">Loading maps...</div>;
  }

  return (
    <div className={className}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={6}
        options={mapOptions}
      >
        {oneMarker ? (
          <MarkerF
            position={center}
            icon={{
              url: '/assets/googlemarker.png',
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ) : (
          markers.map(marker => (
            <MarkerF
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                  createCustomMarkerSVG(marker.price),
                )}`,
              }}
            />
          ))
        )}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
