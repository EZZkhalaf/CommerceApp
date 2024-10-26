// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../Context/shopContext';
// import Title from '../components/Title';
// import { FaTrash } from 'react-icons/fa';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, currency, cart, removeFromCart ,updateCartData} = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const temp = [];
//     for (const itemId in cart) {
//       for (const size in cart[itemId]) {
//         if (cart[itemId][size] > 0) {
//           temp.push({
//             _id: itemId,
//             size: size,
//             quantity: cart[itemId][size],
//           });
//         }
//       }
//     }
//     setCartData(temp);
//   }, [cart]);

//   // Handle item removal from cart
//   const handleRemove = (item) => {
//     removeFromCart(item._id, item.size);
//   };

//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={"YOUR"} text2={'Cart'} />
//       </div>
//       <div>
//         {cartData.length > 0 ? (
//           cartData.map((item, index) => {
//             const productData = products.find((product) => product._id === item._id);

//             return (
//               <div 
//                 key={index}
//                 className='py-4 border-t border-b text-gray-600 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr_0.5fr] items-center gap-4 transition duration-300 hover:bg-gray-100'
//               >
//                 <div className='flex items-center gap-4'>
//                   <img className='w-16 sm:w-24 h-auto rounded-lg shadow-sm' src={productData?.image} alt={productData?.name} />
//                   <div className='flex flex-col justify-start'>
//                     <p className='text-sm sm:text-lg font-semibold text-gray-800'>
//                       {productData?.name}
//                     </p>
//                     <p className='text-xs text-gray-500'>Qty: {item.quantity}</p>
//                     <p className='px-2 sm:px-3 sm:py-1 mt-2 bg-gray-200 rounded text-xs text-gray-700'>{item.size}</p>
//                   </div>
//                 </div>
//                 <p className='text-base font-bold text-green-600'>
//                   {currency}{productData?.price.toFixed(2)}
//                 </p>
//                 <input
//                 onChange={(e) => e.target.value ==='' || e.target.value === '0' ? null : updateCartData(item._id , item.size , Number(e.target.value))}
//                   className='border border-gray-300 rounded-lg shadow-sm max-w-[120px] sm:max-w-[200px] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
//                   type='number'
//                   min={1}
//                   defaultValue={item.quantity}
//                 />



//                 <button 
//                   onClick={() => updateCartData(item._id , item.size , 0)} 
//                   className='text-red-500 hover:text-red-700 flex-shrink-0'
//                   aria-label='Remove item'
//                 >
//                   <FaTrash size={20} />
//                 </button>


//               </div>
//             );
//           })
//         ) : (
//           <div className="flex items-center justify-center h-40 text-gray-500">
//             <p className='text-lg font-semibold'>Your cart is currently empty.</p>
//           </div>
//         )}
//       </div>
//       <CartTotal />
//     </div>
//   );
// };

// export default Cart;



import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/shopContext';
import Title from '../components/Title';
import { FaTrash } from 'react-icons/fa';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cart, removeFromCart, updateCartData ,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const itemId in cart) {
      for (const size in cart[itemId]) {
        if (cart[itemId][size] > 0) {
          temp.push({
            _id: itemId,
            size: size,
            quantity: cart[itemId][size],
          });
        }
      }
    }
    setCartData(temp);
  }, [cart]);

  // Handle item removal from cart
  const handleRemove = (item) => {
    removeFromCart(item._id, item.size);
  };

  return (
    <div className='border-t pt-14 bg-white shadow-md'>
      <div className='text-2xl mb-6 text-center font-bold'>
        <Title text1={"YOUR"} text2={'Cart'} />
      </div>
      <div className='space-y-4'>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div 
                key={index}
                className='py-4 border-t border-b text-gray-600 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr_0.5fr] items-center gap-4 transition duration-300 hover:bg-gray-100'
              >
                <div className='flex items-center gap-4'>
                  <img className='w-16 sm:w-24 h-auto rounded-lg shadow-sm' src={productData?.image} alt={productData?.name} />
                  <div className='flex flex-col justify-start'>
                    <p className='text-sm sm:text-lg font-semibold text-gray-800'>
                      {productData?.name}
                    </p>
                    <p className='text-xs text-gray-500'>Qty: {item.quantity}</p>
                    <p className='px-2 sm:px-3 sm:py-1 mt-2 bg-gray-200 rounded text-xs text-gray-700'>{item.size}</p>
                  </div>
                </div>
                <p className='text-base font-bold text-green-600'>
                  {currency}{productData?.price.toFixed(2)}
                </p>
                <input
                  onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateCartData(item._id, item.size, Number(e.target.value))}
                  className='border border-gray-300 rounded-lg shadow-sm max-w-[120px] sm:max-w-[200px] px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                />
                <button 
                  onClick={() => updateCartData(item._id, item.size, 0)} 
                  className='text-red-500 hover:text-red-700 flex-shrink-0'
                  aria-label='Remove item'
                >
                  <FaTrash size={20} />
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-40 text-gray-500">
            <p className='text-lg font-semibold'>Your cart is currently empty.</p>
          </div>
        )}
      </div>
      <div className="flex justify-end my-20">
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button 
              onClick={() => navigate('/placeOrder')}
              className='bg-black text-white text-sm my-8 px-8 py-3 ' >
                Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
