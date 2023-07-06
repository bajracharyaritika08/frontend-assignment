import React from "react";
import ApiService from './methods'
import ProductContext from './../context/ProductContext';

export const ProductService =(endPoint : string):any=>
    new Promise(async(resolve,reject)=>{
        ApiService.get(endPoint)
        .then(data=>{
            resolve(data);
        })
        .catch(error =>{
            reject(error)
        })
})

export const ProductDetailService =(endPoint : string):any=>
    new Promise(async(resolve,reject)=>{
        ApiService.get(endPoint)
        .then(data=>{
            resolve(data);
        })
        .catch(error =>{
            reject(error)
        })
})