import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import { ProductPage } from '../pages/productPage/ProductPage'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import ProductDetail from '../pages/productDetail/ProductDetail'

export const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
