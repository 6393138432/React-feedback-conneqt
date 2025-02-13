import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Trainingfeedback from "./pages/Trainingfeedback";
import Trainingdetailpage from "./component/traingform/Trainingdetailpage";
import ForgotPassword from "./component/form/ForgotPassword";
import Login from "./component/form/Login";
import Createnewaccount from "./component/form/Createnewaccount";
import Layout from "./component/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout  />, // Wrap everything inside Layout
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "feature",
        element: <Feature />,
      },
      {
        path: "training-feed-back",
        element: <Trainingfeedback />,
      },
      {
        path: "training-detail-page",
        element: <Trainingdetailpage />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "reset-password",
        element: <ForgotPassword />,
      },
      {
        path: "create-new-account",
        element: <Createnewaccount />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
