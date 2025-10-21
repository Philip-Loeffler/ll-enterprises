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
} from "../components/ui/dialog"; // adjust this import path based on where your Dialog is located
type Product = {
  name: string;
  description: string;
  image: string;
  productName: "NameBanner" | "MiniNameBanner";
};

const products: Product[] = [
  {
    name: "Custom Name Banner",
    description:
      "Custom felt letter banners for your child’s room or special occasion. Choose any name or word!",
    image: "/name_banner.png",
    productName: "NameBanner",
  },
  {
    name: "Mini Name Banner",
    description:
      "A smaller, lightweight version perfect for nurseries, doors, or gifting.",
    image: "/mini_name_banner.png",
    productName: "MiniNameBanner",
  },
  {
    name: "Happy Birthday Banner",
    description:
      "Kickstart your custom felt creation and bring your vision to life.",
    image: "/happy_birthday.png",
    productName: "NameBanner",
  },
];

const colorPalettes = [
  {
    label: "Autumn Palette",
    colors: ["#C97E63", "#D8B384", "#EFD9B4"],
  },
  {
    label: "Winter Palette",
    colors: ["#A3C9D9", "#FFFFFF", "#4F6D7A"],
  },
  {
    label: "Random Colors",
    colors: ["#E76F51", "#2A9D8F", "#E9C46A"],
  },
];

export const ServicesSection = ({
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

  useEffect(() => {
    if (inView) setActiveSection("services");
  }, [inView, setActiveSection]);

  // count letters only (ignore spaces & special chars)
  const handleNameChange = (val: string) => {
    setNameInput(val);
    const lettersOnly = val.replace(/[^a-zA-Z]/g, "");
    setLetterCount(lettersOnly.length);
  };

  const handleCheckout = async () => {
    if (!selectedProduct || letterCount === 0) return;

    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: selectedProduct.productName,
        quantity: letterCount,
        colorPalette: selectedPalette, // Include selected palette in checkout data
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
      id="services"
      ref={ref}
      className="snap-start h-screen flex flex-col items-center justify-center bg-white"
    >
      <h2 className="text-5xl font-bold mb-4">Customize Names for you</h2>
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
              }}
            >
              <div
                className={`rounded-2xl p-12  flex flex-col cursor-pointer transition-transform hover:scale-105 ${
                  product.name === "Start Today"
                    ? "bg-black text-white"
                    : product.name === "Custom Name Banner"
                    ? "bg-orange-100"
                    : "bg-gray-100"
                }`}
              >
                {/* <div className="w-full sm:w-1/3 flex justify-center items-center"> */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={380}
                  height={280}
                  className="rounded-lg object-cover"
                />
                {/* </div> */}
                <p className="text-lg flex justify-center pt-10 font-semibold">
                  {product.name}
                </p>
              </div>
            </DialogTrigger>

            <DialogContent>
              {selectedProduct && (
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Info */}
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

                    {/* Color Palette Selection */}
                    <div className="mt-6">
                      <p className="font-medium mb-2">Choose Colors:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {colorPalettes.map((palette) => (
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

                    {/* Checkout Button */}
                    <DialogFooter className="mt-6">
                      <button
                        onClick={handleCheckout}
                        disabled={
                          loading || letterCount === 0 || !selectedPalette
                        }
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                      >
                        {loading ? "Redirecting..." : "Buy Now"}
                      </button>
                      <DialogClose asChild>
                        <button className="border px-4 py-3 rounded-lg hover:bg-gray-100">
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
