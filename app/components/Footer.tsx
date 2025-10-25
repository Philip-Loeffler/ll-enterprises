"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react"; // lightweight icon library
import Link from "next/link";
import { InfiniteSlider } from "@/app/components/motion-primitives/infinite-slider";
export const Footer = ({}: //   setActiveSection,
{
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  //   useEffect(() => {
  //     if (inView) setActiveSection("work");
  //   }, [inView, setActiveSection]);
  const year = new Date().getFullYear();
  return (
    <section
      id="faq"
      ref={ref}
      //   className="snap-start  flex flex-col justify-center bg-gray-50 px-6 sm:px-12"
      className="snap-start  bg-gray-50 border-t border-gray-200 px-6 sm:px-12 py-12 flex flex-col gap-8 text-gray-700"
    >
      {/* Contact Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 max-w-6xl mx-auto w-full">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Get in touch
          </h3>
          <a
            href="mailto:info@example.com"
            className="text-blue-600 hover:underline"
          >
            Littlebannerco@gmail.com
          </a>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-6xl mx-auto w-full border-gray-200">
        <Link
          href="/privacy-policy"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Privacy Policy
        </Link>
        <p className="text-sm text-gray-500">
          © {year} Little Banner Co. All rights reserved.
        </p>
      </div>
    </section>
  );
};
