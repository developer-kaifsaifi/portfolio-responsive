import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
  // Staggered animation variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="flex min-w-screen overflow-x-hidden h-screen bg-[url('./assets/download.avif')] relative bg-center bg-cover"></div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex w-screen z-50 absolute top-0 items-center justify-center h-screen from-black via-gray-900 to-black"
      >
        <div className="w-screen h-screen bg-[#000000e7] relative overflow-hidden">
          
          {/* --- STATIC GLOW LIGHTS (No more flickering) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="w-35 rounded-full fixed -top-7 right-5 md:top-56 blue-shadow md:right-30 rotate-130 pointer-events-none" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5 }}
            className="w-35 rounded-full fixed -bottom-25 md:-bottom-10 pink-shadow md:left-30 rotate-130 pointer-events-none" 
          />

          {/* Main Content */}
          <motion.div variants={itemVariants} className="min-w-[40vw] mt-15 flex flex-wrap px-4 text-center md:relative md:top-24 h-[40vh] text-[2rem] md:text-[3.75rem] outfit text-white flex-col items-center justify-center font-semibold">
            <h1>Hey there! I'm Mohammad Kaif 👋</h1>
            <h1>
              a MERN-Stack Web{" "}
              <span className="nyght italic text-[2.5rem] md:text-[4.75rem] moving-bg-text">
                Developer
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="min-w-full px-25 text-center relative h-40 md:top-6 text-[72px] outfit text-[#9C9C9C] flex flex-col items-center justify-center font-semibold">
            <h3 className="outfit text-[20px]">
              Build fast & scalable web apps.
            </h3>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex-col text-center relative h-25 md:h-10 top-8 gap-4 text-[13px] outfit text-[#9C9C9C] flex md:flex-row items-center justify-center">
            <span className="jost text-[14px] mx-0.5 px-3 bg-transparent flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md">
              <AiOutlineThunderbolt className="scale-135" /> Performance
            </span>
            <span className="jost text-[14px] mx-0.5 px-3 bg-transparent flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md">
              <LuEye className="scale-135" /> Accessible by Design
            </span>
            <span className="jost text-[14px] mx-0.5 px-3 bg-transparent flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Scalable
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full text-center relative h-10 top-24 gap-4 text-[13px] outfit text-[#000000ED] flex items-center justify-center">
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-[#b3b3b3] px-6 py-2 rounded-full font-semibold text-[15px] cursor-pointer"
              >
                About Me
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-white bg-transparent border mix-blend-exclusion cursor-pointer px-6 py-2 text-white rounded-full font-semibold text-[15px]"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}