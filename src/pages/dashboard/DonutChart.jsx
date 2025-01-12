import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Button from '@/components/ui/Button';
import { MoreVerticalIcon } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Hyderabad', 'Bengaluru', 'Vizag', 'Vijayawada'],
    datasets: [
      {
        data: [50, 30, 10, 10], // Percentage data
        backgroundColor: [
          'rgba(134, 94, 241, 1)', // Hyderabad (dark purple)
          'rgba(160, 122, 255, 1)', // Bengaluru (medium purple)
          'rgba(193, 163, 255, 1)', // Vizag (light purple)
          'rgba(225, 204, 255, 1)', // Vijayawada (lightest purple)
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Makes it a donut chart
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 6,
          boxHeight: 6,
          usePointStyle: true,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => {
            const dataset = tooltipItem.dataset.data;
            const index = tooltipItem.dataIndex;
            const label = data.labels[index];
            return `${label}: ${dataset[index]}%`;
          },
        },
      },
    },
  };

  return (
    <div className="shadow-sm border border-bSecondary rounded-xl bg-white">
      <div className="flex gap-2 items-center justify-between p-4 cusor-pointer">
        <h4 className="text-primary font-semibold text-base ">
          Source Revenue Contribution
        </h4>
        <MoreVerticalIcon className="text-bPrimary" />
      </div>
      <div className="max-h-64 flex justify-center items-center">
        <Doughnut data={data} options={options} />
      </div>

      <div className="h-[1px] w-full bg-bSecondary"></div>

      <div className="p-4 flex justify-end">
        <Button className="shadow-sm rounded-lg border border-bPrimary text-secondary text-xs font-semibold bg-white max-w-fit">
          View full report
        </Button>
      </div>
    </div>
  );
};

export default DonutChart;
