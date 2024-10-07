import React from 'react'

const NewsLetterBox = () => {

     const submitHandle =(e) =>{
        e.preventDefault();
     }
  return (
    <div className='text-center mt-4 border'>
        <p className='text-2xl font-medium text-gray-400 mt-2'>20% Offer!!</p>
        <p className='text-gray-600'>explained later</p>
        <form onSubmit={submitHandle} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-slate-400'>
            <input className='w-full sm:flex-1 outline-none bg-slate-400 placeholder:text-white' type='email' placeholder='Enter Your Email'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox