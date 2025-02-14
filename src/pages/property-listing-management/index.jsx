import PropertySidebar from '@/components/PropertySidebar';
import Topbar from './Topbar';
import FilterPanel from './FilterPanel';
import PendingApprovePropertiesTabs from './PendingApprovePropertiesTabs';

function PropertyListing() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/3 lg:w-1/4">
        <PropertySidebar className="" />
      </div>
      <div className="mt-6 relative w-full xl:w-full md:w-1/2  lg:w-1/2 md:px-6 px-3">
        <Topbar />
        <div className="absolute w-full h-[1px] left-0 right-4 bg-gray-200 mt-4"></div>
        <FilterPanel />
        <PendingApprovePropertiesTabs />
      </div>
    </div>
  );
}

export default PropertyListing;
