import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetailService, ProductService } from '../../api/ProductService';
import { useQuery } from 'react-query';
import '../../assets/styles/productPage/ProductPage.css'
import Layout from '../../components/layouts/Layout';
const ProductDetail = () => {
  const[pDetail, setPDetail]:any= useState({})
  console.log("DETAILS CLICKED", pDetail)
  const {id} = useParams();
  const {isLoading, data} = useQuery(`products/${id}`,()=>{
    
    try {
      return ProductDetailService(`products/${id}`).then((response:any)=>{
        setPDetail(response);
      })
    } catch (error) {
      console.error(error);
    }
  })
  if(isLoading){
    return <h2>Data Loading..</h2>
  }
  return (
    <Layout>
      <div className='main_detail_container'>
        <div className="left_container">
        <img src={pDetail.image} alt="product image" className='image_product' />
        </div>
        <div className="right_container">
        <h2>{pDetail.title}</h2>
        <h4>{pDetail.category}</h4>
        <p> $ {pDetail.price}</p>
        <p> $ {pDetail.description}</p>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
