import DigitizelandImg from "./images/Digitizeland.svg";
// import VerifiedHome from "./images/VerifiedHome.svg";
// import RightHome from "./images/RightHome.svg";
import Approved from "././images/aproved.svg";
import Features from "./Features";

function DigitizeLands() {
  const features = [
    "Transparency",
    "Accessibility & Efficiency",
    "Reduced Disputes",
    "Integration with Technology",
  ];
  return (
    <div className="mx-20 mt-12 flex gap-2">
      <div className="w-1/2">
        <img src={DigitizelandImg} alt={DigitizelandImg} className=" w-full" />
      </div>
      <div className="w-1/2 mt-10 md:ml-8">
        <div className=" font-semibold text-2xl mt-3">Digitised Lands</div>
        <div className=" text-gray-600 text-sm mt-4">
          Check if your land falls in the FTL or buffer zone.
        </div>
        <Features features={features} iconAlt={Approved} iconSrc={Approved} />
      </div>
    </div>
  );
}

export default DigitizeLands;
