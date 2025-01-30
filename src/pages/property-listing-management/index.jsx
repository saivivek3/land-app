import PropertySidebar from '@/components/PropertySidebar';
import Topbar from './Topbar';
import FilterPanel from './FilterPanel';
import PendingApprovePropertiesTabs from './PendingApprovePropertiesTabs';

function PropertyListing() {
  return (
    <div className="flex">
      <div className="md:w-1/4">
        <PropertySidebar />
      </div>
      <div className="mt-6 relative w-full md:px-2 px-3">
        <Topbar />
        <div className="absolute w-full h-[1px] left-0 right-4 bg-gray-200 mt-4"></div>
        <FilterPanel />
        <PendingApprovePropertiesTabs />
      </div>
    </div>
  );
}

export default PropertyListing;
