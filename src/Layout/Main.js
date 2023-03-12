import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Componenets/Footer/Footer'
import Navbar from '../Componenets/Navbar/Navbar'

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
