import React, { useEffect, useState } from 'react';
import { data } from '../data';
import { Navigate } from 'react-router-dom';



export const About = ({login,setLogin}) => {

    let [imgData,setImgData] = useState(data);

    console.log(login,'login')

    let [index,setIndex] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            if(index+1 === 5){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
        },5000);

        return () => {
            clearTimeout(timer);
        }
    },[index])

    const nextImg = () => {
        if(index+1 === 5){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
        
    }

    const prevImg = () => {
        if(index === 0){
            setIndex(imgData.length-1);
        }else{
            setIndex(index-1);
        }
    }

  return (
    <>
        {login?
        ( 
        <div className='flex justify-center items-center mt-8 h-[800px]'>
            <button onClick={prevImg} className=' bg-slate-500 mr-4 rounded-full w-10 h-10 text-white text-2xl text-center'>-</button>
            <img src={imgData[index]} className='h-[330px] w-[350px]'></img>
            <button onClick={nextImg} className=' bg-slate-500 ml-4 rounded-full w-10 h-10 text-white text-2xl text-center'>+</button>
        </div>
     ):
     (<Navigate to='/login'></Navigate>)}
    
    </>
    // <div className='flex justify-center items-center mt-8 h-[800px]'>
    //     <button onClick={prevImg} className=' bg-slate-500 mr-4 rounded-full w-10 h-10 text-white text-2xl text-center'>-</button>
    //     <img src={imgData[index]} className='h-[330px] w-[350px]'></img>
    //     <button onClick={nextImg} className=' bg-slate-500 ml-4 rounded-full w-10 h-10 text-white text-2xl text-center'>+</button>
    // </div>
  )
}
