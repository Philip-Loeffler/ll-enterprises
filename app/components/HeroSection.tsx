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
      className="h-screen flex flex-col items-center justify-center text-center text-black relative overflow-hidden bg-white"
    >
      {/* Lightning Bolt Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg
          viewBox="0 0 24 24"
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          fill="#550000"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ color: "#550000" }}
        >
          Loveland Enterprises
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
          Serving Greater Cleveland & Surrounding Communities Proudly serving
          homeowners and businesses throughout Cuyahoga, Lake, Geauga, and
          Ashtabula Counties — whether you’re on the west side, east side, or
          along the Lake Erie shoreline, our team delivers expert electrical
          service with integrity and precision.{" "}
        </p>
      </div>
    </section>
  );
};
