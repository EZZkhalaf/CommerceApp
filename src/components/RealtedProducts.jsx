
// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../Context/shopContext';
// import Title from './Title';
// import Product from '../pages/Product';
// import ItemProduct from './itemProduct';

// const RelatedProducts = ({ category, subCategory }) => {
//   const { products } = useContext(ShopContext);
//   const [related, setRelated] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (products.length > 0) {
//       const filteredProducts = products
//         .filter((item) => item.category === category && item.subCategory === subCategory);
//       setRelated(filteredProducts);
//     }
//   }, [products, category, subCategory]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       Math.min(prevIndex + 4, related.length - 4)
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
//   };

//   if (related.length === 0) return null;

//   return (
//     <div className='my-24'>
//         <div className='text-center text-3xl py-3'>
//             <Title text1={'RELATED'} text2={'PRODUCTS'}/>
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
//                 {
//                   related.map((item,index)=>{
//                     <ItemProduct key={index} id = {item._id} name={item.name} image={item.image} price={item.price}/>
//                   })
//                 }
//             </div>
//         </div>

//     </div>
//   );
  
// };

// export default RelatedProducts;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/shopContext';
import Title from './Title';
import ItemProduct from './itemProduct';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(filteredProducts);
    }
  }, [products, category, subCategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, related.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  if (related.length === 0) return null;

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-3">
        <Title text1="RELATED" text2="PRODUCTS" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {related.map((item) => (
            <ItemProduct
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
