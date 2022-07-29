import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import AddOrder from "./components/AddOrder";

function App() {
    return (
    <div>
          
          <BrowserRouter>
          <Header>
          </Header>
          <Routes>
           
            <Route element={<Login />} path="login" />
            <Route element={<Home />} path="homepage" />
            <Route element={<Signup />} path="Signup" />
            <Route element={<Dashboard />} path="Dashboard" />
            <Route element={<AddProduct />} path="Addproduct" />
            <Route element={<AddOrder />} path="Addorder" />
          </Routes>
          </BrowserRouter>
     
    </div>
  );
}

export default App;