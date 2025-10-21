"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { ServicesSection } from "./components/ServicesSection";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  return (
    <main className="bg-white text-black">
      <Navbar activeSection={activeSection} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <HeroSection setActiveSection={setActiveSection} />
        <WorkSection setActiveSection={setActiveSection} />
        <ServicesSection setActiveSection={setActiveSection} />
      </div>
    </main>
  );
}
