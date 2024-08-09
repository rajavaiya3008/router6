import React from 'react'
import { useNavigate } from 'react-router-dom';
import LazyDemo from './LazyDemo';

const ErrorBoundaryPage = ({error, resetErrorBoundary,children}) => {

    let navigate = useNavigate();

    const movetoHome = () => {
        navigate('/');
    }


    if(error){
        console.log(error,'error is here');
        console.log(resetErrorBoundary,'resetErrorBoundary')
        return (
            <div>
                <p>Something Went Wrong</p>
        
                <button onClick={resetErrorBoundary}>Home</button>
            </div>
          )
    }else{
        return (
            <>
                <LazyDemo></LazyDemo>
            </>
        )
    }
//   return (
//     <div>
//         <p>Something Went Wrong</p>

//         <button onClick={resetErrorBoundary}>Home</button>
//     </div>
//   )
}

export default ErrorBoundaryPage;