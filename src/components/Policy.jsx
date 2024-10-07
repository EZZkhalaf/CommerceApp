import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className=' flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2 '>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' about=''/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-600'>explained later </p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' about=''/>
            <p className='font-semibold'>Best quality </p>
            <p className='text-gray-600'>explained later </p>
        </div>

        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5 ' about=''/>
            <p className='font-semibold'>Customer Support</p>
            <p className='text-gray-600'>explained later </p>
        </div>
    </div>
  )
}

export default Policy