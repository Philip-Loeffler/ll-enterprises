"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const ScrollInFromLeft = ({
  children,
  threshold = 0.2,
  delay = 0,
}: {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay,
        },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }} // starts off-screen to the left
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
