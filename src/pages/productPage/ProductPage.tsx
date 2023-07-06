import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layouts/Layout'
import { ProductService } from '../../api/ProductService'
import { IProductResponse } from '../../interface/Product'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';import { ProductContext } from '../../context/ProductContext'
import { ConstantValues } from '../../constant/ContantValues'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../../assets/styles/productPage/ProductPage.css'
import { useQuery } from 'react-query'
import { NavLink, json, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const ProductPage = () => {
  const {state, dispatch}:any= useContext(ProductContext);
  const productDetailPath = '/product/:id';
  const[pdata, setPdata]= useState([]);
  const navigate = useNavigate()
  const [inputData, setInputData] = useState([{}]);

  const handleInputChange = (event:any) => {
    setInputData(event.target.value);
    dispatch({
      type:ConstantValues.getProductSearch,
      payload:{
        userInput :inputData,
      }
    })
    console.log("INPUT DATA", inputData)

  };
  
  // const results = inputData.filter((items)=>{
  //   return (
  //     <>
  //     </>
  //   )
  // })
  const {isLoading, data} = useQuery('/products',()=>{
    console.log("DATAS", data)
    return ProductService('/products')
  })
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const CardOnClick=()=>{
    navigate('/allproducts')
  }
  
  // console.log("State", state)
  useEffect(()=>{
    console.log("RES")
    ProductService('/products').then((res:any)=>{
      dispatch({
        type : ConstantValues.setProductData,
        payload:{
          productlist: res,
        }
      })
      setPdata(res)
    })
  },[])
  if(isLoading){
    return <h2>Data Loading..</h2>
  }
  return (
    <Layout>
      <div className="heading_products">
        <div className='text_products'>Our Products</div>
        <div className="searchBar">
        {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleInputChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </div>
      </div>
      <div className="product_card_container">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          state?.productList?.map((items:IProductResponse)=>{
            const replacedDetail = productDetailPath.replace(':id', `${items.id}`)
            return(
              <>
              <Card sx={{ maxWidth: 345}} className='card_content_wrapper' key={items?.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={items?.image}
                  alt="product images"
                  className='image_card'
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {items?.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {items?.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    $ {items?.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {items.description.length>20? items.description.slice(0,50) + "..." + "see more": items.description}
                  </Typography>
                  <NavLink to={replacedDetail} key={items?.id}>Click Here for Detail</NavLink>
                  
                </CardContent>
              </CardActionArea>
            </Card>
              </>
            )
          })
        }
         </Grid>
    </Box>
      </div>
      {/* <div className="loadmore">
      <Button variant="outlined" onClick={CardOnClick} >View All Products</Button>
      </div> */}
      {/* {
        state?.productList?.map((items:IProductResponse)=>{
          const replacedDetail = productDetailPath.replace(':id', `${items.id}`)
          return (
          <>
          <NavLink to={replacedDetail} key={items?.id}>{items?.title}</NavLink>
          </>
          )
        })
      } */}
    </Layout>
  )
}
