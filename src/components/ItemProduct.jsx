import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopContext'
import { Link } from 'react-router-dom';

const ItemProduct = ({id,image,name , price }) => {
    const {currency} = useContext(ShopContext);
  return (
    
        <Link className='text-gray-400 cursor-pointer ' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-105 transition ease-in-out' src={image[0]} alt='item'/>
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>

    )
}

export default ItemProduct;