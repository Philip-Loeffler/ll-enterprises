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
      className="h-screen flex flex-col items-center justify-center text-black relative overflow-hidden bg-white px-0  mt-14"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Logo */}
        <div className="mb-0 w-full max-h-[400px] md:max-h-[650px] overflow-hidden">
          <img
            src="/assets/bw_rick2.png"
            alt="Loveland Enterprises Inc."
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Lightning Bolt and Text Container */}
        <div className="flex items-center gap-8 md:gap-12 max-w-4xl px-8 lg:px-0">
          {/* Lightning Bolt */}
          {/* <div className="flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-24 h-24 md:w-32 md:h-32"
              fill="#550000"
            >
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
          </div> */}

          {/* Text Content */}
          <div className="text-center">
            <h1
              className="text-lg md:text-4xl font-bold mb-4 mt-6"
              style={{ color: "#550000" }}
            >
              Electrical contracting services built on 34+ years of experience,
              trust, and heart.
            </h1>
            <p className="text-md md:text-lg text-gray-600">
              Proudly serving homeowners and businesses throughout northeast
              Ohio, our team delivers expert electrical service with integrity
              and precision.{" "}
            </p>
          </div>
        </div>
        {/* <a
          href="#contact"
          className="inline-block mt-10 rounded-lg bg-[#550000] px-8 py-3 text-white font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Get a Free Estimate
        </a> */}
      </div>
    </section>
  );
};
