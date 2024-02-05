import {ADD_TO_CART} from '../Constants'
import { Remove_TO_Cart } from '../Constants'
export const addToCart=(data)=>{
    console.warn("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart=(data)=>{
    return{
        type:Remove_TO_Cart,
        
    }
}