"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";
import { ShopSection } from "./components/ShopSection";
import { StorySection } from "./components/StorySection";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  return (
    <main className="bg-white text-black w-full">
      <Navbar activeSection={activeSection} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <HeroSection setActiveSection={setActiveSection} />
        <ShopSection setActiveSection={setActiveSection} />

        <StorySection setActiveSection={setActiveSection} />

        <WorkSection setActiveSection={setActiveSection} />
      </div>
    </main>
  );
}
