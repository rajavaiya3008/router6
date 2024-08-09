import React from 'react'
import { useSearchParams } from 'react-router-dom';

const ProductDetail = ({product}) => {

    let [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams,'searchParams is here');
    console.log(searchParams.get('pass'));

  return (
    <div className='border bg-slate-400 w-[400px]'>
        <p>Product Id:{product.id}</p>
        <p>Product Name:{product.title}</p>
        <p>Product Price:{product.price}</p>
        <p>Product Quantity:{product.quantity}</p>
        <p>Product Total Price:{product.total}</p>
    </div>
  )
}

export default ProductDetail