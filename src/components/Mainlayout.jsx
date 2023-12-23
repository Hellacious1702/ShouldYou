import React from 'react'
import Navbar from './Navbar/Navbar'
import Mainsection from './MainSection/Mainsection'
import Footer from './Footer/Footer'

const Mainlayout = () => {
  return (
    <div>
        <Navbar/>
        <Mainsection/>
        <Footer/>
    </div>
  )
}

export default Mainlayout