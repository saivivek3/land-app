import React from 'react';
import DonutChart from './DonutChart';
import LineChart from './LineChart';

function AdminDetails() {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      <DonutChart />
      <LineChart />
    </div>
  );
}

export default AdminDetails;
