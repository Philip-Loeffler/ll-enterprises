"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const AboutSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveSection("about");
  }, [inView, setActiveSection]);

  return (
    <section id="about" ref={ref} className="min-h-screen flex overflow-hidden">
      {/* Content Container */}
      <div className="flex w-full flex-col lg:flex-row justify-center gap-8 px-6 sm:px-12 py-20">
        {/* Images side by side */}
        <div className="lg:flex pt-2 lg:flex-row gap-4 justify-center">
          <img
            className="lg:h-[50vh] lg:h-[100vh] w-auto rounded-xl object-cover"
            src="/assets/vintage_rick.png"
            alt="Loveland Enterprises Inc."
          />
          <img
            className="lg:h-[50vh] pt-2 lg:pt-0 lg:h-[100vh] w-auto rounded-xl object-cover"
            src="/assets/vintage_rick_2.png"
            alt="Loveland Enterprises Inc."
          />
        </div>

        {/* About Us Card - below on mobile, to the right on desktop */}
        <div className="max-w-xl bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl">
          <h2 className="text-5xl font-bold mb-6 text-black">About Us</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              For 34+ years, Loveland Enterprises Inc. has built a reputation
              for honesty, craftsmanship, and care — values that trace back to
              the owner, Rick Loveland's, very first days in the trade.
            </p>

            <p>
              Rick began his career in high school, working as an apprentice
              under a great mentor who later became a lifelong friend. Those
              early lessons — take pride in your work, treat people right, and
              never cut corners — still guide every project today.
            </p>

            <p>
              Licensed since 1991, he has served both residential homeowners,
              custom home builders, and commercial customers with
              professionalism and reliability. What began as general contracting
              home building focus evolved into a full-time electrical services
              business specializing in construction, service, and repair focused
              on getting the job done right the first time.
            </p>

            <p>
              Customers appreciate Loveland Enterprises' personalized care — the
              kind that only comes from a small business built on integrity and
              accountability.
            </p>

            <p>
              Beyond the trade, Rick is a proud father of three and, above all,
              a grateful grandfather to two beautiful granddaughters — his
              favorite title of all. Guided by faith, family, and a deep love
              for his community, he approaches every project as more than just a
              job — it's an opportunity to serve, to help, and to make a
              difference.
            </p>

            <p className="font-semibold" style={{ color: "#550000" }}>
              When you work with us, you're not just hiring an electrician —
              you're partnering with someone who truly cares, and who's been
              lighting the way with skill and heart for over three decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
