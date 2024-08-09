import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, RouterProvider, createBrowserRouter, useLocation, useNavigate} from 'react-router-dom';
import UseRoutes from './useRoutesdemo/UseRoutes';
import FilterDemo from './demo/FilterDemo';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryPage from './components/ErrorBoundaryPage';
import WraperApp from './useRoutesdemo/WraperApp';
import Form from './Form Validation/Form';
import Wrapper from './createBrowserRoterDemo/Wrapper';
import ErrorElement from './createBrowserRoterDemo/ErrorElement';
import Detail from './createBrowserRoterDemo/Child Routes/Detail';
import OneUserDetail from './createBrowserRoterDemo/Child Routes/OneUserDetail';
import User from './createBrowserRoterDemo/Child Routes/User';
import Pagination from './pagination/Pagination';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Wrapper></Wrapper>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/detail',
        element:<Detail></Detail>,
        // children:[
        //   {
        //     path:'user',
        //     element:<User></User>
        //   }
        // ]
      },
      {
        path:'/detail/:id',
        element:<OneUserDetail></OneUserDetail>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <RouterProvider router={router}></RouterProvider>
  
    // <BrowserRouter basename='/myapp'>
    //   <ErrorBoundary FallbackComponent={ErrorBoundaryPage} onReset={() => {window.location.href = '/'}}>
    //     <App></App>
    //   </ErrorBoundary> 
    // </BrowserRouter>

    <Form />
  
);



