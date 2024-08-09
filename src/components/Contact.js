import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Contact = ({login,setLogin}) => {

    let navigate = useNavigate();
    // let [login,setLogin] = useState(false);

    const moveAbout = () => {
        if(login){
            navigate('/about')
        }else{
            navigate('/login')
        }
    }



  return (
    <div className='w-[30%] mx-auto mt-[16%] rounded-md'>
        
        <div className='flex flex-col h-[400px] gap-2 p-5 bg-slate-300 rounded-lg'>

            <h1 className='text-center text-3xl'>Contact Us</h1>
            <div className='flex flex-col gap-2'>
                <p>Name: John Doe</p>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Contact: 9786523453</p>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Email: john431@gmil.com</p>
            </div>

            <button onClick={moveAbout} className='rounded-md bg-slate-500 mt-2 h-9 text-white'>About</button>



        </div>
        
        {/* <button onClick={moveAbout}>About</button> */}
    </div>
  )
}
