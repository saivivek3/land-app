import PendingProperties from './PendingProperties';
import ApprovedProperties from './ApprovedProperties';
import { useState } from 'react';
import Pagination from '../agentprofile/Pagination';
import { PendingApproveAllProperties } from '@/data/data';

function PendingApprovePropertiesTabs() {
  const [activeTab, setActiveTab] = useState('posted');
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;

  const tabs = [
    {
      key: 'posted',
      label: 'Posted Property',
      component: (
        <PendingProperties
          currentPage={currentPage}
          itemPerPage={itemPerPage}
        />
      ),
    },
    {
      key: 'approved',
      label: 'Approved Property',
      component: (
        <ApprovedProperties
          currentPage={currentPage}
          itemPerPage={itemPerPage}
        />
      ),
    },
  ];

  const totalItems = PendingApproveAllProperties.length;
  const totalPages = Math.ceil(totalItems / itemPerPage);

  return (
    <div className="w-full">
      {/* Tabs Section */}
      <div className="mt-6 md:w-[240%] lg:w-[200%] xl:w-full">
        <div className="flex gap-2 md:gap-4 lg:gap-6 border md:text-base text-sm border-gray-200 bg-gray-200 rounded-md p-1 cursor-pointer">
          {tabs.map(tab => (
            <div
              key={tab.key}
              className={`px-3 py-2 text-center flex-1 md:flex-none ${
                activeTab === tab.key
                  ? 'bg-white rounded-md font-semibold shadow-md'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {tabs.find(tab => tab.key === activeTab)?.component}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default PendingApprovePropertiesTabs;
