import { createContext } from "react";
import Product from "../pages/Product";
import { products } from "../assets/assets";



export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    const currency = '$';
    const deleviry_fee = 10;

    const value ={
        products , currency,deleviry_fee
    }

    return (
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;