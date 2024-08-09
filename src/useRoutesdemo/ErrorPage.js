import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {

    let error = useRouteError();
    console.log(error,'error');

  return (
    <div>
        <p>Something Went wrong</p>
        <p>{error.message} || {error.statusText}</p>
    </div>
  )
}

export default ErrorPage;