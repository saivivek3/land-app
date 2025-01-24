import TabsWithTable from './TabsWithTable';

function PropertyHistory() {
  return (
    <div>
      <TabsWithTable
        tabsTriggerData={[
          { id: 1, value: 'Search History ', label: 'Search History' },
          { id: 2, value: 'Viewed Properties', label: 'Viewed Properties' },
          {
            id: 3,
            value: 'Communication History',
            label: 'Communication History',
          },
        ]}
        tabsData={[
          { id: 1, value: 'All History', label: 'All History' },
          { id: 2, value: 'Contacted', label: 'Contacted' },
        ]}
      />
    </div>
  );
}

export default PropertyHistory;
