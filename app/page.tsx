"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { ShopSection } from "./components/ShopSection";
import { StorySection } from "./components/StorySection";
import { Footer } from "./components/Footer";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [enableSnap, setEnableSnap] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // enable snapping only for desktop width
      setEnableSnap(window.innerWidth >= 768);
    };

    // Run immediately on mount
    handleResize();

    // Watch for resize or orientation changes
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <main className="bg-white text-black w-full">
      <Navbar activeSection={activeSection} />
      <div
        className={`h-screen overflow-y-scroll scroll-smooth ${
          enableSnap ? "snap-y snap-mandatory" : ""
        }`}
      >
        <HeroSection setActiveSection={setActiveSection} />
        <ShopSection setActiveSection={setActiveSection} />
        <StorySection setActiveSection={setActiveSection} />
        {/* <WorkSection setActiveSection={setActiveSection} /> */}
        <Footer setActiveSection={setActiveSection} />
      </div>
    </main>
  );
}
