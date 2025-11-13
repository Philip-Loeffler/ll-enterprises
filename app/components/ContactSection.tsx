"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";

export const ContactSection = ({
  setActiveSection,
}: {
  setActiveSection: (s: string) => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (inView) setActiveSection("contact");
  }, [inView, setActiveSection]);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success modal
        setShowSuccessModal(true);
        // Trigger confetti
        triggerConfetti();
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const data = await response.json();
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20 bg-white"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-6xl font-bold mb-4 text-black text-center">
          How Can We Help
        </h2>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Get in touch for electrical services
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-200"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#550000]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#550000]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#550000]"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#550000] resize-none"
              placeholder="Tell us about your electrical needs..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#550000" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#440000")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#550000")
            }
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Message Sent! 🎉
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Thank you for reaching out! We&apos;ll get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              style={{ backgroundColor: "#550000" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#440000")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#550000")
              }
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
