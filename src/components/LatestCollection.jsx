import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/shopContext'
import Title from './Title';
import ItemProduct from './itemProduct';

const LatestCollection = () => {
    const [latestProducts , setLatestProducts] = useState([]);
    const {products} = useContext(ShopContext);
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10 '>
        <div className='text-center py-8 text-2xl '>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem perspiciatis optio porro, aspernatur voluptates facilis sit corporis, cum illo quasi esse excepturi ipsa minima, fuga quam similique sint. Alias, nemo.
            </p>
        </div>

        {/* for displaying the newest items  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
            {
                latestProducts.map((item,index) =>(
                    <ItemProduct key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>


    </div>
  )
}

export default LatestCollection