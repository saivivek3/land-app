import Approved from "././images/aproved.svg";
import Features from "./Features";
import VerifiedImg from "./images/VerifiedHome.svg";
import RightHome from "./images/RightHome.svg";
import AppleStore from "./images/AppleStore.svg";
import PlayStore from "./images/googlePlay.svg";
import LandAppMobileView from "./images/LandAppMobileView.svg";

function WhyChooseLandapp() {
  const choselandapp = [
    "Listings Access",
    "Access to Satellite Maps",
    "Regional Ring Road Map",
    "Group-Buying Options",
  ];
  return (
    <div className="mx-32 mt-32 flex">
      <div className="w-1/2 relative">
        <img src={VerifiedImg} alt={VerifiedImg} className="w-8 h-8 ml-3" />
        <img
          src={RightHome}
          alt={RightHome}
          className=" absolute top-3 left-5 w-3 h-3"
        />
        <div className=" text-2xl font-semibold ml-3 mt-4">
          Why choose Landapp?
        </div>
        <div className="mt-3 ml-4 text-gray-500">
          Start your 30-day free trial today.
        </div>
        <Features
          features={choselandapp}
          iconSrc={Approved}
          iconAlt={Approved}
        />
        <div className="flex gap-4 mt-8 ml-3">
          <img src={AppleStore} alt={AppleStore} />
          <img src={PlayStore} alt={PlayStore} />
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src={LandAppMobileView} alt={LandAppMobileView} className="h-96" />
      </div>
    </div>
  );
}

export default WhyChooseLandapp;
