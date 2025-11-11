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
      className="h-screen flex flex-col items-center justify-center text-black relative overflow-hidden bg-white px-4"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="/assets/loveland.png"
            alt="Loveland Enterprises Inc."
            className="h-full w-full"
          />
        </div>

        {/* Lightning Bolt and Text Container */}
        <div className="flex items-center gap-8 md:gap-12 max-w-4xl">
          {/* Lightning Bolt */}
          <div className="flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-24 h-24 md:w-32 md:h-32"
              fill="#550000"
            >
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="text-left">
            <h1
              className="text-2xl md:text-4xl font-bold mb-4"
              style={{ color: "#550000" }}
            >
              Electrical contracting services built on 34+ years of experience
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600">
              Proudly serving homeowners and businesses throughout Cuyahoga,
              Lake, Geauga, and Ashtabula Counties — whether you’re on the west
              side, east side, or along the Lake Erie shoreline, our team
              delivers expert electrical service with integrity and precision.{" "}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
