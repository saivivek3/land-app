import React, { useState, useCallback, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import { Card } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
import Button from '@/components/ui/Button.jsx';
import { ChevronLeft, MapPin, Plus, Minus, Save, History } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Input from '@/components/ui/Input';
import useFormHook from '@/hooks/useFormHook';
import PropertySidebar from '../property/PropertySidebar';
import MarkerPinIcon from '@/assets/marker-pin.svg';

// Map styling
const mapStyles = {
  dark: [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    // ... more styles can be added
  ],
};
const center = {
  lat: 17.375278,
  lng: 78.432818,
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

const LocationMap = () => {
  const { toast } = useToast();
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    latitude: 0.24455,
    longitude: 0.56565,
  });
  const [zoom, setZoom] = useState(12);
  const [searchAddress, setSearchAddress] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [geocoder, setGeocoder] = useState(null);
  const [mapTheme, setMapTheme] = useState('default');
  const { register, handleSubmit } = useFormHook();
  // Categories with icons and active state
  const categories = [
    { icon: '🍽️', label: 'Restaurants', active: false },
    { icon: '🏨', label: 'Hotels', active: false },
    { icon: '🎯', label: 'Things to do', active: false },
    { icon: '🏠', label: 'Houses', active: false },
    { icon: '🚗', label: 'Transit', active: false },
    { icon: '💊', label: 'Pharmacies', active: false },
    { icon: '🏪', label: 'ATMs', active: false },
  ];

  const [activeCategories, setActiveCategories] = useState(categories);

  // Initialize geocoder
  // useEffect(() => {
  //   if (window.google) {
  //     setGeocoder(new window.google.maps.Geocoder());
  //   }
  // }, []);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('mapFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Map center object for Google Maps
  // const center = {
  //   lat: coordinates.latitude,
  //   lng: coordinates.longitude,
  // };

  // Handle map load
  const onMapLoad = useCallback(map => {
    setMap(map);
  }, []);

  // Handle coordinate changes
  const handleCoordinateChange = useCallback(
    (type, value) => {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setCoordinates(prev => ({
          ...prev,
          [type]: numValue,
        }));

        if (map) {
          map.panTo({
            lat: type === 'latitude' ? numValue : coordinates.latitude,
            lng: type === 'longitude' ? numValue : coordinates.longitude,
          });
        }
      }
    },
    [map, coordinates],
  );

  // Handle zoom controls
  const handleZoom = useCallback(
    direction => {
      setZoom(prev => {
        const newZoom = Math.min(Math.max(prev + direction, 1), 20);
        if (map) {
          map.setZoom(newZoom);
        }
        return newZoom;
      });
    },
    [map],
  );

  // Handle map click
  const handleMapClick = useCallback(
    event => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      setCoordinates({
        latitude: lat,
        longitude: lng,
      });

      // Reverse geocoding
      if (geocoder) {
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === 'OK' && results[0]) {
            setSearchAddress(results[0].formatted_address);
          }
        });
      }
    },
    [geocoder],
  );

  // Handle address search
  const handleAddressSearch = useCallback(() => {
    if (geocoder && searchAddress) {
      geocoder.geocode({ address: searchAddress }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          setCoordinates({
            latitude: lat(),
            longitude: lng(),
          });

          if (map) {
            map.panTo({ lat: lat(), lng: lng() });
          }
        } else {
          toast({
            title: 'Location not found',
            description: 'Please try a different address',
            variant: 'destructive',
          });
        }
      });
    }
  }, [geocoder, searchAddress, map, toast]);

  // Save location to favorites
  const saveToFavorites = useCallback(() => {
    const newFavorite = {
      address: searchAddress,
      coordinates: { ...coordinates },
      timestamp: new Date().toISOString(),
    };

    setFavorites(prev => {
      const updated = [...prev, newFavorite];
      localStorage.setItem('mapFavorites', JSON.stringify(updated));
      return updated;
    });

    toast({
      title: 'Location saved',
      description: 'Added to your favorites',
    });
  }, [coordinates, searchAddress, toast]);

  // Toggle category
  const toggleCategory = useCallback(index => {
    setActiveCategories(prev =>
      prev.map((cat, i) =>
        i === index ? { ...cat, active: !cat.active } : cat,
      ),
    );
  }, []);

  // Toggle map theme
  const toggleTheme = useCallback(() => {
    setMapTheme(prev => {
      const newTheme = prev === 'default' ? 'dark' : 'default';
      if (map) {
        map.setOptions({
          styles: newTheme === 'dark' ? mapStyles.dark : [],
        });
      }
      return newTheme;
    });
  }, [map]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28',
  });

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // return (
  //   <LoadScript
  //     googleMapsApiKey="AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28"
  //     libraries={['places']}
  //   >
  //     <div className="w-full max-w-4xl mx-auto p-4">
  //       {/* Header */}
  //       <div className="flex items-center justify-between mb-4">
  //         <div className="flex items-center gap-2">
  //           <Button variant="ghost" className="p-2">
  //             <ChevronLeft className="h-5 w-5" />
  //             Back to
  //           </Button>
  //           <h1 className="text-xl font-semibold">Land Dimension map</h1>
  //         </div>
  //         <Button onClick={toggleTheme}>
  //           {mapTheme === 'default' ? '🌙' : '☀️'}
  //         </Button>
  //       </div>

  //       {/* Categories */}
  //       <div className="overflow-x-auto mb-4">
  //         <div className="flex gap-4 pb-2">
  //           {activeCategories.map((category, index) => (
  //             <Button
  //               key={index}
  //               variant={category.active ? 'default' : 'ghost'}
  //               className="whitespace-nowrap"
  //               onClick={() => toggleCategory(index)}
  //             >
  //               <span className="mr-2">{category.icon}</span>
  //               {category.label}
  //             </Button>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Map Container */}
  //       <Card className="relative w-full aspect-video mb-4">
  //         {/* Address Search */}
  //         <div className="absolute top-4 left-0 right-0 mx-auto w-max z-10">
  //           <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 gap-2">
  //             <MapPin className="h-5 w-5 text-gray-400" />
  //             {/* <Input
  //               type="text"
  //               value={searchAddress}
  //               onChange={e => setSearchAddress(e.target.value)}
  //               onKeyPress={e => e.key === 'Enter' && handleAddressSearch()}
  //               placeholder="Enter your Address"
  //               className="border-none focus:ring-0 w-64"
  //             /> */}
  //             <Button variant="ghost" size="sm" onClick={saveToFavorites}>
  //               <Save className="h-4 w-4" />
  //             </Button>
  //           </div>
  //         </div>

  //         {/* Zoom Controls */}
  //         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
  //           <Button
  //             variant="secondary"
  //             size="icon"
  //             onClick={() => handleZoom(1)}
  //           >
  //             <Plus className="h-4 w-4" />
  //           </Button>
  //           <Button
  //             variant="secondary"
  //             size="icon"
  //             onClick={() => handleZoom(-1)}
  //           >
  //             <Minus className="h-4 w-4" />
  //           </Button>
  //         </div>

  //         {/* Google Map */}
  //         {/* <GoogleMap
  //           mapContainerClassName="w-full h-full rounded-lg"
  //           center={center}
  //           zoom={zoom}
  //           onClick={handleMapClick}
  //           onLoad={onMapLoad}
  //           options={{
  //             styles: mapTheme === 'dark' ? mapStyles.dark : [],
  //             zoomControl: false,
  //             streetViewControl: false,
  //             mapTypeControl: false,
  //             fullscreenControl: false,
  //           }}
  //         >
  //           <Marker position={center} />
  //         </GoogleMap> */}
  //       </Card>

  //       {/* Coordinate Inputs */}
  //       <div className="grid grid-cols-2 gap-4">
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 mb-1">
  //             Location (Longitude)
  //           </label>
  //           {/* <Input
  //             type="number"
  //             value={coordinates.longitude}
  //             onChange={e =>
  //               handleCoordinateChange('longitude', e.target.value)
  //             }
  //             className="w-full"
  //             step="0.00001"
  //           />
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 mb-1">
  //             Location (Latitude)
  //           </label>
  //           <Input
  //             type="number"
  //             value={coordinates.latitude}
  //             onChange={e => handleCoordinateChange('latitude', e.target.value)}
  //             className="w-full"
  //             step="0.00001"
  //           /> */}
  //         </div>
  //       </div>

  //       {/* Favorites */}
  //       {favorites.length > 0 && (
  //         <div className="mt-4">
  //           <h2 className="text-lg font-semibold mb-2">Recent Locations</h2>
  //           <div className="space-y-2">
  //             {favorites.map((favorite, index) => (
  //               <Button
  //                 key={index}
  //                 variant="ghost"
  //                 className="w-full justify-start text-left"
  //                 onClick={() => {
  //                   setCoordinates(favorite.coordinates);
  //                   setSearchAddress(favorite.address);
  //                   if (map) {
  //                     map.panTo({
  //                       lat: favorite.coordinates.latitude,
  //                       lng: favorite.coordinates.longitude,
  //                     });
  //                   }
  //                 }}
  //               >
  //                 <History className="h-4 w-4 mr-2" />
  //                 {favorite.address}
  //               </Button>
  //             ))}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </LoadScript>
  // );

  const CustomMarkerComponent = () => (
    <div className="relative">
      <MarkerF
        position={center}
        icon={{
          url:
            'data:image/svg+xml;charset=UTF-8,' +
            encodeURIComponent(`
            <svg width="100" height="160" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Shadow circle -->
              <circle cx="40" cy="44" r="38" fill="#F3D1CD" />

              <!-- Main background circle -->
              <circle cx="40" cy="44" r="25" fill="#E41D53" />

              <!-- House icon - centered and scaled -->
              <g transform="translate(30, 33) scale(0.9)">
                <path d="M7 20V12.6C7 12.0399 7 11.7599 7.10899 11.546C7.20487 11.3578 7.35785 11.2049 7.54601 11.109C7.75992 11 8.03995 11 8.6 11H11.4C11.9601 11 12.2401 11 12.454 11.109C12.6422 11.2049 12.7951 11.3578 12.891 11.546C13 11.7599 13 12.0399 13 12.6V20M9.0177 1.764L2.23539 7.03912C1.78202 7.39175 1.55534 7.56806 1.39203 7.78886C1.24737 7.98444 1.1396 8.20478 1.07403 8.43905C1 8.70352 1 8.9907 1 9.56505V16.8C1 17.9201 1 18.4801 1.21799 18.908C1.40973 19.2843 1.71569 19.5903 2.09202 19.782C2.51984 20 3.07989 20 4.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4801 19 17.9201 19 16.8V9.56505C19 8.9907 19 8.70352 18.926 8.43905C18.8604 8.20478 18.7526 7.98444 18.608 7.78886C18.4447 7.56806 18.218 7.39175 17.7646 7.03913L10.9823 1.764C10.631 1.49075 10.4553 1.35412 10.2613 1.3016C10.0902 1.25526 9.9098 1.25526 9.73865 1.3016C9.54468 1.35412 9.36902 1.49075 9.0177 1.764Z"
                fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          `),
          anchor: new google.maps.Point(40, 40),
          scaledSize: new google.maps.Size(80, 80),
        }}
      />
    </div>
  );

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className=" flex gap-2   ">
      <PropertySidebar />
      <div className="flex-1 px-6 relative ">
        {/* Card */}
        <div className="">
          <div className="absolute top-6  z-10 left-1/2 -translate-x-1/2 shadow-customBoxShadow rounded-full">
            <img
              src={MarkerPinIcon}
              alt="marker-pin"
              className="absolute top-2 left-4"
            />
            <input
              type="text"
              className=" rounded-full p-2 w-full pl-10"
              placeholder="Enter Your Search"
            />
          </div>
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onMapLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <CustomMarkerComponent />
          </GoogleMap>
        ) : null}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-2 mt-4"
        >
          <Input
            type="text"
            placeholder="0.5"
            labelName="Location(Longitude)"
            name="latitude"
            register={register}
            className="max-w-[300px]"
          />

          <Input
            type="text"
            placeholder="0.2"
            labelName="Location(Latitude)"
            name="longitude"
            register={register}
            className="max-w-[300px]"
          />
          <Button className="bg-primary text-white shadow-sm hover:bg-primary/50">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

