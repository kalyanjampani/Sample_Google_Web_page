import React, { useState,useEffect } from 'react'
import ProductCard from './ProductCard';


 const Home = () => {

    const [productsData,dataFunc] = useState([]);

   useEffect(()=>{
    return async ()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dataFunc(data);
    }
   },[])

   console.log(productsData)

  return (
    <div>
        <h1>Displayed Products Data Is Available in store</h1>
        <ul className='unordered'>
            {productsData.map(eachItem=><ProductCard  key = {eachItem.id} prodData = {eachItem}/>)}
        </ul>
    </div>
  )
}

export default Home