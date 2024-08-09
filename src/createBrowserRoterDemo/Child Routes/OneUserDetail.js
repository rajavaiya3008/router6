import React from 'react'
import { useLocation, useOutletContext, useParams,useSearchParams ,useMatches} from 'react-router-dom'
import ProductDetail from './ProductDetail';

const OneUserDetail = () => {

    let location = useLocation();
    console.log(location,'location is here');

    let {id} = useParams();
    console.log(id,'user id is here');

    let {detail,loading} = useOutletContext();
    console.log(detail,'detail is here');
    console.log(loading,'loading is here');

    let [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams,'searchParams is here');
    console.log(searchParams.get('userName'));
    // setSearchParams({userName:'hello',pass:'1234'},false);
    // console.log(searchParams.get('pass'));

    let matches = useMatches();
    console.log(matches,'matches is here');






    let data = location.state;
    
    function handleClick(){
       setSearchParams({userName:'hello',pass:'1234'});
   }


  return (
    <div className='border-2 border-green-600'>
        <p>User Id:{data.id}</p>
        <div className='flex flex-wrap'>
            {
                data.products.map((product) => <ProductDetail product={product} key={product.id}></ProductDetail>)
            }
        </div>
        
        <p>Total Products:{data.totalProducts}</p>
        <p>Total Quantity:{data.totalQuantity}</p>
        <p>Total Price:{data.total}</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default OneUserDetail;