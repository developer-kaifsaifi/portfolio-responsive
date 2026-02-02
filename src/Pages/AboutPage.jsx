import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <Footer/>
    <div className='pointer-events-none bg-[#000000] h-[5vh]'></div>
    <About/>
    <div className='pointer-events-none bg-transparent h-[50vh]'></div>
    

    </>
  )
}
