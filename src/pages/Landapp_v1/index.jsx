import Navbar from '@/components/Navbar';
import DigitizeLands from './DigitizeLands';
import FindYourLand from './FindYourLand';
import HomeCenterImage from './HomeCenterImg';
import LandappIntro from './LandappIntro';
import NavPart from './Navpart';
import Premium from './Premium';
import PremiumFeatures from './PremiumFeature';

function Landapp_v1() {
  return (
    <div>
      <Navbar>
        <NavPart />
      </Navbar>
      <LandappIntro />
      <FindYourLand />
      <HomeCenterImage />
      <Premium />
      <PremiumFeatures />
      <DigitizeLands />
    </div>
  );
}

export default Landapp_v1;
