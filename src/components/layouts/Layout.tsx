import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props:any) => {
  return (
    <div>
        <Header/>
            <main>
                {props.children}
            </main>
        
    </div>
  )
}

export default Layout