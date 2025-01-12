import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { MoreVerticalIcon } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: '2024',
        data: [60, 65, 68, 72, 75, 78, 80, 83, 85, 87, 89, 90],
        borderColor: 'rgba(134, 94, 241, 1)', // Purple color
        backgroundColor: 'rgba(134, 94, 241, 0.2)',
        fill: false,
        tension: 0.4,
      },
      {
        label: '2023',
        data: [40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 69, 72],
        borderColor: 'rgba(153, 153, 153, 1)', // Light gray color
        backgroundColor: 'rgba(153, 153, 153, 0.2)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="shadow-sm border border-bSecondary rounded-xl bg-white ">
      <div className="p-6 flex justify-between items-center">
        <div>
          <h1 className="text-base font-semibold text-primary">
            Trends in Property Views
          </h1>
          <p className="text-tertiary text-xs">
            40% growth in property views over the last 1 year.
          </p>
        </div>
        <MoreVerticalIcon className="text-bPrimary cursor-pointer" />
      </div>
      <div className="flex items-center justify-center p-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
