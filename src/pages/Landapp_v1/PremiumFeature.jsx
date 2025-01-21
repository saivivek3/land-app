import VerifiedImg from "@/assets/images/VerifiedHome.svg";
import RightHome from "@/assets/images/RightHome.svg";
import Approved from "@/assets/images/aproved.svg";
import AppIntroImg from "@/assets/images/AppIntroImg.svg";
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
        <div className="relative ">
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
        <div className="flex flex-col mt-6 ml-4 gap-4">
          {PremiumFeatures.map((premiumfeature, index) => (
            <div key={index} className="flex gap-2 items-center">
              <img src={Approved} alt={Approved} />
              <div className="text-gray-800">{premiumfeature}</div>
            </div>
          ))}
          {/* <div className="flex gap-2 items-center">
            <img src={Approved} alt={Approved} className="w-5 h-5" />
            <div className="text-gray-800">Listings Access</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Approved} alt={Approved} className="w-5 h-5" />
            <div className="text-gray-800">Access to Satellite Maps</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Approved} alt={Approved} className="w-5 h-5" />
            <div className="text-gray-800">Regional Ring Road Map</div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Approved} alt={Approved} className="w-5 h-5" />
            <div className="text-gray-800">Group-Buying Options</div>
          </div> */}
        </div>
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
