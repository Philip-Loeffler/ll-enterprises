import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Google Places API configuration
    const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    if (!GOOGLE_PLACE_ID || !GOOGLE_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Missing Google Places API credentials. Please set GOOGLE_PLACE_ID and GOOGLE_API_KEY in your environment variables.",
          debug: {
            hasPlaceId: !!GOOGLE_PLACE_ID,
            hasApiKey: !!GOOGLE_API_KEY,
          },
        },
        { status: 500 }
      );
    }

    // Fetch reviews from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total,name&key=${GOOGLE_API_KEY}`;

    console.log("Fetching from Google Places API...");
    console.log("Place ID:", GOOGLE_PLACE_ID);

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Google API Response Status:", data.status);
    console.log("Full API Response:", JSON.stringify(data, null, 2));

    // Handle different API statuses
    if (data.status === "INVALID_REQUEST") {
      return NextResponse.json(
        {
          error: "Invalid Place ID or API request",
          status: data.status,
          debug: {
            placeId: GOOGLE_PLACE_ID,
            message: data.error_message || "No error message provided",
          },
        },
        { status: 400 }
      );
    }

    if (data.status === "REQUEST_DENIED") {
      return NextResponse.json(
        {
          error: "API request denied. Check your API key and permissions.",
          status: data.status,
          debug: {
            message: data.error_message || "No error message provided",
          },
        },
        { status: 403 }
      );
    }

    if (data.status !== "OK") {
      return NextResponse.json(
        {
          error: `Google Places API error: ${data.status}`,
          debug: {
            status: data.status,
            message: data.error_message || "No error message provided",
          },
        },
        { status: 500 }
      );
    }

    // Check if reviews exist
    if (!data.result || !data.result.reviews) {
      console.log("No reviews found in API response");
      return NextResponse.json({
        reviews: [],
        averageRating: data.result?.rating || 0,
        totalRatings: data.result?.user_ratings_total || 0,
        message: "No reviews available for this location",
        debug: {
          hasResult: !!data.result,
          businessName: data.result?.name,
        },
      });
    }

    // Format reviews for frontend
    const reviews = data.result.reviews.slice(0, 3).map((review: any) => ({
      id: review.time,
      name: review.author_name,
      rating: review.rating,
      date: review.relative_time_description,
      text: review.text,
      avatar:
        review.author_name
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "??",
      profilePhoto: review.profile_photo_url,
    }));

    console.log(`Formatted ${reviews.length} reviews`);

    return NextResponse.json({
      reviews: reviews,
      averageRating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
      businessName: data.result.name,
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        reviews: [],
        debug: {
          errorMessage:
            error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 500 }
    );
  }
}
