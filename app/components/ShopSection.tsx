"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";

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
};
const products: Product[] = [
  {
    name: "Custom Name Banner",
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
  },
  {
    name: "Mini Name Banner",
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
  },
  {
    name: "Happy Birthday Banner",
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
    name: "Christmas Banner",
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
    name: "Milestone Banner",
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
    name: "XOXOXO Banner",
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

export const ShopSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [selectedPalette, setSelectedPalette] = useState<string | null>(null);
  const [fontStyle, setFontStyle] = useState<string>("sans-serif");
  const [letterColors, setLetterColors] = useState<Record<number, string>>({});

  useEffect(() => {
    if (inView) setActiveSection("shop");
  }, [inView, setActiveSection]);

  const handleNameChange = (val: string) => {
    setNameInput(val);
    // Allowing spaces but only counting letters for the quantity/price
    const lettersOnly = val.replace(/[^a-zA-Z]/g, "");
    setLetterCount(lettersOnly.length);
    setLetterColors({});
  };

  const handleColorAssign = (index: number, color: string) => {
    setLetterColors((prev) => ({ ...prev, [index]: color }));
  };

  const handleCheckout = async () => {
    if (!selectedProduct || letterCount === 0) return;
    setLoading(true);
    // Only map colors for actual letters
    const colorMapping = nameInput
      .split("")
      .filter((char) => char.match(/[a-zA-Z]/)) // Filter for letters only
      .map((char, i) => `${char}=${letterColors[i] || "default"}`)
      .join(", ");

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: selectedProduct.productName,
        quantity: letterCount,
        colorPalette: selectedPalette,
        fontStyle,
        customLetterColors: colorMapping,
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error(data.error);
      setLoading(false);
    }
  };

  return (
    <section
      id="shop"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center justify-center bg-gray-50 px-6 sm:px-12 md:mt-0 mt-100"
    >
      <h2 className="text-6xl text-gray-900 md:mt-0 font-bold mb-4">
        Custom names for you
      </h2>
      <p className="max-w-2xl text-center text-gray-500 mb-8">
        Choose an option for our textile professionals to start creating
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-8">
        {products.map((product) => (
          <Dialog key={product.name}>
            <DialogTrigger
              asChild
              onClick={() => {
                setSelectedProduct(product);
                setNameInput("");
                setLetterCount(0);
                setSelectedPalette(null);
                setFontStyle("sans-serif");
                setLetterColors({});
              }}
            >
              <div
                className={`rounded-2xl p-6 md:p-12 flex flex-col cursor-pointer transition-transform hover:scale-105 ${
                  product.name === "Custom Name Banner"
                    ? "bg-orange-100"
                    : "bg-gray-100"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="rounded-lg object-cover"
                />
                <p className="text-lg flex justify-center pt-10 font-semibold">
                  {product.name}
                </p>
              </div>
            </DialogTrigger>

            {/* --- DIALOG CONTENT --- */}
            <DialogContent className="max-h-[85vh] overflow-y-auto lg:max-w-5xl">
              {selectedProduct && (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* LEFT SIDE: Banner Simulation Preview - **UPDATED** */}
                  <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-100 rounded-2xl p-6 relative h-[400px]">
                    {/* Centered container for string and letters */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
                      {/* Curved string using SVG - **UPDATED POSITIONING** */}
                      {/* Anchor the SVG's path in the middle of this container */}
                      <svg
                        className="absolute w-full"
                        height="100"
                        viewBox="0 0 600 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ top: "50%", transform: "translateY(-50%)" }} // Vertical centering
                      >
                        <path
                          d="M0,50 Q300,80 600,50" // Adjusted Q point for flatter curve near vertical center (50)
                          stroke="#9CA3AF"
                          strokeWidth="3"
                          fill="transparent"
                        />
                      </svg>

                      {nameInput ? (
                        <div
                          className="flex justify-center items-center gap-4 relative"
                          style={{ fontFamily: fontStyle, height: "100px" }} // Added height to ensure space for letters
                        >
                          {nameInput.split("").map((char, i) => (
                            <div
                              key={i}
                              className="flex flex-col items-center relative"
                            >
                              {/* Felt letter - **ADJUSTED TO HANG** */}
                              {/* The letter's parent div is vertically centered by items-center */}
                              <span
                                className="text-7xl font-bold px-2 select-none z-10"
                                style={{
                                  color: letterColors[i] || "#000",
                                  // This rotates the letter slightly for a hanging effect
                                  transform: `rotate(${
                                    Math.sin(i) * 5
                                  }deg) translateY(10px)`, // Pushed down 10px to "hang" off the line
                                  lineHeight: "1", // Reduce line height to keep it snug
                                }}
                              >
                                {char}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-center relative z-10">
                          Start typing a name to preview it here
                        </p>
                      )}
                    </div>
                  </div>

                  {/* RIGHT SIDE: FORM */}
                  <div className="flex-1">
                    <DialogHeader>
                      <DialogTitle>{selectedProduct.name}</DialogTitle>
                      <DialogDescription>
                        {selectedProduct.description}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Name Input */}
                    <div className="mt-4">
                      <label className="block font-medium mb-2">
                        Enter the name you want made out of felt:
                      </label>
                      <input
                        type="text"
                        value={nameInput}
                        onChange={(e) => handleNameChange(e.target.value)}
                        placeholder="e.g., Emma"
                        className="w-full border rounded-md px-3 py-2"
                      />
                      {nameInput && (
                        <p className="mt-2 text-sm text-gray-600">
                          Letter count:{" "}
                          <span className="font-semibold">{letterCount}</span>
                        </p>
                      )}
                    </div>

                    {/* Font selection */}
                    <div>
                      <p className="font-medium mb-2 mt-2">
                        Choose Font Style:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {fontOptions.map((font) => (
                          <button
                            key={font.value}
                            onClick={() => setFontStyle(font.value)}
                            style={{ fontFamily: font.value }}
                            className={`border rounded-md px-4 py-2 text-lg transition ${
                              fontStyle === font.value
                                ? "ring-2 ring-blue-600 bg-blue-50"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {font.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Palettes */}
                    <div className="mt-6">
                      <p className="font-medium mb-2">Choose Colors:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {product.colorPalettes.map((palette) => (
                          <button
                            key={palette.label}
                            onClick={() => setSelectedPalette(palette.label)}
                            className={`border rounded-lg p-3 flex flex-col items-center justify-center gap-2 transition ${
                              selectedPalette === palette.label
                                ? "ring-2 ring-blue-600 bg-blue-50"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <span className="font-medium text-sm">
                              {palette.label}
                            </span>
                            <div className="flex gap-1">
                              {palette.colors.map((c) => (
                                <div
                                  key={c}
                                  className="w-4 h-4 rounded-full border"
                                  style={{ backgroundColor: c }}
                                />
                              ))}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Per-letter colors - **CONTAINER ALWAYS RENDERED** */}
                    {/* The content inside is conditionally rendered/hidden using Tailwind classes */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        nameInput && selectedPalette === "Choose Colors"
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <p className="font-medium mb-2">
                        Or assign custom colors per letter:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {nameInput.split("").map((char, i) => (
                          <Dialog key={i}>
                            <DialogTrigger asChild>
                              {/* Only show trigger button if it's a letter */}
                              {char.match(/[a-zA-Z]/) && (
                                <button className="w-16 h-16 border-2 border-black bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                                  <span
                                    className="text-4xl font-bold"
                                    style={{
                                      fontFamily: fontStyle,
                                      color: letterColors[i] || "#000",
                                    }}
                                  >
                                    {char}
                                  </span>
                                </button>
                              )}
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-sm max-h-[85vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>
                                  Choose Color for "{char}"
                                </DialogTitle>
                                <DialogDescription>
                                  Select a color for this letter
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid grid-cols-3 gap-4 py-4 h-96 overflow-y-scroll pr-2">
                                {customColors.map((color) => (
                                  <button
                                    key={color}
                                    onClick={() => handleColorAssign(i, color)}
                                    className={`w-full h-20 rounded-lg border-2 transition-all ${
                                      letterColors[i] === color
                                        ? "ring-4 ring-blue-500 border-blue-500 scale-105"
                                        : "border-gray-300 hover:scale-105"
                                    }`}
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    Done
                                  </button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                    </div>

                    {/* Checkout buttons */}
                    <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleCheckout}
                        disabled={
                          loading || letterCount === 0 || !selectedPalette
                        }
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 w-full sm:w-auto"
                      >
                        {loading ? "Redirecting..." : "Buy Now"}
                      </button>
                      <DialogClose asChild>
                        <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                          Cancel
                        </button>
                      </DialogClose>
                    </DialogFooter>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};
