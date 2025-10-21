"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const HeroSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveSection("hero");
  }, [inView, setActiveSection]);

  return (
    <section
      id="hero"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white text-center"
    >
      <h1 className="text-7xl font-bold leading-tight">
        KinderFelt <br />
        {/* <span className="font-extrabold text-[100px]">brand</span> */}
      </h1>
      <p className="text-gray-500 mt-6 text-lg">Make your felt pop ✨</p>
    </section>
  );
};
