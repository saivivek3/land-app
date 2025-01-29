import { Heart, Share2, EyeIcon } from 'lucide-react';
import HomeImage from '@/assets/images/image.png';
import Button from '@/components/ui/Button';
import FilterIcon from '@/assets/filter-icon.svg';
import VerifiedIcon from '@/assets/verified-icon.svg';
import DropIcon from '@/assets/drop.svg';
import RoadIcon from '@/assets/road.svg';
import CorporateIcon from '@/assets/corporate.svg';
import LegalIcon from '@/assets/legal.svg';
import RatingIcon from '@/assets/invoice.svg';
import WirelessIcon from '@/assets/wireless.svg';
import GoogleMapComponent from '@/components/GoogleMap';

const SinglePropertyView = () => {
  return (
    <div className="max-w-5xl mx-auto my-4  bg-white rounded-lg shadow-sm border border-bPrimary px-3 py-3 flex gap-4 min-w-fit">
      {/* Property Image */}
      <section>
        <div className="relative">
          <img
            src={HomeImage}
            alt="Property aerial view"
            className="w-full h-48 object-cover rounded-lg border border-bPrimary"
          />
          <div className="absolute top-2 text-primary font-semibold text-xs right-2  rounded-full px-2 py-1  flex items-center gap-1">
            <div className="flex items-center gap-2 rounded-sm bg-white px-4  py-1">
              <EyeIcon className="h-4 w-4 text-[#0086c9]" />
              <span className="text-primary font-semibold text-xs">
                27 Viewing
              </span>{' '}
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="p-4 border-b flex  items-center">
          <div className="flex items-center gap-2">
            <Button className="bg-white rounded-lg border border-bPrimary hover:bg-white/50 ">
              <div className="flex gap-2 text-secondary text-xs font-semibold">
                <span>Filters</span>
                <img src={FilterIcon} alt="filter-icon" className="h-4 w-4" />
              </div>
            </Button>
            <Button className="bg-white rounded-lg border border-bPrimary hover:bg-white/50 min-w-56">
              <div className="flex gap-2 text-secondary text-xs font-semibold">
                <span>Display total before taxes</span>
                <div className="flex items-center">
                  <div className="relative h-6 w-12 cursor-pointer rounded-full bg-gray-200">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      onChange={e => console.log(e.target.checked)}
                    />
                    <span className="absolute inset-0 flex h-full w-full items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out peer-checked:bg-purple-500">
                      <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-6" />
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Price Details */}
        <div className="p-4 grid grid-cols-3 gap-4 border-b">
          <div className="bg-disabledlight border border-bPrimary rounded-lg p-2">
            <div className="text-xs text-tertiary font-medium ">Price</div>
            <div className="text-primary font-bold text-base">1.2CR</div>
          </div>
          <div className="bg-disabledlight border border-bPrimary rounded-lg p-2">
            <div className="text-xs text-tertiary font-medium ">sqft</div>
            <div className="text-primary font-bold text-base">2400</div>
          </div>
          <div className="bg-disabledlight border border-bPrimary rounded-lg p-2">
            <div className="text-xs text-tertiary font-medium ">per sqft</div>
            <div className="text-primary font-bold text-base">1200</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-4 border-b flex items-center bg-disabledlight border border-bPrimary rounded-lg ">
          <div>
            <div className="text-xs text-tertiary font-semibold ">
              Contact Owner
            </div>
            <div className="text-primary text-base font-bold">Mr. Sandeep</div>
          </div>
          <div className="flex gap-3 ml-auto items-center">
            <Button className="bg-black text-white font-semibold text-xs min-w-32 py-3 mt-0 hover:bg-black/50">
              Call Owner
            </Button>
            <Button className="b-white text-buttontertiary bg-white mt-0 border-[0.6px] border-[#d6bbfb] hover:bg-white/50">
              Message
            </Button>
          </div>
        </div>

        {/* Property Title */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-base text-primary">
              JANAPRIYA VENTURES
            </h2>
            <div className="flex gap-2 items-center">
              <img src={VerifiedIcon} alt="verified-icon" className="h-5 w-5" />
              <div className="border border-bSecondary rounded-lg p-1">
                <Heart className="h-5 w-5" />
              </div>
              <div className="border border-bSecondary rounded-lg p-1">
                <Share2 className="h-5 w-5" />
              </div>
            </div>
          </div>
          <p className="text-black text-xs mt-2">
            Strategically located near Shamshabad Airport, offering excellent
            connectivity to the city and key landmarks. Verified and clear title
            property, ideal for commercial, residential communities.
          </p>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-4 p-4 gap-4 border-b">
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <img src={DropIcon} alt="drop-icon" />
            <div className="text-secondary font-semibold text-[9px] ">
              WATER
            </div>
            <div className="text-primary text-xs font-bold">Adequate</div>
          </div>
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <img src={RoadIcon} alt="road-icon" />
            <div className="text-secondary font-semibold text-[9px]">
              ROAD DISTANCE
            </div>
            <div className="text-primary text-xs font-bold">2.0M</div>
          </div>
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <div className="text-secondary font-semibold text-[9px]">
              SOIL TYPE
            </div>
            <div className="text-primary text-xs font-bold">Red Soil</div>
          </div>
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <div className="text-secondary font-semibold text-[9px]">
              LAND USE
            </div>
            <div className="text-primary text-xs font-bold">Agriculture</div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-4 p-4 gap-4">
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <img src={CorporateIcon} alt="corporate-ion" />
            <div className="text-secondary font-semibold text-[9px]">AREA</div>
            <div className="text-primary text-xs font-bold">2200 sqft</div>
          </div>
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <img src={LegalIcon} alt="legal-icon" />
            <div className="text-secondary font-semibold text-[9px]">
              LEGAL STATUS
            </div>
            <div className="text-primary text-xs font-bold">Verified</div>
          </div>
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <img src={RatingIcon} alt="rating-icon" />
            <div className="text-secondary font-semibold text-[9px]">
              RATING
            </div>
            <div className="text-primary text-xs font-bold">4.4</div>
          </div>
          <div className="flex items-center justify-center flex-col border border-bPrimary p-2 rounded-md bg-disabledlight">
            <img src={WirelessIcon} alt="wireless-icon" />
            <div className="text-secondary font-semibold text-[9px]">
              LAND ACCESS
            </div>
            <div className="text-primary text-xs font-bold">Agriculture</div>
          </div>
        </div>
      </section>
      <GoogleMapComponent oneMarker />
    </div>
  );
};

export default SinglePropertyView;
