import VerifiedImg from './images/VerifiedHome.svg';
import RightHome from './images/RightHome.svg';
import Approved from './images/aproved.svg';
import AppIntroImg from './images/AppIntroImg.svg';
import Features from './Features';

function PremiumFeatures() {
  const PremiumFeatures = [
    'Listings Access',
    'Access to Satellite Maps',
    'Regional Ring Road Map',
    'Group-Buying Options',
  ];

  return (
    <div className="mx-4 sm:mx-10 md:mx-20 flex flex-col md:flex-row mt-10 sm:mt-16 md:mt-20 gap-8">
      {/* Left Section */}
      <div className="md:w-1/2">
        <div className="relative">
          <img src={VerifiedImg} alt="Verified" className="w-8 h-8" />
          <img
            src={RightHome}
            alt="Right Home"
            className="absolute top-2 left-2 w-4 h-4"
          />
        </div>
        <div className="font-semibold text-lg sm:text-xl max-w-xs mt-4">
          Get in touch with the team for premium access.
        </div>
        <div className="max-w-md text-gray-500 text-sm sm:text-base mt-2">
          Once you subscribe, we will schedule a call with you to get you
          started.
        </div>
        <Features
          features={PremiumFeatures}
          iconAlt="Approved Icon"
          iconSrc={Approved}
        />
        <button className="bg-black p-3 text-white mt-6 sm:mt-10 rounded-lg w-full md:w-auto">
          Subscribe Now
        </button>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={AppIntroImg}
          alt="App Intro"
          className="w-full max-w-sm sm:max-w-md md:max-w-full"
        />
      </div>
    </div>
  );
}

export default PremiumFeatures;
