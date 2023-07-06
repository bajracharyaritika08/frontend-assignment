import React, { useEffect, useReducer } from 'react'
import { IProductResponse } from '../interface/Product'
import { ConstantValues } from '../constant/ContantValues'
import ProductDetail from './../pages/productDetail/ProductDetail';
const ProductContext = React.createContext({})
const initalState={
  productList:[],
}
const reducer=(state:any, action:any)=>{
  switch(action.type){
    case ConstantValues.setProductData:
      console.log("Product List",action.payload.productlist)
    return{
      ...state,
      productList:action.payload.productlist,
    }
    case ConstantValues.getProductSearch:
      return{
        ...state,
        
      }
  }
}
const ProductReducer =()=>{
  const [state, dispatch] = useReducer(reducer, initalState);
    return{state, dispatch}
}
export {ProductReducer,ProductContext}