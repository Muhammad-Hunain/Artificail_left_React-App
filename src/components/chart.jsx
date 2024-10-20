import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const DonutChart = ({ data1 }) => {
  const data = {
    labels: ['Gas Lift', 'Jet Pump', 'Sucker Road Pump'],
    datasets: [
      {
        data: [data1[0][0], data1[0][1], data1[0][2]],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Artificail Lift Method Probabillity',
      },
    },
    cutout: '70%',
  };

  const barData = {
    labels: ['Gas Lift', 'Jet Pump', 'Sucker Road Pump'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Artificail Lift Method Probabillity',
      },
    },
  };

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      flexDirection: 'row', 
      gap: '20px', // Adds space between charts
      padding: '20px',
      width: '100%', // Full width of container
      overflowX: 'auto' // Allows scrolling if charts exceed container width
    }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={{ flex: '1', minWidth: '400px' }}>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default DonutChart;
