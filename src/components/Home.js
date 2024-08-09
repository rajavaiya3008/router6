import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Home = () => {

    const [searchParams,setSearchParams] = useSearchParams();

    let id = searchParams.get('id');

    console.log(id,'id');





  return (
    <div className='flex justify-center items-center h-screen bg-slate-400 text-2xl text-yellow-50'>Home</div>
  )
}
