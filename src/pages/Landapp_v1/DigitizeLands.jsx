import DigitizelandImg from '@/assets/images/Digitizeland.svg';
import VerifiedHome from '@/assets/images/VerifiedHome.svg';
import RightHome from '@/assets/images/RightHome.svg';
import Approved from '@/assets/images/aproved.svg';

function DigitizeLands() {
  const features = [
    'Transparency',
    'Accessibility & Efficiency',
    'Reduced Disputes',
    'Integration with Technology',
  ];
  return (
    <div className="mx-20 mt-12 flex gap-6">
      <div className="w-1/2">
        <img src={DigitizelandImg} alt={DigitizelandImg} className=" w-full" />
      </div>
      <div className="w-1/2 mt-10">
        <div className="flex relative">
          <img src={VerifiedHome} alt={VerifiedHome} className="w-8" />
          <img
            src={RightHome}
            alt={RightHome}
            className="absolute top-2 left-2 w-4"
          />
        </div>
        <div className=" font-semibold text-2xl mt-3">Digitised Lands</div>
        <div className=" text-gray-600 text-sm mt-4">
          Check if your land falls in the FTL or buffer zone.
        </div>
        <div className="flex flex-col mt-6 ml-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <img src={Approved} alt={Approved} className="w-5 h-5" />
              <div className="text-gray-800">{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DigitizeLands;