// // export default LocationMap;
// import React, { useCallback, useState } from 'react';
// import Button from '@/components/ui/Button';
// import Input from '@/components/ui/Input';
// import { Card } from '@/components/ui/card';
// import { ChevronLeft, MapPin } from 'lucide-react';
// import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
// import HomeIcon from '@/assets/Home.png';
// import useFormHook from '@/hooks/useFormHook';
// import PropertySidebar from '@/pages/property/PropertySidebar';
// import GoogleMapComponent from '@/components/GoogleMap';
// import GoogleMapLocationComponent from './GoogleMapLocationComponent';

// const center = {
//   lat: 17.375278,
//   lng: 78.432818,
// };

// const LocationMap = () => {
//   const [map, setMap] = useState(null);
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28',
//   });

//   const { register, handleSubmit } = useFormHook();

//   function onSubmit() {}

//   const CustomMarkerComponent = () => (
//     <div className="relative">
//       <MarkerF
//         position={center}
//         icon={{
//           url:
//             'data:image/svg+xml;charset=UTF-8,' +
//             encodeURIComponent(`
//             <svg width="100" height="160" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <!-- Shadow circle -->
//               <circle cx="40" cy="44" r="38" fill="#F3D1CD" />

//               <!-- Main background circle -->
//               <circle cx="40" cy="44" r="25" fill="#E41D53" />

