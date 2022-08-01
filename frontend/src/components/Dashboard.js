import { Outlet } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const [productData, setProductData] = useState(null);
  const [productLoading, setProductLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [orderLoading, setOrderLoading] = useState(false);
  const [qtyData, setQtyData] = useState({});
  const [priceData, setPriceData] = useState({});

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [54, 12, 87, 90, 34],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [87, 23, 546, 3, 46, 5],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const extractData = (data, labelfield, datafield) => {
    const result = { labels: [], data: [] };
    data.map((item) => {
      result.labels.push(item[labelfield]);
      result.data.push(item[datafield]);
    });
    console.log(result);
    return result;
  };

  //for product details
  const loadProductData = () => {
    setProductLoading(true);
    fetch("http://localhost:5000/product/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setProductLoading(false);
          setProductData(data);

          setQtyData(extractData(data, "title", "quantity"));
          setPriceData(extractData(data, "title", "price"));

        });
      }
    });
  };
  useEffect(() => {
    loadProductData();
  }, []);

  //for order details
  const loadOrderData = () => {
    setProductLoading(true);
    fetch("http://localhost:5000/product/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setOrderLoading(false);
          setOrderData(data);
        });
      }
    });
  };
  useEffect(() => {
    loadOrderData();
  }, []);

  const displayProductChart = () => {
    if (!productLoading) {
      <Bar data={{}} />;
    }
  };

  const displayOrderChart = () => {
    if (!orderLoading) {
      return <Bar data={{}} />;
    }
  };

  const displayQtyChart = () => {
    if (!orderLoading) {
      return (
        <Bar
          data={{
            labels: qtyData.labels,
            datasets: [
              {
                label: "Quantity",
                data: qtyData.data,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      );
    }
  };

  const displayPriceChart = () => {
    if (!productLoading) {
      return (
        <Bar
          data={{
            labels: priceData.labels,
            datasets: [
              {
                label: "Price",
                data: priceData.data,
                backgroundColor: "#add8e6",
              },
            ],
          }}
        />
      );
    }
  };

  return (
    <div>
      {/* <Bar data={data} /> */}
      {displayQtyChart()}
      {displayPriceChart()}
    </div>
  );
};

export default Dashboard;
