"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  activeSection: string;
}

export const Navbar = ({ activeSection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { id: "hero", label: "Home" },
    { id: "service", label: "Services" },
    { id: "review", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-oklch(12.9% 0.042 264.695) backdrop-blur-md flex justify-between items-center px-8 py-4 z-50">
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-yellow-400"
          fill="currentColor"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
        <h1 className="font-bold text-white text-xl"></h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 relative">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`text-sm font-medium transition-colors ${
              activeSection === section.id ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleNavClick(section.id)}
          >
            {section.label}
          </button>
        ))}
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 h-[2px] bg-white"
          animate={{
            x:
              sections.findIndex((s) => s.id === activeSection) *
              80 /* offset width */,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center space-y-4 py-6 shadow-md md:hidden"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                className={`text-base font-medium transition-colors ${
                  activeSection === section.id ? "text-black" : "text-gray-500"
                }`}
                onClick={() => handleNavClick(section.id)}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
