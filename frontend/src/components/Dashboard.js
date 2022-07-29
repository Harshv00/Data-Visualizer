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
import { useEffect, useState } from "react";

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
  const [productData, setProductData] = useState(null);
  const [productLoading, setProductLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [orderLoading, setOrderLoading] = useState(false);

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

  //for product details
  const loadProductData = () => {
    setProductLoading(true);
    fetch("http://localhost:5000/product/getall").then((res) => {
      if (res.status === 200) {
        res.json().then(data => {
          console.log(data);
          setProductLoading(false);
          setProductData(data);
        })
      }
    });
  }
  useEffect(() => {
    loadProductData();
  }, [])

  //for order details
  const loadOrderData = () => {
    setProductLoading(true);
    fetch("http://localhost:5000/product/getall").then((res) => {
      if (res.status === 200) {
        res.json().then(data => {
          console.log(data);
          setOrderLoading(false);
          setOrderData(data);
        })
      }
    });
  }
  useEffect(() => {
    loadOrderData();
  }, [])

  const displayProductChart = () => {
    if (!productLoading) {
      <Bar data={{

      }} />
    }
  }

  const displayOrderChart = () => {
    if (!orderLoading) {
      <Bar data={{

      }} />
    }
  }

  return (
    <div>
        <Bar data={data} />;
      </div>
   
  )
};

export default Dashboard;
