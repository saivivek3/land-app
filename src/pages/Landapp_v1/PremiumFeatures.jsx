import VerifiedImg from "./images/VerifiedHome.svg";
import RightHome from "./images/RightHome.svg";
import Approved from "././images/aproved.svg";
import AppIntroImg from "./images/AppIntroImg.svg";
import Features from "./Features";
function PremiumFeatures() {
  const PremiumFeatures = [
    "Listings Access",
    "Access to Satellite Maps",
    "Regional Ring Road Map",
    "Group-Buying Options",
  ];
  return (
    <div className="mx-20 flex mt-20">
      <div className="w-1/2 ">
        <div className="relative">
          <img src={VerifiedImg} alt={VerifiedImg} className="w-8 h-8" />
          <img
            src={RightHome}
            alt={RightHome}
            className="absolute top-2 left-2 w-4 h-4"
          />
        </div>
        <div className=" font-semibold text-xl max-w-xs mt-4">
          Get in touch with the team for premium access.
        </div>
        <div className="max-w-md text-gray-500 mt-2">
          Once you subscribe, we will schedule a call with you to get you
          started.
        </div>
        {/* <div className="flex flex-col mt-6 ml-4 gap-4">
          {PremiumFeatures.map((premiumfeature, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img src={Approved} alt={Approved} />
              <div className="text-gray-800">{premiumfeature}</div>
            </div>
          ))}
        </div> */}
        <Features
          features={PremiumFeatures}
          iconAlt={Approved}
          iconSrc={Approved}
        />
        <button className="bg-black p-3 text-white mt-10 rounded-lg">
          Subscribe Now
        </button>
      </div>
      <div className="w-1/2">
        <img src={AppIntroImg} alt={AppIntroImg} />
      </div>
    </div>
  );
}

export default PremiumFeatures;
