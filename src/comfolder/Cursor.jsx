import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Detect hover on clickable elements
    const hoverables = document.querySelectorAll(
      "a, button, input, textarea, .cursor-hover"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          fixed
          top-0
          left-0
          z-[999]
          hidden
          md:flex
          h-8
          w-8
          pointer-events-none
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-white/10
          backdrop-blur-md
          mix-blend-difference
        "
      >
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </motion.div>

      {/* Outer Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.4 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="
          fixed
          top-0
          left-0
          z-[998]
          hidden
          md:block
          h-8
          w-8
          rounded-full
          pointer-events-none
          bg-[#BEA163]
          blur-xl
        "
      />
    </>
  );
}