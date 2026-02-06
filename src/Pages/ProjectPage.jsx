import React from "react";
import Project from "../comfolder/Project";
import Navbar from "../comfolder/Navbar";
import Footer from "../comfolder/Footer";
import ReactLenis from "lenis/react";
ReactLenis

export default function ProjectPage() {
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
        <div className="w-35  rounded-full fixed  md:top-56 blue-shadow md:right-30 right-5 rotate-130" />
        <div className="w-35  rounded-full fixed md:-bottom-10 -bottom-25 pink-shadow md:left-30  rotate-130" /></div>
         <div className="relative bg-transparent"><Project />
         <div className="w-min-[70vw] bg-[#000000] px-50 text-center relative h-full text-[72px] outfit text-[#9C9C9C] flex flex-col   items-center justify-center font-semibold  " >

          <h4 className="text-[18px] font-light text-[#9C9C9C]  outfit">
           <span className="">Need help in your web development ?</span><span className=" ml-2 font-semibold underline"><a href="">Let's Talk!</a></span>
          </h4>
         </div>
         </div>
   
         {/* 👇 THIS IS MUST FOR REVEAL */}
         <div className="h-[50vh] pointer-events-none" />
       </ReactLenis>
    </>
  );
}
