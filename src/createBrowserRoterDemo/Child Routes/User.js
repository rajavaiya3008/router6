import React from 'react'
import { useOutletContext } from 'react-router-dom'

const User = () => {

    let {detail,loading} = useOutletContext();
    console.log(detail,'detail is here');
    console.log(loading,'loading is here');

  return (
    <div>User</div>
  )
}

export default User