"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ServiceSection } from "./components/ServiceSection";
import { ReviewSection } from "./components/ReviewSection";
import { Footer } from "./components/Footer";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  return (
    <main className="bg-white text-white w-full">
      <Navbar activeSection={activeSection} />
      <div className="h-screen overflow-y-scroll scroll-smooth bg-white">
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection setActiveSection={setActiveSection} />
        <ServiceSection setActiveSection={setActiveSection} />
        <ReviewSection setActiveSection={setActiveSection} />
        <ContactSection setActiveSection={setActiveSection} />
        {/* <Footer setActiveSection={setActiveSection} /> */}
      </div>
    </main>
  );
}
