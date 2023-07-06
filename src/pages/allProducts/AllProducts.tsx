// import React from 'react'
// import Layout from '../../components/layouts/Layout'
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
// import { Card } from 'react-bootstrap';
// import { IProductResponse } from '../../interface/Product';
// const Item = styled(Paper)(({ theme }) => ({
    
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  
// function FormRow() {
//     return (
//       <React.Fragment>
//         <Grid item xs={4}>
//           <Item>
//           {
//           state?.productList?.slice(0,4).map((items:IProductResponse)=>{
//             const replacedDetail = productDetailPath.replace(':id', `${items.id}`)
//             return(
//               <>
//               <Card sx={{ maxWidth: 345}} className='card_content_wrapper' key={items?.id}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   image={items?.image}
//                   alt="product images"
//                   className='image_card'
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div">
//                     {items?.category}
//                   </Typography>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {items?.title}
//                   </Typography>
//                   <Typography gutterBottom variant="h6" component="div">
//                     $ {items?.price}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {items.description.length>20? items.description.slice(0,50) + "..." + "see more": items.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//               </>
//             )
//           })
//         }
//           </Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>Item</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>Item</Item>
//         </Grid>
//       </React.Fragment>
//     );
//   }
  
// export const AllProducts = () => {
//   return (
//     <Layout>
//         <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={1}>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </Box>
//     </Layout>
//   )
// }
import React from 'react'

const AllProducts = () => {
  return (
    <div>AllProducts</div>
  )
}

export default AllProducts