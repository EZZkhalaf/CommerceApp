import { createContext, useEffect, useState } from "react";
import Product from "../pages/Product";
import { products } from "../assets/assets";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";



export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = '$';
    const deleviry_fee = 10;
    const [search , setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cart , setCart] = useState({});
    const navigate = useNavigate();


    const addToCart = async(itemId , size)=>{
        if(!size){
            toast.error('please select the size');
            return
        }


        let cartData = structuredClone(cart)
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1; //increasing the size for every item added 
            }else{
                cartData[itemId][size] =1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size]=1;
        }

        setCart(cartData);

    }

    useEffect(()=>{
        console.log(cart)
    },[cart])


    //imporved by chatgpt
    const cartCount = () => {
        return Object.values(cart) // Get the values (size objects) of the cart
            .flatMap(sizeObject => Object.values(sizeObject)) // Flatten the counts for each size
            .reduce((count, itemCount) => count + itemCount, 0); // Sum all item counts
    };
    

    const updateCartData = async(itemId , size , quantity)=>{
        let cartData = structuredClone(cart);
        cartData[itemId][size] = quantity;
        setCart(cartData);

    }

    // const CartAmount =  () =>{
    //     let total = 0;
    //     for(const items in cart ){
    //         let itemInfo = products.find((product)=>product._id === items);

    //         for(const item in cart[items]){
    //             try {
    //                 if(cart[items][item] > 0){
    //                     total += itemInfo.price * cart[items][item]
    //                 }
    //             } catch (error) {
                    
    //             }
    //         }
    //     }
    //     return total;
    // }
    
    //improved CartAmount function from gpt 
    const CartAmount = () => {
        let total = 0;
    
        // Iterate over each item in the cart
        for (const itemId in cart) {
            // Find the product information based on the item ID
            const itemInfo = products.find((product) => product._id === itemId);
    
            // Ensure itemInfo is found before trying to access its price
            if (itemInfo) {
                // Iterate over the sizes of the item in the cart
                for (const size in cart[itemId]) {
                    const quantity = cart[itemId][size];
    
                    // Ensure quantity is a positive number
                    if (quantity > 0) {
                        total += itemInfo.price * quantity;
                    }
                }
            }
        }
    
        return total;
    };
    

    const value ={
        products , currency , deleviry_fee , 
        search , showSearch , setSearch , setShowSearch ,
        cart , addToCart , cartCount ,updateCartData ,CartAmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;