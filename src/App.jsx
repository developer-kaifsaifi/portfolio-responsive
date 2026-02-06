import { Routes, Route } from "react-router-dom"
import HomeLayout from "./HomeLayout"
import MainPage from "./Pages/MainPage"
import AboutPage from "./Pages/AboutPage"
import ProjectPage from "./Pages/ProjectPage"
import ContactPage from "./Pages/ContactPage"
import Home from "./comfolder/Home"
import About from "./comfolder/About"
import Footer from "./comfolder/Footer"
import Navbar from "./comfolder/Navbar"
import Skills from "./comfolder/Skills"
import Contact from "./comfolder/Contact"

function App() {
  return (

    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="contact" element={<ContactPage/>} />
      </Route>
    </Routes>
  )
}

export default App





























// import './App.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import ReactLenis from 'lenis/react'
// import Outlet from './Pages/MainPage'
// import { Route, Routes } from 'react-router-dom'
// import AboutPage from './Pages/AboutPage'
// import ProjectPage from './Pages/ProjectPage'
// import HomeLayout from './HomeLayout'


// function App() {

//   return (
//     <>
    
          
//     <Routes>
      
//       <Route path='/about' element={<AboutPage/>} />
//       <Route path='/project' element={<ProjectPage/>} />
//     </Routes>
    
//     </>
//   )
// }

// export default App
