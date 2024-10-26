// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/shopContext'
// import Title from './Title';

// const CartTotal = () => {

//     const { currency , delivery_fee , CartAmount} =  useContext(ShopContext);


//   return (
//     <div className='w-full'>
//         <div className='text-2xl'>
//             <Title text1={'Total'} text2={'Amount'}/> 
//         </div>

//         <div className='felx flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-center'>
//                 <p>Sub Total : </p>
//                 <p>{currency}{CartAmount()}</p>
//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <p>delivery fee :</p>
//                 <p>{currency}{delivery_fee}</p>

//             </div>
//             <div className='flex justify-between'>
//                 <p>Total: </p>
//                 <p>{currency}{CartAmount() === 0 ? 0 : CartAmount() + delivery_fee}</p>
//             </div>  
//         </div>

//     </div>
//   )
// }

// export default CartTotal


import React, { useContext } from 'react';
import { ShopContext } from '../Context/shopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, deleviry_fee, CartAmount } = useContext(ShopContext);

    
    // Calculate the total amount including delivery fee
    const totalAmount = CartAmount() + deleviry_fee;

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'Total'} text2={'Amount'} /> 
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Sub Total:</p>
                    <p>{currency}{CartAmount()}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Delivery Fee:</p>
                    <p>{currency}{deleviry_fee}</p>
                </div>
                <div className='flex justify-between font-bold'>
                    <p>Total:</p>
                    <p>{currency}{CartAmount() === 0 ? 0 : CartAmount() + deleviry_fee}</p>
                </div>  
            </div>
        </div>
    );
};

export default CartTotal;
