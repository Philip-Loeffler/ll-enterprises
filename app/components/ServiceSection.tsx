import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const services = [
  {
    id: "residential",
    title: "Residential",
    description: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>
            We're proud to serve homeowners across Greater Cleveland with safe,
            reliable, and high-quality electrical work. Whether you're
            remodeling, upgrading, or starting from the ground up, you can count
            on our 34+ years of experience to get the job done right.
          </p>

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
              <li>
                Fuse and breaker panel upgrades — especially important for older
                homes or when experiencing frequent power surges
              </li>
              <li>
                Historic home wiring updates for enhanced safety and reliability
              </li>
              <li>Outlet and switch repair or new installations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Energy-Efficient Solutions
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>LED lighting conversions</li>
              <li>Dimmer and lighting control installation</li>
              <li>Smart home automation systems</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Receptacle & Safety Concerns
            </h4>
            <p className="mb-2">
              If you notice any of the following, it's time to call a licensed
              electrician:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Discolored or charred outlets</li>
              <li>Sparking when plugging in devices</li>
              <li>Circuit breakers that frequently trip</li>
              <li>Outlets that feel warm to the touch</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Full Home Electrical Upgrades
            </h4>
            <p>
              Whether you've discovered electrical issues during a remodel or
              recently purchased an older home, our experienced team provides
              complete home electrical upgrades. We ensure your system is safe,
              efficient, and ready for modern living.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              EV Charger Installation
            </h4>
            <p>
              Power your future with expert installation of home EV charging
              stations — fast, reliable, and customized to your vehicle and
              setup.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/service_1.jpeg"
            alt="Residential Electrical Services"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: "commercial",
    title: "Commercial",
    description: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>
            We've proudly supported local businesses across Northeast Ohio for
            more than 30 years with reliable, professional electrical solutions.
            From small business build-outs to large commercial projects, we
            deliver craftsmanship, safety, and efficiency — every time.
          </p>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Data & Communication Lines
            </h4>
            <p>
              Ensure your business runs smoothly with properly installed and
              organized data, phone, and communication lines. We provide clean,
              efficient wiring setups that keep your operations connected and
              dependable.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Office Lighting
            </h4>
            <p>
              Every office has unique lighting needs. Whether you're upgrading
              fixtures, repairing outdated wiring, or scheduling a safety
              inspection, we bring over 35 years of expertise and
              professionalism to every project.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Warehouse Lighting
            </h4>
            <p>
              Lighting can make or break workflow and safety in warehouse
              environments. We design and install efficient lighting systems
              that keep your facility well-lit and energy-conscious — helping
              you lower costs while improving visibility and productivity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Commercial Kitchen Wiring
            </h4>
            <p>
              From restaurants to cafeterias, reliable electrical systems are
              essential to smooth operations. We provide safe, compliant, and
              durable wiring solutions that support commercial kitchen equipment
              and maintain uptime.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Small Business Build-Outs
            </h4>
            <p>
              Whether you're opening a new space or renovating an existing one,
              we provide complete electrical design and installation from the
              ground up — done right the first time, with lasting results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Exterior Lighting
            </h4>
            <p>
              Make a lasting first impression and keep your property safe. We
              install, repair, and upgrade outdoor lighting systems to ensure
              parking lots, walkways, and building exteriors are well-lit,
              welcoming, and secure for customers and employees alike.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/service_2.jpeg"
            alt="Commercial Electrical Services"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: "custom-homes",
    title: "Custom Homes",
    description: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>
            Building a custom home is about more than construction — it's about
            creating spaces that reflect your vision, lifestyle, and values.
            With over 30 years of experience partnering directly with homeowners
            and small builders, we take pride in providing electrical
            craftsmanship that brings your dream home to life — safely,
            beautifully, and efficiently.
          </p>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              New Construction Electrical Design
            </h4>
            <p>
              From blueprint to final inspection, we work hand-in-hand with your
              builder or design team to plan and install a complete electrical
              system tailored to your home's layout and future needs. Every
              wire, outlet, and fixture is installed with precision and care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Lighting Design & Installation
            </h4>
            <p>
              Lighting can define a home's atmosphere. We help design and
              install indoor and outdoor lighting that blends function with
              style — including recessed, accent, landscape, and specialty
              lighting to make your home truly shine.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Smart Home & Technology Integration
            </h4>
            <p>
              We install smart switches, lighting controls, whole-home
              automation systems, and integrated technology that bring comfort
              and convenience to everyday living.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Panel & Power Distribution
            </h4>
            <p>
              Your custom home deserves a system built to handle modern demands.
              We ensure proper load balance, safe panel setup, and future-ready
              capacity for EV chargers, additions, or new technologies down the
              road.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Luxury & Specialty Features
            </h4>
            <p>
              Whether it's heated floors, pool and spa wiring, or designer
              fixture installations, we deliver premium-quality electrical
              solutions that complement your home's unique features and finish.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2" style={{ color: "#550000" }}>
              Builder Partnerships
            </h4>
            <p>
              We partner with small builders and renovation specialists who
              value reliability, clear communication, and superior workmanship.
              Our team ensures each project is completed on time, to code, and
              to the highest standard — because reputation matters.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/assets/service_3.jpeg"
            alt="Custom Homes Electrical Services"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: "areas-we-serve",
    title: "Areas We Serve",
    description: (
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
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) setActiveSection("service");
  }, [inView, setActiveSection]);

  return (
    <section
      id="service"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20 bg-white"
    >
      <h2 className="text-6xl font-bold mb-4 text-center text-black">
        Our Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl text-center mb-12">
        Professional electrical services for residential and commercial needs
      </p>

      <div className="max-w-7xl w-full">
        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => (
            <AccordionItem key={service.id} value={service.id}>
              <AccordionTrigger className="text-lg font-semibold text-black hover:opacity-70">
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
