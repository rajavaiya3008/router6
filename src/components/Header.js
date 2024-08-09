import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const Header = ({login,setLogin}) => {

  let navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className='flex gap-10 justify-center items-center text-yellow-100 bg-slate-600 py-2'>

          <li><Link to='/'>Home</Link></li>
          <li className={` ${!login ? 'hidden' : 'block' }`} ><Link to='/about'>About</Link></li>
          <li ><Link to='/contact'>Contact</Link></li>
          <li className={` ${login ? 'hidden' : 'block' }`}><Link to='/login'>Login</Link></li>
          <li className={` ${!login ? 'hidden' : 'block' }`} onClick={() => {setLogin(!login); navigate('/login')}}><Link to='/logout'>Logout</Link></li>

        </ul>
      </nav>
    </div>
  )
}
