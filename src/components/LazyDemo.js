import React, { useState } from 'react'

const LazyDemo = () => {

    let [name,setName] = useState({});
    async function fetchData(){

        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await res.json();

        //setName(data.title);
    }
    
    fetchData();


    
  return (
    <div>
        <p>Lazy Demo</p>

        <p>{name.title.no}</p>

    </div>
  )
}

export default LazyDemo;