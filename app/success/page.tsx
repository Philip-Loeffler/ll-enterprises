// "use client";

// import { useState } from "react";

// export default function SuccessPage() {
//   const [loading, setLoading] = useState(false);

//   const handleCheckout = async () => {
//     setLoading(true);
//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ quantity: 1 }),
//     });

//     const data = await res.json();
//     if (data.url) {
//       window.location.href = data.url; // Redirect to Stripe Checkout
//     } else {
//       console.error(data.error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Products</h1>
//       <p className="mb-6">Get our awesome product for $20</p>
//       <button
//         onClick={handleCheckout}
//         disabled={loading}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Redirecting..." : "Buy Now"}
//       </button>
//     </div>
//   );
// }

//staying here so i know how to do pages
