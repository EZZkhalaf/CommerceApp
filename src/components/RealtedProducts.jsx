// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../Context/shopContext'

// const RealtedProducts = ({category , subCategory}) => {
//     const {products} = useContext(ShopContext);
//     const [realted , setRelated] = useState([]);

//     useEffect(()=>{
//         if(products.length > 0 ){
//             let pCopy = products.slice();

//             pCopy = pCopy.filter((item) => category === item.category);
//             pCopy = pCopy.filter((item) => subCategory === item.subCategory);
//             console.log(pCopy.slice(0,5));
//         }


//     },[products])

//   return (
//     <div>


//     </div>
//   )
// }

// export default RealtedProducts

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/shopContext';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products
        .filter((item) => item.category === category && item.subCategory === subCategory);
      setRelated(filteredProducts);
    }
  }, [products, category, subCategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 4, related.length - 4)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  if (related.length === 0) return null;

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-3'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>

    </div>
  );
  
};

export default RelatedProducts;

