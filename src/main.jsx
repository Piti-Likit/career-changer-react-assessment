import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import HomeUser from './HomeUser'
import HomeAdmin from './HomeAdmin'
import Owner from './Owner'
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/HomeUser",
    element: <HomeUser />,
  },

  {
    path: "/HomeAdmin",
    element: <HomeAdmin />,
  },

  {
    path: "/Owner",
    element: <Owner />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
