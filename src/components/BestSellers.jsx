import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/shopContext'
import Title from './Title';
import ItemProduct from './itemProduct';

const BestSellers = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);  
        setBestSeller(bestProduct.slice(0, 5));
    }, []);
    

    return (
        <div className='my-10 '>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem temporibus repellendus veritatis quia officia quas ratione nisi nulla quam fuga ad, numquam quis qui impedit dolorem debitis nesciunt labore ex?
                </p>
            </div>
            {bestSeller.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>
                    {bestSeller.map((item, index) => (
                        <ItemProduct key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No best sellers available.</p>
            )}
        </div>
    )
    
}

export default BestSellers;
