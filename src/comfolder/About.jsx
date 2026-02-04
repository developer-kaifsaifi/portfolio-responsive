import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'


export default function About() {

  const [ishoveredgithub, setIshoveredgithub] = useState(false);
    const [ishoveredx, setIshoveredx] = useState(false);
    const [ishoveredLinkedIn, setIshoveredLinkedIn] = useState(false);
  
    function handleMouseEnterx() {
      setIshoveredx(true);
    }
  
    function handleMouseLeavex() {
      setIshoveredx(false);
    }
    function handleMouseEntergithub() {
      setIshoveredgithub(true);
    }
  
    function handleMouseLeavegithub() {
      setIshoveredgithub(false);
    }
  
    function handleMouseEnterLinkedIn() {
      setIshoveredLinkedIn(true);
    }
    function handleMouseLeaveLinkedIn() {
      setIshoveredLinkedIn(false);
    }
  

  return (<>
    <div className='w-screen  pl-50 pt-14 min-h-screen  bg-[#000000]'>
<div className="w-150  flex flex-col items-start justify-center">
          <h3 className="mb-4 text-[#9C9C9C] tracking-widest outfit text-[14px] text-uppercase">
            ABOUT ME
          </h3>
          <h2 className="outfit  text-white  tracking-tight  text-[48px]">
            {" "} <span className='text-glow font-semibold'> Full-Stack Developer crafting Modern Web </span>
            <span className="moving-bg-text pl-4 nyght font-semibold ">Experiences</span>
          </h2>
        </div>
        <div className="w-150  gap-6 h-40 relative top-32 text-[72px] outfit text-[#9C9C9C] flex flex-col   items-start justify-center   ">
          {" "}
          <h3 className="outfit mt-5  text-[20px]">
            <span className='font-bold'>I'm Mohammad Kaif —</span> a passionate Full-Stack Web Developer focused on creating engaging and efficient web applications. I enjoy working across both frontend and backend, building responsive user interfaces and scalable server-side solutions using the JavaScript ecosystem.
          </h3>
          <h3 className="outfit text-[20px]">
            My core experience includes React, Node.js, Express, and MongoDB, and I continuously improve my skills by building real-world projects and exploring modern web technologies.
          </h3>
          <h3 className="outfit text-[20px]">
            Outside of coding, I enjoy exploring new ideas and staying curious about technology and life. I believe every day is an opportunity to grow, and every project is a chance to build something meaningful that improves how people interact with the web.
          </h3>
          
        </div>

        <div className="w-150  gap-6 h-5  mt-70 text-[72px] outfit text-[#9C9C9C] flex   relative top-1 left-0 items-center ">
          
          <svg className=" pointer"
                onMouseEnter={handleMouseEntergithub}
                onMouseLeave={handleMouseLeavegithub}
                stroke="currentColor"
                fill={`${ishoveredgithub ? "#ffffff" : "currentColor"} `} stroke-width="0" viewBox="0 0 256 256" font-size="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path></svg>

          <svg className=" pointer"
                onMouseEnter={handleMouseEnterLinkedIn}
                onMouseLeave={handleMouseLeaveLinkedIn}
                stroke={`${ishoveredLinkedIn ? "#ffffff" : "currentColor"} `}
                fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" font-size="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <svg className=" pointer"
                onMouseEnter={handleMouseEnterx}
                onMouseLeave={handleMouseLeavex}
                stroke="currentColor"
                fill={`${ishoveredx ? "#ffffff" : "currentColor"} `} stroke-width="0" viewBox="0 0 24 24" font-size="18" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg>
<br />
  

        </div>
        <div className='pointer relative flex  items-center justify-start  gap-4 w-50 h-20 mt-1'> 
          <h3 className='outfit relative  text-white  text-[20px]'>Resume</h3>
   <button className="btn relative border-2 border-[#EDEDED0D] bg-white flex  items-center justify-center  w-8 h-8 text-black rounded-full  font-bold  "> 

  
  <span className="a bg-transparent  flex  items-center justify-center w-full h-full   a1"><IoIosArrowRoundForward /></span>
  <span class="a  bg-transparent flex  items-center justify-center w-full h-full font-sm   a2"><IoIosArrowRoundForward /></span>

</button>
</div>



    </div>
<div className=' bg-[#000000]  w-full h-70 flex items-center justify-center  '>

   <div className="w-min-[70vw]  px-50 text-center relative h-full top-6 text-[72px] outfit text-[#9C9C9C] flex flex-col   items-center justify-center font-semibold  ">
          {" "}
          <h3 className="outfit  text-white text-[44px]">
           I build end-to-end web solutions
          </h3>
          <h4 className="text-[18px] font-light text-[#9C9C9C] mt-5 outfit">
            using modern technologies, with a strong focus on performance, scalability, and user experience.
          </h4> {" "}
        </div>

</div>

</>

  )
}
