import React, { useCallback, useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/shopContext';

const PlaceOrder = () => {

  const [payment , setPayment] = useState('Cash');
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
  
        {/* Title Section */}
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="Delivery" text2="Info" />
        </div>
  
        {/* Personal Info Inputs */}
        <div className="flex gap-4">
          <input
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>
  
        <input
          className="border border-gray-500 rounded py-1.5 px-3.5 w-full mt-3"
          placeholder="Email"
        />
  
        <div className="flex gap-4 mt-3">
          <input
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
  
        <div className="flex gap-4 mt-3">
          <input
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
            placeholder="ZIP Code"
          />
          <input
            className="border border-gray-500 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
  
        <input
          className="border border-gray-500 rounded py-1.5 px-3.5 w-full mt-3"
          placeholder="Phone"
        />
  
      </div>
    {/* the right side  */}
      <div className='mt-8'>
          <div className='mt-8 min-w-80'>
              <CartTotal />
          </div>


        {/* payment method section */}

          <div className='mt-12 '>
            <Title text1={'Payment'} text2={'Method'}/>
            <div className='flex gap-3 flex-col lg:flex-row '>
                <div onClick={()=>setPayment('stripe')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer `}>
                    <p className={`min-w-3.5 h-2.5 border rounded-full ${payment === 'stripe' ? 'bg-green-500' : ''}`}></p>
                    <img className='h-5 mx-4 ' src={assets.stripe_logo} alt=''/>
                </div>
                <div onClick={()=>setPayment('razor')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer `}>
                    <p className={`min-w-3.5 h-2.5 border rounded-full ${payment === 'razor' ? 'bg-green-500' : ''}`}></p>
                    <img className='h-5 mx-4 ' src={assets.razorpay_logo} alt=''/>
                </div>
                <div onClick={()=>setPayment('cash')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer `}>
                    <p className={`min-w-3.5 h-2.5 border rounded-full ${payment === 'cash' ? 'bg-green-500' : ''}`}></p>
                    <p className='text-gray-600 text-sm font-medium mx-4'>Cash on delivery</p>
                </div>
            </div>
            <div className='w-full text-end mt-8 '>
              <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-6 text-sm'>Place Order</button>

            </div>
          </div>
      </div>

    </div>
  );
  
}

export default PlaceOrder