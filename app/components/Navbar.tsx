"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  activeSection: string;
}

export const Navbar = ({ activeSection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["hero", "shop", "story", "work", "faq"];

  const handleNavClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50">
      <h1 className="font-bold text-xl">
        <span className="text-[#77BEF0]">L</span>
        <span className="text-[#FFCB61]">i</span>
        <span className="text-[#FF894F]">t</span>
        <span className="text-[#EA5B6F]">t</span>
        <span className="text-[#18975E]">l</span>
        <span className="text-[#77BEF0]">e</span>
        &nbsp;
        <span className="text-[#FFCB61]">B</span>
        <span className="text-[#FFCB61]">a</span>
        <span className="text-[#FF894F]">n</span>
        <span className="text-[#EA5B6F]">n</span>
        <span className="text-[#18975E]">e</span>
        <span className="text-[#77BEF0]">r</span>
        &nbsp;
        <span className="text-[#FFCB61]">C</span>
        <span className="text-[#FF894F]">o</span>
        <span className="text-[#EA5B6F]">.</span>
      </h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 relative">
        {sections.map((section) => (
          <button
            key={section}
            className={`text-sm font-medium transition-colors ${
              activeSection === section ? "text-black" : "text-gray-400"
            }`}
            onClick={() => handleNavClick(section)}
          >
            {section}
          </button>
        ))}
        <motion.div
          layoutId="nav-indicator"
          className="absolute bottom-0 left-0 h-[2px] bg-black"
          animate={{
            x:
              sections.findIndex((s) => s === activeSection) *
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
                key={section}
                className={`text-base font-medium transition-colors ${
                  activeSection === section ? "text-black" : "text-gray-500"
                }`}
                onClick={() => handleNavClick(section)}
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
