import PropertySidebar from '@/components/PropertySidebar';
import Topbar from './Topbar';
import FilterPanel from './FilterPanel';
import PendingApproveProperties from './PendingApproveProperties';

function PropertyListing() {
  return (
    <div className="flex ">
      <div className="w-1/5">
        <PropertySidebar />
      </div>
      <div className="px-10 mt-6 relative">
        <Topbar />
        <div className="absolute left-0 w-screen h-px bg-gray-200 mt-4"></div>
        <FilterPanel />
        <PendingApproveProperties />
      </div>
    </div>
  );
}

export default PropertyListing;
