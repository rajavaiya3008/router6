import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const ParentRoute = () => {

  let [user,setUser] = useState({});


  return (
    <div>
        <p>Parent Routes</p>
        <p>{user.name.no}</p>
        <Outlet></Outlet>
    </div>
  )
}

export default ParentRoute