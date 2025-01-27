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
      label: 'posted property',
      component: (
        <PendingProperties
          currentPage={currentPage}
          itemPerPage={itemPerPage}
        />
      ),
    },
    {
      key: 'approved',
      label: 'approved property',
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
    <div>
      <div className="mt-6">
        <div className="flex gap-5 border border-gray-200 bg-gray-200 rounded-md p-1 cursor-pointer">
          {tabs.map(tab => (
            <div
              key={tab.key}
              className={`  ${activeTab === tab.key ? 'bg-white rounded-md font-semibold p-2' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div>{tabs.find(tab => tab.key === activeTab)?.component}</div>
      </div>
      <div>
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
