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
      className="snap-start h-screen flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
    >
      {/* Yellow Lightning Bolt Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg
          viewBox="0 0 24 24"
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-yellow-400"
          fill="currentColor"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          loveland enterprises
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
          Custom felt letter banners handcrafted with care
        </p>
      </div>
    </section>
  );
};
