import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashbord from "../layout/Dashboard/Dashbord";
import Main from "../layout/Main/Main";
import AddProduct from "../page/Dashboard/AddProduct";
import CartList from "../page/Main/cartlist/CartList";
import DashboardPage from "../page/Dashboard/DashboardPage";
import ManageProduct from "../page/Dashboard/ManageProduct";

import Home from "../page/Main/home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "cartlist",
        element: <CartList/>,
      },
      
      
    ],
  },

  {
    path: "/dasboard",
    element: <Dashbord/>,
    children: [
      {
        path: "/dasboard",
        element: <DashboardPage/>,
      },
      {
        path: "add-product",
        element: <AddProduct/>,
      },
      {
        path: "manage-product",
        element: <ManageProduct/>,
      },
  
      
    ],
  },
]);

export default router;