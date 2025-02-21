import { useState, useEffect, useContext } from 'react';
import {
  GoogleMap,
  MarkerF,
  StandaloneSearchBox,
} from '@react-google-maps/api';
import Button from '@/components/ui/Button.jsx';
import Input from '@/components/ui/Input';
import useFormHook from '@/hooks/useFormHook';
import MarkerPinIcon from '@/assets/marker-pin.svg';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const LocationMap = ({
  stepIndex,
  control,
  handleSubmit,
  setValue,
  onSubmit,
}) => {
  // Reference to store the autocomplete instance
  const [searchBox, setSearchBox] = useState(null);
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
    address: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {

    handleStepsBack,
    handleStepsDecrease,
  } = useContext(PropertyDetailsContext);
  // Categories with icons and active state

  useEffect(() => {
    // Automatically request location on component mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError(null); // Clear any previous errors
        },
        err => {
          setError(err.message);
        },
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    setValue('latitude', location.lat);
    setValue('longitude', location.lng);
  }, [location.lat, location.lng]);

  const handleDragEnd = event => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const CustomMarkerComponent = () => (
    <div className="relative">
      <MarkerF
        position={{ lat: location.lat, lng: location.lng }}
        draggable={true}
        onDragEnd={handleDragEnd}
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

  const onLoad = ref => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();

      if (places && places.length > 0) {
        const place = places[0];
        const locationData = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address,
        };
        setLocation(locationData);
      }
    }
  };

  return (
    <section className="w-full px-4">
      <div className="mb-6">
        <button
          className="flex items-center text-primary font-bold text-base mb-3 hover:text-gray-900"
          onClick={() => {
            handleStepsBack(stepIndex);
            handleStepsDecrease(stepIndex);
          }}
        >
          <ChevronLeft className="w-5 h-5 mr-1 " />
          Back to
        </button>
        <h2 className="text-3xl font-bold  mb-2">Land Dimension map</h2>
      </div>

      <h1
        className="text-tertiary
        ` font-semibold text-[18px] m-2 my-4"
      >
        Mark exact location in map
      </h1>

      <div className="border border-[#D9D9D9] text-[18px] mb-3 "></div>

      <div className="flex-1 px-6 relative ">
        {/* Card */}
        <div className="flex justify-center">
          <div className="absolute mt-12 top-20 w-[80%] sm:top-2 z-10 shadow-customBoxShadow rounded-full border border-bPrimary shadow-sm left-1/2 transform -translate-x-1/2">
            <img
              src={MarkerPinIcon}
              alt="marker-pin"
              className="absolute top-2 left-4"
            />

            <StandaloneSearchBox
              onLoad={onLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                className="rounded-full p-2 w-full pl-10 min-w-fit"
                placeholder="Enter Your Search"
                value={location.address}
                onChange={e =>
                  setLocation(prev => ({ ...prev, address: e.target.value }))
                }
              />
            </StandaloneSearchBox>
          </div>
        </div>

        <section className="shadow-sm rounded-lg w-full">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: location.lat, lng: location.lng }}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <CustomMarkerComponent />
          </GoogleMap>

          <Input
            type="text"
            labelName="Location(Longitude)"
            name="longitude"
            control={control}
            defaultValue={location.lat}
          />

          <Input
            type="text"
            labelName="Location(Latitude)"
            name="latitude"
            control={control}
            className="max-w-[300px]"
          />
          <Button
            className="bg-primary text-white shadow-sm hover:bg-primary/50"
            onClick={() => {
              handleSubmit(onSubmit);
            }}
          >
            Continue
          </Button>
        </section>
      </div>
    </section>
  );
};

export default LocationMap;
