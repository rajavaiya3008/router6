import React, { useState ,useEffect} from 'react'
import { Outlet } from 'react-router-dom'

const Wrapper = () => {

    let [user,setUser] = useState({})

    
    let [detail,setDetail] = useState(null);
    let [loading,setLoading] = useState(true);

    useEffect(() => {
         fetchData();
        
        // setLoading(false);
        console.log(detail,'detail is here')
    },[]);

    async function fetchData(){
        setLoading(true);
        let res = await fetch('https://dummyjson.com/carts');
        let data = await res.json();
        console.log(data,'data is here');
        
        setDetail(data.carts);
        setLoading(false);
        
        
        
    }

  return (
    <div>
        <p>Wrapper</p>
        <p>{user.name}</p>
        <Outlet context={{detail,loading}}></Outlet>
    </div>
  )
}

export default Wrapper