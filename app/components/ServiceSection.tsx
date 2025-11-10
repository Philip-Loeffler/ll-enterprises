import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

type ColorPalettes = {
  label: string;
  colors: string[];
};
type Product = {
  name: string;
  description: string;
  image: string;
  productName: "NameBanner" | "MiniNameBanner";
  colorPalettes: ColorPalettes[];
  priceMap?: any;
};

const returnPrice = (priceMap: Record<string, number>, item: number) => {
  if (priceMap) {
    return priceMap[item] || 0;
  }
};
const products: Product[] = [
  {
    name: "Custom Banner",
    description:
      "Custom felt letter banners for your child’s room or special occasion. Letters size: 5.5 x 5.5 inches. Choose any name or word!",
    image: "/name_banner.png",
    productName: "NameBanner",
    colorPalettes: [
      {
        label: "Autumn Palette",
        colors: ["#C97E63", "#D8B384", "#EFD9B4"],
      },
      {
        label: "Winter Palette",
        colors: ["#A3C9D9", "#FFFFFF", "#4F6D7A"],
      },
      {
        label: "Choose Colors",
        colors: ["#E76F51", "#2A9D8F", "#E9C46A"],
      },
    ],
    priceMap: { "0": 0, "1": 20, "2": 28, "3": 40, "4": 48, "5": 55 },
  },
  {
    name: "Custom Mini",
    description:
      "A smaller, lightweight version perfect for nurseries, doors, or gifting.  Letters size: 4 x 4 inches.",
    image: "/mini_name_banner.png",
    productName: "MiniNameBanner",
    colorPalettes: [
      {
        label: "Autumn Palette",
        colors: ["#C97E63", "#D8B384", "#EFD9B4"],
      },
      {
        label: "Winter Palette",
        colors: ["#A3C9D9", "#FFFFFF", "#4F6D7A"],
      },
      {
        label: "Choose Colors",
        colors: ["#E76F51", "#2A9D8F", "#E9C46A"],
      },
    ],
    priceMap: { "0": 0, "1": 15, "2": 20, "3": 33, "4": 38, "5": 5 },
  },
  {
    name: "Happy Birthday",
    description: "",
    image: "/happy_birthday.png",
    productName: "NameBanner",
    colorPalettes: [
      {
        label: "Autumn Palette",
        colors: ["#C97E63", "#D8B384", "#EFD9B4"],
      },
      {
        label: "Winter Palette",
        colors: ["#A3C9D9", "#FFFFFF", "#4F6D7A"],
      },
      {
        label: "Choose Colors",
        colors: ["#E76F51", "#2A9D8F", "#E9C46A"],
      },
    ],
  },

  {
    name: "Christmas",
    description: "",
    image: "/christmas_banner.png",
    productName: "NameBanner",
    colorPalettes: [
      {
        label: "Christmas Palette",
        colors: ["#B00015", "#105F2F"],
      },
    ],
  },
  {
    name: "Milestone",
    description: "",
    image: "/milestone_banner.png",
    productName: "MiniNameBanner",
    colorPalettes: [
      {
        label: "Milestone Palette",
        colors: ["#F5AA01", "#EACCCA", "#EBECE6"],
      },
    ],
  },
  {
    name: "XOXOXO",
    description: "",
    image: "/xoxo_banner.png",
    productName: "NameBanner",
    colorPalettes: [
      {
        label: "XOXOXO Palette",
        colors: ["#EBECE6", "#B00015", "#FF71B2"],
      },
    ],
  },
];

const customColors = [
  "#B00015",
  "#AF3484",
  "#A7A2A8",
  "#202660",
  "#EBECE6",
  "#FF71B2",
  "#488238",
  "#9CACC3",
  "#BCDC5D",
  "#DAD8DD",
  "#043424",
  "#382D67",
  "#F5AA01",
  "#EACCCA",
  "#AB92BC",
  "#F79383",
  "#572933",
  "#9F6E2C",
  "#E0C601",
  "#9DEFD9",
  "#C05D39",
  "#CC174E",
  "#0154AC",
  "#535841",
  "#B9A091",
  "#37353A",
  "#121212",
  "#818663",
  "#105F2F",
  "#684438",
  "#8D492C",
  "#028AB8",
];

const fontOptions = [
  { label: "Cooper Black", value: "'Cooper Black', serif" },
  {
    label: "Franklin Gothic Demi Cond",
    value: "'Franklin Gothic Demi Cond', sans-serif",
  },
  { label: "WR Buruh Kota", value: "'WR Buruh Kota', sans-serif" },
];

const services = [
  {
    id: "commercial-lighting",
    title: "Commercial Lighting Installation",
    description:
      "Professional lighting solutions for businesses, warehouses, and commercial spaces. From LED retrofits to complete lighting systems, we ensure optimal illumination and energy efficiency for your commercial property.",
  },
  {
    id: "generator",
    title: "Generator Installing",
    description:
      "Reliable backup power solutions for your home or business. We install and maintain standby generators to keep your property powered during outages, ensuring uninterrupted operation when you need it most.",
  },
  {
    id: "wiring",
    title: "Wiring",
    description:
      "Expert electrical wiring services for new construction, renovations, and upgrades. Our certified electricians ensure safe, code-compliant installations for residential and commercial properties.",
  },
  {
    id: "residential-lighting",
    title: "Residential Lighting Installs and Repairs",
    description:
      "Transform your home with custom lighting solutions. From recessed lighting and chandeliers to outdoor security lights, we handle all your residential lighting needs with precision and care.",
  },
  {
    id: "service-changes",
    title: "Service Changes",
    description:
      "Upgrade your electrical service panel to meet modern power demands. We handle panel replacements, upgrades, and expansions to ensure your electrical system is safe and up to code.",
  },
  {
    id: "general-services",
    title: "General Electric Services",
    description:
      "Comprehensive electrical services for all your needs. From troubleshooting and repairs to installations and maintenance, our experienced team provides reliable solutions for any electrical challenge.",
  },
  {
    id: "ev-charger",
    title: "EV Charger Services",
    description:
      "Professional EV charging station installation for your home or business. We install Level 2 chargers with proper wiring and circuit protection, making electric vehicle charging convenient and safe.",
  },
  {
    id: "lighting-installation",
    title: "Lighting Installation",
    description:
      "Expert installation of all types of lighting fixtures. Whether indoor or outdoor, decorative or functional, we bring your lighting vision to life with quality workmanship and attention to detail.",
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
      className="snap-start min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20"
    >
      <h2 className="text-6xl font-bold mb-4 text-center text-white">
        Our Services
      </h2>
      <p className="text-xl text-gray-200 max-w-3xl text-center mb-12">
        Professional electrical services for residential and commercial needs
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        {/* Left Column - Accordion */}
        <div className="flex flex-col justify-center">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem key={service.id} value={service.id}>
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Column - Image Space */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[600px] bg-muted/20 rounded-2xl border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-lg">Service Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};
