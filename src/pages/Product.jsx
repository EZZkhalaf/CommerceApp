import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/shopContext';
import { assets } from '../assets/assets';
import RealtedProducts from '../components/RealtedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products , currency  , addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [itemSize , setItemSize] = useState('');

  const fetchProduct = async () => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(Array.isArray(product.image) ? product.image[0] : '');
    }
  };

  useEffect(() => {
    if (products.length) fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          {/* displaying the images of the product */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {productData.image.map((item, index) => (
              <img 
                onClick={()=>setImage(item)}
                src={item} 
                key={index} 
                className='w-[30%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' 
              />
            ))}
          </div>


            {/* product info */}
            <div className='flex-1 ml-7 '>
            <h1 className="bg-gradient-to-r from-gray-500 to-white text-black px-4 py-2 font-bold text-2xl">
              {productData.name}
            </h1>

              {/* in the bottom displaying the rating from the users to this product .... will work on the functionallity later  */}
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt='' className='w-3 5'/>
                <img src={assets.star_icon} alt='' className='w-3 5'/>
                <img src={assets.star_icon} alt='' className='w-3 5'/>
                <img src={assets.star_icon} alt='' className='w-3 5'/>
                <img src={assets.star_dull_icon} alt='' className='w-3 5'/>
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-3 text-3xl font-medium'>Price: {currency}{productData.price}</p>
              <p className='mt-5 text-gray-700 md:w-3/4 font-light'>{productData.description}</p>
              <div className='flex flex-col gap-2 my-8 '>

                {/* displaying the sizes foreach product (the available sizes) */}
                  <p>Select Size:</p>
                  <div className="flex gap-2 w-[40%]">
                    {productData.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => 
                          setItemSize((prevSize) => (prevSize === size ? null : size))
                        }
                        className={`border py-3 px-4 w-full transition-colors duration-200 
                                    ${itemSize === size 
                                      ? 'border-black bg-slate-100' 
                                      : 'bg-gray-500 hover:bg-gray-400'
                                    }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>






                  <button  onClick={()=> addToCart(productData._id,itemSize)} 
                  className='bg-black text-white px-8 py-4 text-sm active:bg-gray-500 w-[30%] mt-5 '>
                    
                    Add To Cart
                    
                    </button>
                  <div className='flex items-center justify-center'>

                  <hr className='mt-8 sm:w-4/5 bg-black'/>

                  </div>
                  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
                    <p>100% Good Quality</p>
                    <p>Cash On Delivery for this product </p>
                    <p>Easy Return in 7 Days Period</p>
                  </div>
              </div>
            </div>

        </div>
      </div>

            {/* Description and review section  */}
            <div className='mt-9 '>

                <div className='flex '>
                  <b className='border px-5 py-2 text-sm '>Description</b>
                  <p className='border px-5 py-2 text-sm '>Reviews (99)</p>
                </div>

                <div className='flex flex-col gap-2 border px-6 py-6 text-sm text-gray-700'>

                  <p>(this is a random description will be changed later ) Elevate
                     your everyday wardrobe with our Classic Cotton Crew Neck T-Shirt, 
                     a perfect blend of comfort and style. Made from 100% premium breathable cotton, 
                     this versatile tee offers a lightweight feel and a soft touch, making it ideal for 
                     casual wear or layering under jackets and shirts.</p>

                </div>
            </div>
            {/* realted products part  */}
            
            <RealtedProducts category={productData.category} subCategory={productData.subCategory} />


    </div>
  ) : (
    <div className='opacity-0'>Loading...</div>
  );
};

export default Product;
