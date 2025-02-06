import DonutChart from './DonutChart';
import LineChart from './LineChart';

function AdminDetails() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 justify-center">
      <DonutChart />
      <LineChart />
    </div>
  );
}

export default AdminDetails;
