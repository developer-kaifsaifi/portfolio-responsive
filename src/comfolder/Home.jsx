import React from "react";
import { AiOutlineThunderbolt,  } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import Skills from "./Skills";
import { Link } from "react-router-dom";



const MainSkills = [
  { id: 1, title: "JavaScript" },
  { id: 2, title: "React" },
  { id: 3, title: "TailwindCSS" },
  { id: 4, title: "Node.js" },
  { id: 5, title: "Express.js" },
  { id: 6, title: "Ai" },
  { id: 7, title: "MongoDB" },
  { id: 8, title: "Framer Motion" },
  { id: 9, title: "GSAP" },
];

export default function Home() {
  return (<>
  <div className="flex min-w-screen overflow-x-hidden  h-screen bg-[url('./assets/download.avif')] relative bg-center bg-cover"></div>
    <div className="flex  w-screen z-50 absolute top-0  items-center justify-center h-screen  from-black via-gray-900 to-black">
      <div className="w-screen h-screen   bg-[#000000e7] ">
        {" "}
        <div className="w-35  rounded-full fixed -top-7 right-5 md:top-56 blue-shadow md:right-30  rotate-130" />
        <div className="w-35  rounded-full fixed -bottom-25 md:-bottom-10 pink-shadow md:left-30  rotate-130" />
               
        <div className="min-w-[40vw] mt-26 flex flex-wrap px-4  text-center md:relative md:top-24 h-[40vh] text-[2rem] md:text-[3.75rem] outfit text-white  flex-col  items-center justify-center font-semibold  ">
          {" "}
          <h1 >Hey there! I'm Mohammad Kaif 👋</h1>
          <h1 className=" ">
            a Full-Stack Web{" "}
            <span className="nyght italic  text-[2.5rem]  md:text-[4.75rem] moving-bg-text "> Developer</span>
          </h1>
        </div>
        <div className="min-w-full px-25 text-center relative h-40 md:top-6 text-[72px] outfit text-[#9C9C9C] flex flex-col   items-center justify-center font-semibold  ">
          {" "}
          <h3 className="outfit text-[20px]">
            Build fast & scalable web apps.
          </h3>
          {/* <h4 className="text-[18px] mt-2 outfit">
            Building fast & scalable web apps.
          </h4> {" "} */}
        </div>
        {/* <div className="w-full  text-center relative h-10 top-3 text-[13px] outfit text-[#9C9C9C] flex   items-center justify-center   ">
          { MainSkills.map((skill) => {
             return (
              <span key={skill.id} className="text-white text-[13px] mx-0.5 px-3 bg-transparent py-1.5 border border-[#333333] rounded-full jost">
                {skill.title}
              </span>
          
          )})}
        </div> */}
        <div className="w-full flex-col text-center relative h-25  md:h-10 top-8 gap-4 text-[13px] outfit text-[#9C9C9C] flex md:flex-row  items-center justify-center   ">
          <span className="jost  text-[14px] mx-0.5 px-3 bg-transparent flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md jost">


<AiOutlineThunderbolt className="scale-135" /> Performance</span>
<span className="jost  text-[14px] mx-0.5 px-3 bg-transparent flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md jost">


<LuEye className="scale-135"  /> Accessible by Design</span>
<span className="jost  text-[14px] mx-0.5 px-3 bg-transparent flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md jost">


<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg> Scalable</span>
        </div>
        <div className="w-full text-center relative h-10 top-24 gap-4 text-[13px] outfit text-[#000000ED] flex   items-center justify-center   ">
          <Link to="/about"><button className="bg-white hover:bg-[#b3b3b3] px-6 py-2 rounded-full font-semibold text-[15px] cursor-pointer ">About Me</button></Link><Link to="/contact"><button className="border-white bg-transparent border mix-blend-exclusion cursor-pointer px-6 py-2 text-white hover:bg-[#4f4f4f65] hover:bg-[radial-gradient(circle_at_center,#4f4f4f65,transparent_40%)] rounded-full font-semibold text-[15px] ">Get in Touch</button></Link>
        </div>
      
      
   
      </div>

      
    </div>



</>
  );
}
