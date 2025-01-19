//
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const LineChart = () => {
//   const data = {
//     labels: [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ],
//     datasets: [
//       {
//         label: '2024',
//         data: [60, 65, 68, 72, 75, 78, 80, 83, 85, 87, 89, 90],
//         borderColor: 'rgba(134, 94, 241, 1)', // Purple color
//         backgroundColor: 'rgba(134, 94, 241, 0.2)',
//         fill: false,
//         tension: 0.4,
//       },
//       {
//         label: '2023',
//         data: [40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 69, 72],
//         borderColor: 'rgba(153, 153, 153, 1)', // Light gray color
//         backgroundColor: 'rgba(153, 153, 153, 0.2)',
//         fill: false,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           boxWidth: 12,
//           boxHeight: 12,
//           padding: 20,
//         },
//       },
//       title: {
//         display: true,
//         text: 'Trends in Property Views',
//         font: {
//           size: 16,
//         },
//         padding: {
//           top: 10,
//           bottom: 30,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           drawOnChartArea: false,
//         },
//       },
//       y: {
//         min: 0,
//         max: 100,
//         ticks: {
//           stepSize: 20,
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//       <Line data={data} options={options} />
//       <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
//         40% growth in property views over the last 1 year.
//       </p>
//     </div>
//   );
// };

// export default LineChart;

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Button from '@/components/ui/Button';

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
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          font: {
            size: 14,
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
      <div>
        <h4 className="text-primary font-semibold text-base ">
          Source Revenue Contribution
        </h4>
      </div>

      <Doughnut data={data} options={options} />

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
