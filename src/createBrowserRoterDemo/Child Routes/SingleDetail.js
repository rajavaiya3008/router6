import React from 'react'
import { useMatches, useSearchParams } from 'react-router-dom'

const SingleDetail = ({detail}) => {

    // let [searchParams,setSearchParams] = useSearchParams();
    // console.log(searchParams,'searchParams is here');

    let matches = useMatches();
    console.log(matches,'matches is here');


  return (
    <div className='border bg-slate-400 w-[170px]'>
        <p>User Id:{detail.id}</p>
        <p>Total Products:{detail.totalProducts}</p>
        <p>Total Quantity:{detail.totalQuantity}</p>
        <p>Total Price:{detail.total}</p>
    </div>
  )
}

export default SingleDetail