import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import BigProviders from './providers/Bigproviders';
import Sorting from './components/Sorting/Sorting';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:category_id',
        element: <Cards></Cards>
      },
      {
        path: '/category/:category_id',
        element: <Sorting></Sorting>

      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-undef
  <React.StrictMode>
    <BigProviders>
      <RouterProvider router={router} />
    </BigProviders>

  </React.StrictMode>,
)
