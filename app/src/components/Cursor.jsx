import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High damping and lower stiffness gives it that "liquid" green feel
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. The Main Green Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-emerald-500 rounded-full z-[999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. The Large Outer Ring (Optional for Luxury Feel) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-emerald-500/30 rounded-full z-[998] pointer-events-none"
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 100 }),
          y: useSpring(mouseY, { damping: 40, stiffness: 100 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default Cursor;  