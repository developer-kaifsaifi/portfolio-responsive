import React, { useState } from "react";
import { motion } from "motion/react";

export default function Project() {
  const [ishoveredgithub, setIshoveredgithub] = useState(false);

  const handleMouseEntergithub = () => setIshoveredgithub(true);
  const handleMouseLeavegithub = () => setIshoveredgithub(false);

  // Animation variants for reusability and performance
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="items-center justify-center md:justify-center md:items-center min-w-80vw pb-25 flex overflow-x-hidden min-h-[280vh] bg-[#000000]">
      <div className="flex mt-50 flex-col gap-15 items-center">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-md mt-14 flex flex-col items-center justify-center"
        >
          <h3 className="text-[#9C9C9C] tracking-widest outfit text-3.5 text-uppercase">
            FEATURED CASE STUDIES
          </h3>

          <h2 className="outfit text-white text-[3rem] md:text-[3.37rem]">
            <span className="text-glow"> Curated</span>{" "}
            <span className="moving-bg-text nyght font-semibold">
              work
            </span>
          </h2>
        </motion.div>

        {/* Projects Container */}
        <div className="min-w-screen justify-center items-center md:items-center flex flex-col py-8 gap-14 min-h-xl">

          {/* ===================== MediFlow ===================== */}
          <motion.div 
            {...fadeInUp}
            className="flex gap-4 md:justify-center w-[90vw] flex-col md:flex-row min-w-[60vw] md:h-[426.23px]"
          >
            {/* Image */}
            <div className="w-full md:w-[23.81rem] h-75 md:h-[26.63rem] rounded-t-3xl rounded-b-none md:rounded-l-3xl md:rounded-r-none border-2 border-[#EDEDED0D] bg-[url(./assets/mac.webp)] bg-cover bg-center"></div>

            {/* Content */}
            <div className="w-full md:w-199 h-auto md:h-[26.63rem] rounded-b-3xl rounded-t-none md:rounded-r-3xl md:rounded-l-none border-2 border-[#333333] p-8 md:p-10 flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-white text-[2.3rem] md:text-[42px] nyght font-semibold">MediFlow</h2>
                  <p className="text-[#9C9C9C] outfit text-[15px] md:text-[16px] leading-[28px] md:leading-[30px] mt-4 max-w-[95%]">
                    A minimal Hospital Management System focused on core functionality like patient records, appointments, and workflow management using React and LocalStorage.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {["React", "LocalStorage"].map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[#333333] text-[#CFCFCF] text-sm outfit">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="https://hms-mediflow.vercel.app/" target="_blank" rel="noreferrer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full bg-white text-black outfit text-sm font-medium duration-300"
                  >
                    View Project
                  </motion.button>
                </a>
                <div className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center cursor-pointer text-[#9C9C9C]">
                  <a target="_blank" href="https://github.com/developer-kaifsaifi" rel="noreferrer">
                    <svg
                      onMouseEnter={handleMouseEntergithub}
                      onMouseLeave={handleMouseLeavegithub}
                      fill={ishoveredgithub ? "#ffffff" : "currentColor"}
                      viewBox="0 0 256 256" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                      className="transition-colors duration-300"
                    >
                      <path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================== DigiFlow ===================== */}
          <motion.div 
            {...fadeInUp}
            className="w-[90vw] flex gap-4 md:items-center flex-col-reverse md:flex-row md:w-307 md:h-[426.23px]"
          >
            <div className="w-full md:w-199 h-auto md:h-[426.23px] rounded-b-3xl rounded-t-none md:rounded-l-3xl md:rounded-r-none border-2 border-[#333333] p-8 md:p-10 flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-white text-[2.3rem] md:text-[42px] nyght font-semibold">DigiFlow</h2>
                  <p className="text-[#9C9C9C] outfit text-[15px] md:text-[16px] leading-[28px] md:leading-[30px] mt-4 max-w-[95%]">
                    A minimal Task Management System built using the MERN stack with Framer Motion animations, focused on task organization and smooth interactions.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {["MongoDB", "Express", "React", "Node.js", "Framer Motion"].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[#333333] text-[#CFCFCF] text-sm outfit">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="https://digiflow-chi.vercel.app/" target="_blank" rel="noreferrer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full bg-white text-black outfit text-sm font-medium duration-300"
                  >
                    View Project
                  </motion.button>
                </a>
                <div className="w-12 h-12 rounded-full border border-[#333333] text-[#9C9C9C] flex items-center justify-center cursor-pointer">
                  <a target="_blank" href="https://github.com/developer-kaifsaifi" rel="noreferrer">
                    <svg
                      onMouseEnter={handleMouseEntergithub}
                      onMouseLeave={handleMouseLeavegithub}
                      fill={ishoveredgithub ? "#ffffff" : "currentColor"}
                      viewBox="0 0 256 256" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="w-full md:w-[381.59px] h-75 md:h-[426.23px] rounded-t-3xl rounded-b-none md:rounded-r-3xl md:rounded-l-none border-2 border-[#EDEDED0D] bg-[url(./assets/digi.webp)] bg-cover bg-no-repeat bg-center"></div>
          </motion.div>

          {/* ===================== Thread & Grace ===================== */}
          <motion.div 
            {...fadeInUp}
            className="flex gap-4 md:items-center flex-col md:flex-row w-[90vw] md:w-307 md:h-[426.23px]"
          >
            <div className="w-full md:w-[381.59px] h-75 md:h-[426.23px] rounded-t-3xl rounded-b-none md:rounded-l-3xl md:rounded-r-none border-2 border-[#EDEDED0D] bg-[url(./assets/pc.png)] bg-center bg-no-repeat bg-size-[99%_99%]"></div>
            <div className="w-full md:w-199 h-auto md:h-[426.23px] rounded-b-3xl rounded-t-none md:rounded-r-3xl md:rounded-l-none border-2 border-[#333333] p-8 md:p-10 flex flex-col justify-between">
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-white text-[2.3rem] md:text-[42px] nyght font-semibold">Thread & Grace</h2>
                  <p className="text-[#9C9C9C] outfit text-[15px] md:text-[16px] leading-[28px] md:leading-[30px] mt-4 max-w-[95%]">
                    A MERN-based eCommerce platform with email verification, secure authentication, and deployment on Vercel using Nodemailer.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {["MongoDB", "Express", "React", "Node.js", "Nodemailer", "Vercel"].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-[#333333] text-[#CFCFCF] text-sm outfit">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <a href="https://ecommerce-frontend-mg.vercel.app/" target="_blank" rel="noreferrer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full bg-white text-black outfit text-sm font-medium duration-300"
                  >
                    View Project
                  </motion.button>
                </a>
                <div className="w-12 h-12 rounded-full border border-[#333333] flex items-center justify-center cursor-pointer text-[#9C9C9C]">
                  <a target="_blank" href="https://github.com/developer-kaifsaifi" rel="noreferrer">
                    <svg
                      onMouseEnter={handleMouseEntergithub}
                      onMouseLeave={handleMouseLeavegithub}
                      fill={ishoveredgithub ? "#ffffff" : "currentColor"}
                      viewBox="0 0 256 256" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}