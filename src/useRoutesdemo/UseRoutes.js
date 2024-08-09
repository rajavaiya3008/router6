import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from '../components/Home'
import ParentRoute from './ParentRoute'
import { Contact } from '../components/Contact'
import { Login } from '../components/Login'
import ErrorPage from './ErrorPage'



const UseRoutes = () => {

    let id =1;

  let element = useRoutes([
    {
        path:'/',
        element:<ParentRoute></ParentRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:`home`,
                element:<Home />,
                errorElement:<p>Error in home page</p>
            },
            {
                path:'login',
                element:<Login />
            }
        ]

    },
    {
        path:'contact',
        element:<Contact></Contact>
    },
    {
        path:'*',
        element:<p>Something Went Wrong</p>,
    }
  ])

  return element;
}

export default UseRoutes;