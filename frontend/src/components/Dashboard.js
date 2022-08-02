import { Outlet } from "react-router-dom";
import { Bar, Chart } from "react-chartjs-2";
import "./Dashboard.css";
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
                backgroundColor: "#dc3545",
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
                backgroundColor: "#0d6efd",
              },
            ],
          }}
        />
      );
    }
  };

  return (
    <div className="body-dash">
      {/* <Bar data={data} /> */}
      <div class="p-4">
    <div class="welcome">
      <div class="content rounded-3 p-3">
        <h1 class="fs-3">Welcome to Dashboard</h1>
        <p class="mb-0">Hello User, welcome to your awesome dashboard!</p>
      </div>
    </div>
    </div>
    <section class="statistics mt-4">
      <div class="row">
        <div class="col-lg-4">
          <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
            <i class="uil-envelope-shield fs-2 text-center bg-primary rounded-circle"></i>
            <div class="ms-3">
              <div class="d-flex align-items-center">
                <h3 class="mb-0">1,245</h3> <span class="d-block ms-2">Emails</span>
              </div>
              <p class="fs-normal mb-0">Received</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
            <i class="uil-file fs-2 text-center bg-danger rounded-circle"></i>
            <div class="ms-3">
              <div class="d-flex align-items-center">
                <h3 class="mb-0">34</h3> <span class="d-block ms-2">Projects</span>
              </div>
              <p class="fs-normal mb-0">Completed</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="box d-flex rounded-2 align-items-center p-3">
            <i class="uil-users-alt fs-2 text-center bg-success rounded-circle"></i>
            <div class="ms-3">
              <div class="d-flex align-items-center">
                <h3 class="mb-0">5,245</h3> <span class="d-block ms-2">Users</span>
              </div>
              <p class="fs-normal mb-0">Connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section class="charts mt-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="chart-container rounded-2 p-2">
            <h3 class="fs-6 mb-3">Quantity Chart</h3>
            {displayQtyChart()}
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="chart-container rounded-2 p-2">
            <h3 class="fs-6 mb-3">Price Chart</h3>
            {displayPriceChart()}
            <canvas id="myChart2"></canvas>
          </div>
        </div>
      </div>
    </section>
    <section class="admins mt-4">
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
              <div class="img">
                <img class="img-fluid rounded-pill"
                     width="75" height="75"
                     src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148906966/small/1501685402/enhance"
                     alt="admin"></img>
              </div>
              <div class="ms-3">
                <h3 class="fs-5 mb-1">Joge Lucky</h3>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
            <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
              <div class="img">
                <img class="img-fluid rounded-pill"
                     width="75" height="75"
                     src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907137/small/1501685404/enhance"
                     alt="admin"></img>
              </div>
              <div class="ms-3">
                <h3 class="fs-5 mb-1">Joge Lucky</h3>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
            <div class="admin d-flex align-items-center rounded-2 p-3">
              <div class="img">
                <img class="img-fluid rounded-pill"
                     width="75" height="75"
                     src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907019/small/1501685403/enhance"
                     alt="admin"></img>
              </div>
              <div class="ms-3">
                <h3 class="fs-5 mb-1">Joge Lucky</h3>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box">
            <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
              <div class="img">
                <img class="img-fluid rounded-pill"
                     width="75" height="75"
                     src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907114/small/1501685404/enhance"
                     alt="admin"></img>
              </div>
              <div class="ms-3">
                <h3 class="fs-5 mb-1">Joge Lucky</h3>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
            <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
              <div class="img">
                <img class="img-fluid rounded-pill"
                     width="75" height="75"
                     src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907086/small/1501685404/enhance"
                     alt="admin"></img>
              </div>
              <div class="ms-3">
                <h3 class="fs-5 mb-1">Joge Lucky</h3>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
            <div class="admin d-flex align-items-center rounded-2 p-3">
              <div class="img">
                <img class="img-fluid rounded-pill"
                     width="75" height="75"
                     src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021036514417/media/23148907008/medium/1501685726/enhance"
                     alt="admin"></img>
              </div>
              <div class="ms-3">
                <h3 class="fs-5 mb-1">Joge Lucky</h3>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
    <section class="statis mt-4 text-center">
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div class="box bg-primary p-3">
            <i class="uil-eye"></i>
            <h3>5,154</h3>
            <p class="lead">Page views</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <div class="box bg-danger p-3">
            <i class="uil-user"></i>
            <h3>245</h3>
            <p class="lead">User registered</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
          <div class="box bg-warning p-3">
            <i class="uil-shopping-cart"></i>
            <h3>5,154</h3>
            <p class="lead">Product sales</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box bg-success p-3">
            <i class="uil-feedback"></i>
            <h3>5,154</h3>
            <p class="lead">Transactions</p>
          </div>
        </div>
      </div>
    </section>   
      
    </div>
  );
};

export default Dashboard;
