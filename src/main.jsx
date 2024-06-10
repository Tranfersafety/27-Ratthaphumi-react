import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AdminHome from "./components/adminHome.jsx";
import Nav from "./components/nav.jsx";
import Owner from "./components/owner.jsx";
import UserHome from "./components/userHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "userhome",
            element: <UserHome />,
          },
          {
            path: "adminhome",
            element: <AdminHome />,
          },
        ],
      },
      {
        path: "owner",
        element: <Owner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
