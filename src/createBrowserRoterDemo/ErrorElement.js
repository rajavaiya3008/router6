import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorElement = () => {

    let navigate = useNavigate();
    let error = useRouteError();
    console.log(error,'Error is here');


  return (
    <div>
        <p>Something Went Wrong {error.message} {error.status}</p>
        <button onClick={() => {navigate('/')}}>Refresh</button>
    </div>
  )
}

export default ErrorElement