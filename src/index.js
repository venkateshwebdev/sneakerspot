import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './containers/Home/Home';
import Shop from './containers/Home/Shop';
import Cart from './containers/Home/Cart';
import Login from './containers/Home/Login';
import Product from './containers/Home/ProductPage';
import Account from './containers/Home/Account';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"shop",
        element:<Shop/>
      },
      {
        path:"cart",
        element:<Cart />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"product/:id",
        element:<Product />
      },
      {
        path:"account",
        element:<Account />
      }
    ]
  }
])
root.render(
    <RouterProvider router={router}>
    </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

