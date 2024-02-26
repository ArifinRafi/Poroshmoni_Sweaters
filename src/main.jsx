import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Main from './Layout/Main.jsx';
import Machines from './pages/Machines.jsx';
import Products from './pages/Products.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Blogs from './pages/Blogs.jsx';
import OnlyProducts from './pages/OnlyProducts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
      {
        path:'/', element: <Home></Home>,
      },
      {
        path:'/about', element: <About></About>,
      },
      {
        path:'/services', element: <Machines></Machines>,
      },
      {
        path:'products', element:<Products></Products>
      },

      {
        path:'/singleProduct/:index', element:<OnlyProducts></OnlyProducts>
      },

      {
        path:'/blog/:index', element:<BlogPost></BlogPost>
      },
    {
      path:'/blogs', element:<Blogs></Blogs>
      },

      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
