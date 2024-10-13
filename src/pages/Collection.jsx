import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/shopContext';
import { IoIosArrowDropdown } from "react-icons/io";

import Title from '../components/Title';
import ItemProduct from '../components/itemProduct';

const Collection = () => {
  const { products , search , showSearch} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggles categories and subcategories
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  // Filtering function based on category and subcategory
  const filterProducts = () => {
    let pCopy = [...products];

    if(search && showSearch){
      pCopy = pCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    
    if (category.length > 0) {
      pCopy = pCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      pCopy = pCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilteredProducts(pCopy);
  };

  // Sorting logic
  const sortFunction = () => {
    let filterCopy = [...filteredProducts];
    if (sortType === 'low-high') {
      filterCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      filterCopy.sort((a, b) => b.price - a.price);
    } else {
      filterProducts();  // Default relevant sorting falls back to filtered products
    }
    setFilteredProducts(filterCopy);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    filterProducts();
  }, [category, subCategory , search , showSearch]);

  useEffect(() => {
    sortFunction();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}
      <div className='min-w-60'>
        <div className='flex items-center'>
          <p className='my-1 text-xl flex items-center cursor-pointer'>FILTERS</p>
          <div className={`ml-2 cursor-pointer h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} onClick={() => setShowFilters(!showFilters)}>
            <IoIosArrowDropdown />
          </div>
        </div>

        {/* Categories */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Men' onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Woman' onChange={toggleCategory} /> Woman
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Kids' onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Sub-Categories */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Topwear' onChange={toggleSubCategory} /> Top Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Bottomwear' onChange={toggleSubCategory} /> Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Winter' onChange={toggleSubCategory} /> Winter
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex justify-center text-base sm:text-3xl mb-4'>
          <Title text1="ALL" text2="Collections" />

          {/* Sorting Option */}
          <select 
            className="block w-full md:w-56 p-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 transition duration-200 text-gray-700 text-sm px-2 ml-4"
            onChange={e => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Displaying Products */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6`}>
          {filteredProducts.map((item, index) => (
            <ItemProduct key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
