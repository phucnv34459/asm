import React from 'react'
import HeaderWebsite from '../HeaderWebsite'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'

const LayoutWebsite = () => {
  return (
   <div>
   <HeaderWebsite/>
   <Banner/>
  <main>  
    <Outlet/>
  </main>
  <Footer/>
</div>

  )
}

export default LayoutWebsite