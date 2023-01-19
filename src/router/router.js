import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashbord from "../layout/Dashboard/Dashbord";
import Main from "../layout/Main/Main";
import DashboardPage from "../page/Dashboard/DashboardPage";
import AddStudent from "../page/Main/addstudent/AddStudent";
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
        path: "addstudent",
        element: <AddStudent/>,
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
     
      
    ],
  },
]);

export default router;