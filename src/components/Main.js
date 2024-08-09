import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = ({children,login,setLogin}) => {
  return (
    <div>
        
        <Outlet></Outlet>
    </div>
    
  )
}
