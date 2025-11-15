"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { ScrollInFromLeft } from "./ui/scrollInFromLeft";

const services = [
  {
    id: "residential",
    title: "Residential",
    image: "/assets/service_1.jpeg",
    intro: `We're proud to serve homeowners across Greater Cleveland with safe, reliable, and high-quality electrical work. Whether you're remodeling, upgrading, or starting from the ground up, you can count on our 34+ years of experience.`,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            New Electrical Service
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>New construction wiring</li>
            <li>Home remodeling projects</li>
            <li>Room additions and renovations</li>
            <li>Outdoor structures, garages, and patios</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Home Upgrades & Repairs
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Fuse and breaker panel upgrades</li>
            <li>Historic home wiring updates</li>
            <li>Outlet & switch repairs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Energy-Efficient Solutions
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>LED lighting conversions</li>
            <li>Dimmer installation</li>
            <li>Smart home automation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Receptacle & Safety Concerns
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Discolored or charred outlets</li>
            <li>Sparking outlets</li>
            <li>Frequently tripping breakers</li>
            <li>Warm-to-touch outlets</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            EV Charger Installation
          </h4>
          <p>Full EV charging station setup for your home.</p>
        </div>
      </div>
    ),
  },
  {
    id: "commercial",
    title: "Commercial",
    image: "/assets/service_2.jpeg",
    intro: `We've proudly supported local businesses across Northeast Ohio for more than 30 years with reliable, professional electrical solutions.`,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Data & Communication Lines
          </h4>
          <p>
            Ensure your business stays connected with structured and organized
            cabling.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Office Lighting
          </h4>
          <p>Custom lighting design and upgrades for office environments.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Warehouse Lighting
          </h4>
          <p>Efficient, high-visibility lighting solutions for warehouses.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Commercial Kitchen Wiring
          </h4>
          <p>Safe, compliant wiring for restaurants and commercial kitchens.</p>
        </div>
      </div>
    ),
  },
  {
    id: "custom-homes",
    title: "Custom Homes",
    image: "/assets/service_3.jpeg",
    intro: `We bring over 30 years of craftsmanship to custom home electrical design — safe, beautiful, and built to last.`,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Lighting Design & Installation
          </h4>
          <p>Premium indoor and outdoor lighting tailored to your home.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Smart Home Integration
          </h4>
          <p>Whole-home automation, smart switches, and modern controls.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
            Panel & Power Distribution
          </h4>
          <p>Future-ready panel setups for modern electrical demands.</p>
        </div>
      </div>
    ),
  },
  {
    id: "areas-we-serve",
    title: "Areas We Serve",
    image: "/assets/suburb.jpg",
    intro: `Proudly serving communities across Cuyahoga, Lake, Geauga, and Ashtabula counties.`,
    content: (
      <div className="space-y-6">
        {/* Cuyahoga County */}
        <div>
          <h4
            className="font-semibold text-lg mb-3"
            style={{ color: "#550000" }}
          >
            Cuyahoga County Communities
          </h4>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-sm mb-1">Cities:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bay Village, Beachwood, Bedford, Bedford Heights, Berea, Brook
                Park, Brooklyn, Cleveland, Cleveland Heights, East Cleveland,
                Euclid, Fairview Park, Garfield Heights, Highland Heights,
                Independence, Lakewood, Lyndhurst, Maple Heights, Mayfield
                Heights, Middleburg Heights, North Olmsted, North Royalton,
                Olmsted Falls, Parma, Parma Heights, Rocky River, Seven Hills,
                Shaker Heights, Solon, South Euclid, Strongsville, University
                Heights, Warrensville Heights, Westlake
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Villages:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bentleyville, Bratenahl, Broadview Heights, Brooklyn Heights,
                Chagrin Falls, Cuyahoga Heights, Glenwillow, Highland Hills,
                Hunting Valley (part), Mayfield, Moreland Hills, Newburgh
                Heights, North Randall, Oakwood, Orange, Valley View, Walton
                Hills, Woodmere
              </p>
            </div>
          </div>
        </div>

        {/* Lake County */}
        <div>
          <h4
            className="font-semibold text-lg mb-3"
            style={{ color: "#550000" }}
          >
            Lake County Communities
          </h4>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-sm mb-1">Cities:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Eastlake, Kirtland, Mentor, Painesville, Wickliffe, Willoughby,
                Willowick
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Villages:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Fairport Harbor, Grand River, Kirtland Hills, Lakeline, Madison,
                North Perry, Timberlake, Waite Hill, Perry
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Townships:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Concord Township, Leroy Township, Madison Township, Painesville
                Township, Perry Township
              </p>
            </div>
          </div>
        </div>

        {/* Geauga County */}
        <div>
          <h4
            className="font-semibold text-lg mb-3"
            style={{ color: "#550000" }}
          >
            Geauga County Communities
          </h4>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-sm mb-1">Cities:</p>
              <p className="text-sm text-gray-700 leading-relaxed">Chardon</p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Villages:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Aquilla, Bainbridge, Burton, Hunting Valley (part), Middlefield,
                South Russell
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Townships:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Auburn Township, Bainbridge Township, Burton Township, Chester
                Township, Chardon Township, Claridon Township, Hambden Township,
                Huntsburg Township, Middlefield Township, Montville Township,
                Munson Township, Newbury Township, Parkman Township, Russell
                Township, Thompson Township, Troy Township
              </p>
            </div>
          </div>
        </div>

        {/* Ashtabula County */}
        <div>
          <h4
            className="font-semibold text-lg mb-3"
            style={{ color: "#550000" }}
          >
            Ashtabula County Communities
          </h4>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-sm mb-1">Cities:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ashtabula, Conneaut, Geneva
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Villages:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Andover, Geneva-on-the-Lake, Jefferson, North Kingsville,
                Orwell, Roaming Shores
              </p>
            </div>
            <div>
              <p className="font-medium text-sm mb-1">Townships:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Andover Township, Ashtabula Township, Austinburg Township,
                Cherry Valley Township, Colebrook Township, Denmark Township,
                Dorset Township, Geneva Township, Harpersfield Township,
                Hartsgrove Township, Jefferson Township, Kingsville Township,
                Lenox Township, Monroe Township, Morgan Township, New Lyme
                Township, Orwell Township, Pierpont Township, Plymouth Township,
                Richmond Township, Rome Township, Saybrook Township, Sheffield
                Township, Trumbull Township, Wayne Township, Williamsfield
                Township, Windsor Township
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const ServiceSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveSection("service");
  }, [inView, setActiveSection]);

  return (
    <section
      id="service"
      ref={ref}
      className="min-h-screen flex flex-col items-center px-6 sm:px-12 py-20 bg-white"
    >
      <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-center text-black">
        Our Services
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl text-center mb-12">
        Professional electrical services for residential and commercial needs
      </p>
      <ScrollInFromLeft>
        <div className="max-w-7xl w-full space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12"
            >
              {/* MOBILE FIRST → Image on top */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-2xl shadow-md mb-6 lg:mb-0"
              />

              {/* Text + Accordion */}
              <div>
                <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.intro}
                </p>

                <Accordion type="single" collapsible>
                  <AccordionItem value={`${service.id}-content`}>
                    <AccordionTrigger className="text-lg font-semibold text-black">
                      {service.title}{" "}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 text-gray-700">
                      {service.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </ScrollInFromLeft>
    </section>
  );
};
