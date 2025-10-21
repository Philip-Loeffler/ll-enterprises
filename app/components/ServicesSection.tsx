"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const ServicesSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveSection("services");
  }, [inView, setActiveSection]);

  return (
    <section
      id="services"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center justify-center bg-white"
    >
      <h2 className="text-5xl font-bold mb-4">Everything you need</h2>
      <p className="max-w-2xl text-center text-gray-500 mb-8">
        Shipping SaaS apps is hard. We make it easy with clean code and a
        scalable architecture.
      </p>
      <div className="grid grid-cols-3 gap-6 px-8">
        <div className="bg-orange-100 rounded-2xl p-6 h-48 flex flex-col justify-end">
          <p className="text-lg font-semibold">GPT App Development</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 h-48 flex flex-col justify-end">
          <p className="text-lg font-semibold">Premium Architecture</p>
        </div>
        <div className="bg-black text-white rounded-2xl p-6 h-48 flex flex-col justify-end">
          <p className="text-lg font-semibold">Start Today</p>
        </div>
      </div>
    </section>
  );
};
