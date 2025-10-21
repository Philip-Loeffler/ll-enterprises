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
        KinderFelt offers felt design as a service. Bring your childs name to
        life.
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
          width={380}
          height={280}
          className="rounded-lg object-cover"
        />{" "}
        <Image
          src={"/slider2.png"}
          alt={"slide 2"}
          width={380}
          height={280}
          className="rounded-lg object-cover"
        />{" "}
        <Image
          src={"/slider3.png"}
          alt={"slide 3"}
          width={380}
          height={280}
          className="rounded-lg object-cover"
        />
        {/* <img
          src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
          alt="Dean blunt - Black Metal 2"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
          alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
          alt="Yung Lean - Stardust"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
          alt="A$AP Rocky - Tailor Swif"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="aspect-square w-[320px] rounded-[4px]"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[320px] rounded-[4px]"
        /> */}
      </InfiniteSlider>
    </section>
  );
};
