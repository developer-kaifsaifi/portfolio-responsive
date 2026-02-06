import Home from "../comfolder/Home"
import Project from "../comfolder/Project"
import Skills from "../comfolder/Skills"
import About from "../comfolder/About"

import React from "react"





export default function MainPage() {
  return (
    <><div className="relative bg-transparent">
      </div>
      
    <div className="relative bg-transparent">
      
      <Home /></div>
      <div className="relative bg-transparent"><Project /></div>
      <div className="relative bg-transparent"><Skills /></div>
      <div className="relative bg-transparent"><About /></div>

      {/* 👇 THIS IS MUST FOR REVEAL */}
      <div className=" min-h-0 md:h-[50vh] md:bg-transparent bg-[#000000] pointer-events-none" />
    
 </> )
}
