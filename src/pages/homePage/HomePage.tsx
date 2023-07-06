import React from 'react'
import Layout from '../../components/layouts/Layout'
import '../../assets/styles/homePage/HomePage.css'
import Cbutton from '../../common/button/Cbutton'
const HomePage = (props:any) => {
const heroPageDetail =[{
  id:1,
  title:'Online Store',
  quote:'"Unleash the power of your fingertips and indulge in our online shopping experience."',
}]
  return (
    <Layout>
      <div className='homepage__container'>
        {
          heroPageDetail.map((items)=>{
            return(
              <>
                <div className='homeleft_wrapper'>
                  <h1 className='heading'>{items.title}</h1>
                  <i className='quotes'>{items.quote}</i>
                  <Cbutton name='More Details'/>
                </div>
              </>
            )
          })
        }
        <div className='homeright_wrapper'>
        </div>
      </div>
      <div className='about__wrapper'>

      </div>
    </Layout>
  )
}

export default HomePage