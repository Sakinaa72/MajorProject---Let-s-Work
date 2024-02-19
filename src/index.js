import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from "./App";
import RootLayout from "./RootLayout";
import Blog from "./pages/Blog/Blog";
import Notification from "./pages/notification/Notification";
import Network from "./pages/network/Network";
import AboutUs from "./pages/AboutUs/AboutUs"
import Profile from "./pages/profile/Profile";
import Jobs from "./pages/jobs/Jobs";
import NavBar from "./components/navbar/NavBar";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/notification",
    element: <Notification />
  },
  {
    path: "/network",
    element: <Network />
  },
  {
    path: "/Blog",
    element: <Blog />
  },
  {
    path: "/AboutUs",
    element: <AboutUs />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);
