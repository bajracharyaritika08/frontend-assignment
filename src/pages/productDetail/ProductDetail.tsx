import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetailService, ProductService } from '../../api/ProductService';
import { useQuery } from 'react-query';

const ProductDetail = () => {
  const {id} = useParams();
  console.log("ID", id)
  const {isLoading, data} = useQuery(`products/${id}`,()=>{
    console.log("DATAS detailss", data)
    try {
      return ProductDetailService(`products/${id}`).then((response:any)=>{
        console.log(".tth", response)
      })
    } catch (error) {
      console.error(error);
      
    }
  })
  if(isLoading){
    return <h2>Data Loading..</h2>
  }
  const fetchProductDetails = async () => {
   
  };
  fetchProductDetails();
  return (
    <div>

    </div>
  )
}

export default ProductDetail