//               <!-- House icon - centered and scaled -->
//               <g transform="translate(30, 33) scale(0.9)">
//                 <path d="M7 20V12.6C7 12.0399 7 11.7599 7.10899 11.546C7.20487 11.3578 7.35785 11.2049 7.54601 11.109C7.75992 11 8.03995 11 8.6 11H11.4C11.9601 11 12.2401 11 12.454 11.109C12.6422 11.2049 12.7951 11.3578 12.891 11.546C13 11.7599 13 12.0399 13 12.6V20M9.0177 1.764L2.23539 7.03912C1.78202 7.39175 1.55534 7.56806 1.39203 7.78886C1.24737 7.98444 1.1396 8.20478 1.07403 8.43905C1 8.70352 1 8.9907 1 9.56505V16.8C1 17.9201 1 18.4801 1.21799 18.908C1.40973 19.2843 1.71569 19.5903 2.09202 19.782C2.51984 20 3.07989 20 4.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4801 19 17.9201 19 16.8V9.56505C19 8.9907 19 8.70352 18.926 8.43905C18.8604 8.20478 18.7526 7.98444 18.608 7.78886C18.4447 7.56806 18.218 7.39175 17.7646 7.03913L10.9823 1.764C10.631 1.49075 10.4553 1.35412 10.2613 1.3016C10.0902 1.25526 9.9098 1.25526 9.73865 1.3016C9.54468 1.35412 9.36902 1.49075 9.0177 1.764Z"
//                 fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//               </g>
//             </svg>
//           `),
//           anchor: new google.maps.Point(40, 40),
//           scaledSize: new google.maps.Size(80, 80),
//         }}
//       />
//     </div>
//   );

//   return (

//     <div>
//       <GoogleMapComponent oneMarker={false} />
//     </div>
//   );
// };

export default LocationMap;
