import React, { useEffect } from 'react'
import Layout from '../../components/layouts/Layout'
import { useQuery } from 'react-query'
import axios from 'axios'
import { ProductService } from '../../api/ProductService'
import { IProductResponse } from '../../interface/Product'
import { NavLink } from 'react-router-dom'
export const ProductPage = () => {
  const productDetailPath = '/productdetail/:id';
  const {isLoading, data} = useQuery('/products',()=>{
    console.log("DATAS", data)
    return ProductService('/products')
  })
  if(isLoading){
    return <h2>Data Loading..</h2>
  }
  return (
    <Layout>
      {
        data?.map((items:IProductResponse)=>{
          const replacedDetail = productDetailPath.replace(':id', `${items.id}`)
          return <>
          
          <NavLink to={replacedDetail} key={items?.id}>{items?.title}</NavLink>
          {/* <div key={items?.id}>{items?.title}</div> */}
          
          </>
        })
      }
    </Layout>
  )
}
