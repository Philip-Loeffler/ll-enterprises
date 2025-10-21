"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/app/components/motion-primitives/infinite-slider";
export const WorkSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveSection("work");
  }, [inView, setActiveSection]);

  return (
    <section
      id="work"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-50"
    >
      <h2 className="text-5xl font-bold mb-4">Cuddly, Bright, and Soft</h2>
      <p className="max-w-xl text-center text-gray-500 mb-12">
        Little Banner Co offers felt design as a service. Bring your childs name
        to life.
      </p>
      {/* <div className="grid grid-cols-3 gap-6 px-8">
        <div className="bg-orange-100 rounded-2xl h-48"></div>
        <div className="bg-orange-200 rounded-2xl h-48"></div>
        <div className="bg-orange-100 rounded-2xl h-48"></div>
      </div> */}
      <InfiniteSlider speedOnHover={20} gap={4}>
        <Image
          src={"/slider1.png"}
          alt={"slide 1"}
          width={200}
          height={100}
          className="rounded-lg object-cover"
        />
        <Image
          src={"/slider2.png"}
          alt={"slide 2"}
          width={200}
          height={100}
          className="rounded-lg object-cover"
        />
        <Image
          src={"/slider3.png"}
          alt={"slide 3"}
          width={200}
          height={100}
          className="rounded-lg object-cover"
        />
      </InfiniteSlider>
    </section>
  );
};
