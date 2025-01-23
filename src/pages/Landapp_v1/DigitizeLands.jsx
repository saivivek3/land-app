import DigitizelandImg from './images/Digitizeland.svg';
import Approved from '././images/aproved.svg';
import Features from './Features';
import VerifiedImg from './images/VerifiedHome.svg';
import RightHome from './images/RightHome.svg';

function DigitizeLands() {
  const features = [
    'Transparency',
    'Accessibility & Efficiency',
    'Reduced Disputes',
    'Integration with Technology',
  ];
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 mt-10 sm:mt-12 flex flex-col md:flex-row gap-6">
      {/* Left Section: Image */}
      <div className="md:w-1/2">
        <img
          src={DigitizelandImg}
          alt="Digitized Lands"
          className="w-full max-w-sm sm:max-w-md md:max-w-full"
        />
      </div>
      {/* Right Section: Content */}
      <div className="md:w-1/2 mt-4 md:mt-10">
        <div className="relative">
          <img src={VerifiedImg} alt="Verified" className="w-8 h-8" />
          <img
            src={RightHome}
            alt="Right Home"
            className="absolute top-2 left-2 w-4 h-4"
          />
        </div>
        <div className="font-semibold text-xl sm:text-2xl mt-3">
          Digitised Lands
        </div>
        <div className="text-gray-600 text-sm sm:text-base mt-4">
          Check if your land falls in the FTL or buffer zone.
        </div>
        <Features
          features={features}
          iconAlt="Approved Icon"
          iconSrc={Approved}
        />
      </div>
    </div>
  );
}

export default DigitizeLands;
