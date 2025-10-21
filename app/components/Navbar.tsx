"use client";

import { motion } from "framer-motion";

interface Props {
  activeSection: string;
}

export const Navbar = ({ activeSection }: Props) => {
  const sections = ["hero", "story", "work", "services"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50">
      <h1 className="font-bold text-xl">KinderFelt</h1>
      <div className="flex gap-6 relative">
        {sections.map((section) => (
          <button
            key={section}
            className={`text-sm font-medium transition-colors ${
              activeSection === section ? "text-black" : "text-gray-400"
            }`}
            onClick={() => {
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
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
    </nav>
  );
};
