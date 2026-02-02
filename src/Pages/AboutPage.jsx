import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import ReactLenis from 'lenis/react'

export default function AboutPage() {
  return (
  
   <> <ReactLenis root 
        options={{
          lerp: 0.1,
          smooth: true,
          smoothTouch: false,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}>
<div className='w-full  bg-[#00000000]' /><div className="w-screen pointer-events-none h-screen fixed z-500  bg-[#00000000] ">
        {" "}
        <div className="w-35  rounded-full fixed top-56 blue-shadow right-30  rotate-130" />
        <div className="w-35  rounded-full fixed -bottom-10 pink-shadow left-30  rotate-130" /></div>

         <div className='w-full h-10 bg-[#000000]' />
         <div className="relative bg-transparent"><About /></div>
   
         {/* 👇 THIS IS MUST FOR REVEAL */}
         <div className="h-[50vh] pointer-events-none" />
       </ReactLenis>
    </>
  )
}
