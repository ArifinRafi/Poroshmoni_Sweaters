import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Main from './Layout/Main.jsx';
import Machines from './pages/Machines.jsx';
import Products from './pages/Products.jsx';
import { elements } from 'chart.js';
import singleProduct from './pages/singleProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
      {
        path:'/', element: <Home></Home>,
      },
      {
        path:'/about', element: <AboutUs></AboutUs>,
      },
      {
        path:'/services', element: <Machines></Machines>,
      },
      {
        path:'products', element:<Products></Products>
      },

      {
        path:'product', element:<singleProduct></singleProduct>
      },
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
