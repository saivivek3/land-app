import React from 'react';
import TabsWithTable from './TabsWithTable';

function PropertyHistory() {
  return (
    <div>
      <TabsWithTable
        tabsTriggerData={[
          { id: 1, value: 'searchHistory ', label: 'Search History' },
          { id: 2, value: 'viewedProperties', label: 'Viewed Properties' },
          {
            id: 3,
            value: 'communicationHistory',
            label: 'Communication History',
          },
        ]}
        tabsData={[
          { id: 1, value: 'allHistory', label: 'All History' },
          { id: 2, value: 'contacted', label: 'Contacted' },
        ]}
      />
    </div>
  );
}

export default PropertyHistory;
