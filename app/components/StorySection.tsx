"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect } from "react";

export const StorySection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveSection("story");
  }, [inView, setActiveSection]);

  return (
    <section
      id="story"
      ref={ref}
      className="snap-start h-screen flex flex-col justify-center bg-gray-50 px-6 sm:px-12 md:mt-0 mt-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
        {/* Image side */}
        <div className="flex justify-center">
          <div className="relative w-120 h-120  rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hannah.png"
              alt="Our felt maker at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div>
          <h2 className="text-6xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hannah had a simple idea — to bring warmth, color, and creativity
            into the spaces that mean the most. Each felt letter is hand-cut and
            stitched by her who pours her hearts into every detail.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From the first sketch to the final piece, we believe in celebrating
            individuality and craftsmanship. Whether it’s a name for your
            newborn, a word of encouragement, or a holiday decoration, our goal
            is to make every piece feel personal and timeless.
          </p>
        </div>
      </div>
    </section>
  );
};
