import React from "react";
import ApiService from './methods'

export const ProductService =(endPoint : string):any=>
    new Promise(async(resolve,reject)=>{
        ApiService.get(endPoint)
        .then(data=>{
            console.log("PSERVICE", data)
            resolve(data);
        })
        .catch(error =>{
            console.log("PErR", error)

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