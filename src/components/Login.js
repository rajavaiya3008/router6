import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = ({setLogin,login}) => {

    let navigate = useNavigate();

    const makeLogin = () => {
        setLogin(true);
        navigate('/about');
    }


  return (
    <div className='w-[30%] mx-auto mt-[16%] rounded-md'>
        <form className='flex flex-col h-[400px] gap-2 p-5 bg-slate-300 rounded-lg'>
            <h1 className='text-center text-3xl'>Login</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className=''>Email</label>
                <input type='email' id='email' placeholder='Enter Email' required className='rounded-md h-9 p-2'></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' required className='rounded-md h-9 p-2'/>
            </div>

            <button onClick={makeLogin} className='rounded-md bg-slate-500 mt-2 h-9 text-white'>Login</button>

        </form>
        
        
    </div>
  )
}
