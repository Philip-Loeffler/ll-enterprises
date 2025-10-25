"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/app/components/motion-primitives/infinite-slider";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/app/components/motion-primitives/carousel";

export const WorkSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) setActiveSection("work");
  }, [inView, setActiveSection]);

  return (
    <section
      id="work"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center  justify-center bg-gray-50 px-6 sm:px-12 md:mt-0 mt-100"
    >
      <div>
        <h2 className="text-5xl font-bold mb-4">Cuddly, Bright, and Soft</h2>
        <p className="max-w-xl text-center text-gray-500 mb-12">
          Little Banner Co offers felt design as a service. Bring your childs
          name to life.
        </p>
        {/* <div className="grid grid-cols-3 gap-6 px-8">
        <div className="bg-orange-100 rounded-2xl h-48"></div>
        <div className="bg-orange-200 rounded-2xl h-48"></div>
        <div className="bg-orange-100 rounded-2xl h-48"></div>
      </div> */}
        <div className="hidden md:flex">
          <Image
            src={"/slider1.png"}
            alt={"slide 1"}
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
          <Image
            src={"/slider2.png"}
            alt={"slide 2"}
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
          <Image
            src={"/slider3.png"}
            alt={"slide 3"}
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
          <InfiniteSlider speedOnHover={20} gap={4} className="md:hidden">
            <Image
              src={"/slider1.png"}
              alt={"slide 1"}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            <Image
              src={"/slider2.png"}
              alt={"slide 2"}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            <Image
              src={"/slider3.png"}
              alt={"slide 3"}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          </InfiniteSlider>
        </div>
        <div className="md:hidden relagive w-full max-w-xs'">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  1
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  2
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  3
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                  4
                </div>
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselNavigation alwaysShow /> */}
            <CarouselIndicator />
          </Carousel>
        </div>
        {/* <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>
    </section>
  );
};
