"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ContactSection } from "./components/ContactSection";
import { ServiceSection } from "./components/ServiceSection";
import { ReviewSection } from "./components/ReviewSection";
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
    <main className="bg-white text-white w-full">
      <Navbar activeSection={activeSection} />
      <div
        className={`h-screen overflow-y-scroll scroll-smooth gradient-slate-blue ${
          enableSnap ? "snap-y snap-mandatory" : ""
        }`}
      >
        <HeroSection setActiveSection={setActiveSection} />
        <ServiceSection setActiveSection={setActiveSection} />
        <ReviewSection setActiveSection={setActiveSection} />
        <ContactSection setActiveSection={setActiveSection} />
        {/* <Footer setActiveSection={setActiveSection} /> */}
      </div>
    </main>
  );
}
