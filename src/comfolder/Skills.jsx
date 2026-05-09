import React from 'react';
import { motion } from 'motion/react';

export default function Skills() {
  const SkillsImg = [
    { id: 1, title: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { id: 2, title: "React", icon: "https://cdn.simpleicons.org/react" },
    { id: 3, title: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { id: 4, title: "Node.js", icon: "https://cdn.simpleicons.org/node.js" },
    { id: 5, title: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    { id: 7, title: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { id: 6, title: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
    { id: 8, title: "GSAP", icon: "https://cdn.simpleicons.org/greensock" },
    { id: 9, title: "HTML", icon: "https://cdn.simpleicons.org/html5" },
    { id: 10, title: "CSS", icon: "https://cdn.simpleicons.org/css" },
    { id: 11, title: "Git", icon: "https://cdn.simpleicons.org/git" },
    { id: 12, title: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { id: 13, title: "VS Code", icon: "https://img.icons8.com/fluency/48/visual-studio-code-2019.png" },
    { id: 14, title: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    { id: 15, title: "Redux", icon: "https://cdn.simpleicons.org/redux" },
    { id: 16, title: "Shadcn UI", icon: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png" },
    { id: 17, title: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
    { id: 18, title: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
    { id: 19, title: "Restful APIs", icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png?w=360" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Har ek icon ke beech ka gap
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 } 
    },
  };

  return (
    <div className="w-screen z-50 min-h-[70vh] flex flex-col items-center py-10 bg-[#000000]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:w-md mt-14 gap-4 flex flex-col items-center justify-center"
      >
        <h3 className="text-[#9C9C9C] tracking-widest outfit text-[14px] text-uppercase">
          CORE STRENGTH
        </h3>
        <h2 className="outfit text-white text-[2.4rem] md:text-[3.375rem]">
          <span className="text-glow">Competencies</span>  
          <span className="moving-bg-text nyght font-semibold px-3">skills</span>
        </h2>
      </motion.div>

      {/* Ye wala div trigger karega stagger ko */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Jab screen pe aaye tab start ho
        viewport={{ once: true, amount: 0.1 }} // 10% visible hote hi chal jayega
        className="min-w-full px-3 pb-20 md:pl-66 md:pr-66 mt-6 text-center relative flex items-center justify-center flex-wrap"
      >
        {SkillsImg.map((skill) => (
          <motion.span 
            key={skill.id} 
            variants={itemVariants} // Children automatically pick up the variants
            whileHover={{ scale: 1.1 }}
            className="m-1 mr-2 jost text-white text-[16px] mx-0.5 px-3 bg-[#161616] flex items-center justify-center gap-2 py-1.5 border border-[#333333] rounded-md"
          >
            <img 
              src={skill.icon} 
              alt={skill.title} 
              className={`${[5, 12, 18].includes(skill.id) ? "invert" : ""} w-5 h-5 object-contain`} 
            />
            {skill.title}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}