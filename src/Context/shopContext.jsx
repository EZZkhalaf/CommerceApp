import { createContext, useState } from "react";
import Product from "../pages/Product";
import { products } from "../assets/assets";
import { useSearchParams } from "react-router-dom";



export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = '$';
    const deleviry_fee = 10;
    const [search , setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value ={
        products , currency , deleviry_fee , search , showSearch , setSearch , setShowSearch 
    }

    return (
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;