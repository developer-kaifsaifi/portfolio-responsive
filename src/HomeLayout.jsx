import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ReactLenis from "lenis/react"

export default function HomeLayout() {
  return (
    <ReactLenis root 
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
      <>
        <Navbar />
        <Outlet />   {/* 👈 yahin pages inject honge */}
        <Footer />
      </>
    </ReactLenis>
  )
}




















































// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './components/Home'
// import Project from './components/Project'
// import About from './components/About'
// import ReactLenis from 'lenis/react'













// export default function HomeLayout() {
//   return (
//       <>

//     <ReactLenis
//         root 
//         options={{
//           lerp: 0.1,
//           smooth: true,
//           smoothTouch: false,
//           duration: 1.2,
//           orientation: 'vertical',
//           gestureOrientation: 'vertical',
//           smoothWheel: true,
//           wheelMultiplier: 1,
//           touchMultiplier: 2,
//         }}
//         >
//     <div className='relative z-10 bg-black'>
//     <Navbar/>
//     <Footer/>
    
//        <Outlet  />
    
   
   
//       </div>
// </ReactLenis>
      
//     </>
//   )
// }
