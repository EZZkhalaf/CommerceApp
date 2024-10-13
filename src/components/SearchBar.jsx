
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/shopContext';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [isClosing, setIsClosing] = useState(false);
    const location = useLocation();
    const [visible , setVisible] = useState(false);

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[location]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowSearch(false);
            setIsClosing(false); // Reset closing state
        }, 300); // Match this duration with your CSS animation duration
    };

    return showSearch && visible ? (
        <div className={`mt-16 p-4 shadow-lg bg-white border border-gray-300 rounded-md ${isClosing ? 'slide-up' : 'slide-down'}`}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center border border-gray-300 rounded-md bg-gray-100 px-3 py-2 flex-grow mr-2'>
                    <input 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className='w-full outline-none bg-transparent text-sm text-gray-700 placeholder-gray-500'
                        type='text' 
                        placeholder='Search Here'
                    />
                    <CiSearch className='w-5 h-5 text-gray-600 cursor-pointer' />
                </div>
                <IoMdClose 
                    className='w-5 h-5 text-red-500 cursor-pointer hover:text-red-400' 
                    onClick={handleClose} 
                />
            </div>
        </div>
    ) : null;
}

export default SearchBar;
