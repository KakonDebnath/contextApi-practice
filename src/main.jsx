import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Common from './components/Layout/Main';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('./tShirts.json')
      }
      ,
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
