import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-09-30.clover",
});

enum ProductName {
  NAMEBANNER = "NameBanner",
  MINNAMEBANNER = "MiniNameBanner",
}

const productPriceMap: Record<ProductName, number> = {
  [ProductName.NAMEBANNER]: 2000,
  [ProductName.MINNAMEBANNER]: 1500,
};

export async function POST(req: Request) {
  try {
    const {
      productName,
      quantity = 1,
      customName,
      colorPalette,
      customLetterColors,
      fontStyle,
    } = await req.json();
    // Validate productName
    if (!productName) {
      return NextResponse.json(
        { error: "Invalid or missing productName" },
        { status: 400 }
      );
    }
    const unitAmount = productPriceMap[productName as ProductName];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: `Customers name: ${customName} | Colors: ${colorPalette} | Custom Letter Colors: ${customLetterColors} | Font Style: ${fontStyle}`,
            },

            unit_amount: unitAmount,
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
