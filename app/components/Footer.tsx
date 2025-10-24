"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/app/components/motion-primitives/infinite-slider";
export const Footer = ({}: //   setActiveSection,
{
  //   setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  //   useEffect(() => {
  //     if (inView) setActiveSection("work");
  //   }, [inView, setActiveSection]);

  return <footer>yo </footer>;
};
