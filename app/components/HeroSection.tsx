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
    console.log("inview");
    if (inView) setActiveSection("hero");
  }, [inView, setActiveSection]);

  return (
    <section
      id="hero"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white text-center"
    >
      <h1 className="text-7xl font-bold leading-tight flex">
        <span className="text-[#77BEF0]">L</span>
        <span className="text-[#FFCB61]">i</span>
        <span className="text-[#FF894F]">t</span>
        <span className="text-[#EA5B6F]">t</span>
        <span className="text-[#18975E]">l</span>
        <span className="text-[#77BEF0]">e</span>
        &nbsp;
        <span className="text-[#FFCB61]">B</span>
        <span className="text-[#FFCB61]">a</span>
        <span className="text-[#FF894F]">n</span>
        <span className="text-[#EA5B6F]">n</span>
        <span className="text-[#18975E]">e</span>
        <span className="text-[#77BEF0]">r</span>
        &nbsp;
        <span className="text-[#FFCB61]">C</span>
        <span className="text-[#FF894F]">o</span>
        <span className="text-[#EA5B6F]">.</span>
        <br />
        {/* <span className="font-extrabold text-[100px]">brand</span> */}
      </h1>
      <p className="text-gray-500 mt-6 text-lg">Make your felt pop ✨</p>
    </section>
  );
};
