import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UseRoutes from './UseRoutes'

const WraperApp = () => {
  return (
    <div>
        <BrowserRouter>
        
            <UseRoutes></UseRoutes>
        
        </BrowserRouter>
    </div>
  )
}

export default WraperApp