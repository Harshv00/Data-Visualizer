import { Outlet } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [54, 12, 87, 90, 34],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [87, 23, 546, 3, 46, 5],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <div>
    <Bar  data={data} />;
  </div>;
};

export default Dashboard;
