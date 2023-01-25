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
import ManageProduct from "../page/Dashboard/ManageProduct";

import Home from "../page/Main/home/Home";
import UpdateProduct from "../page/Dashboard/UpdateProduct";
import Registation from "../page/Main/auth/Registation";
import Login from "../page/Main/auth/Login";
import RequireAuth from "../component/RequireAuth";



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
        path: "login",
        element: <Login/>,
      },
      {
        path: "registation",
        element: <Registation/>,
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
        path: "add-product",
        element: <RequireAuth><AddProduct/></RequireAuth>,
      },
      {
        path: "manage-product",
        element: <ManageProduct/>,
      },

      {
        path: "update-product/:id",
        element: <UpdateProduct/>,
      },
  
      
    ],
  },
]);

export default router;