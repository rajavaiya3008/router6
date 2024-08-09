import React, { useEffect, useState } from 'react'
import SingleDetail from './SingleDetail';
import { Link, Outlet, useOutletContext ,useMatches} from 'react-router-dom';

const Detail = () => {

    let {detail,loading} = useOutletContext();
    console.log(detail,'detail is here');
    console.log(loading,'loading is here');

    let matches = useMatches();
    console.log(matches,'matches is here');

    // let [detail,setDetail] = useState(null);
    // let [loading,setLoading] = useState(true);

    // useEffect(() => {
    //      fetchData();
        
    //     // setLoading(false);
    //     console.log(detail,'detail is here')
    // },[]);

    // async function fetchData(){
    //     setLoading(true);
    //     let res = await fetch('https://dummyjson.com/carts');
    //     let data = await res.json();
    //     console.log(data,'data is here');
        
    //     setDetail(data.carts);
    //     setLoading(false);
        
        
        
    // }

    let name = 'hello';


  return (
    <>
        {
            loading?<p>Loading...</p>:
            <div className='flex flex-wrap'>
                {
                    detail.map((detail) => <Link to={`/detail/${detail.id}?userName=${name}`} state={detail} key={detail.id}><SingleDetail detail={detail} key={detail.id}></SingleDetail></Link>)
                }
            </div>
        }

        <Outlet context={{detail,loading}}></Outlet>
    
    </>
    
    
  )
}

export default Detail