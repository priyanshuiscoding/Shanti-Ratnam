const GOOGLE_REVIEWS_FALLBACK_URL =
  "https://www.google.com/maps/place/Shanti+Ratnam/@23.8575549,78.7958644,17z/data=!3m1!4b1!4m6!3m5!1s0x3978d15d0b823b3f:0xfbbae15f9ad773d6!8m2!3d23.85755!4d78.7984393!16s%2Fg%2F11pzx4mwvs?entry=tts";

export async function getLiveGoogleReviews(locale = "en") {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "name,rating,user_ratings_total,reviews,url",
    reviews_sort: "newest",
    language: locale === "hi" ? "hi" : "en",
    key: apiKey
  });

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    if (data.status !== "OK" || !data.result) {
      return null;
    }

    const result = data.result;
    const reviews = (result.reviews || []).slice(0, 6).map((item) => ({
      name: item.author_name || "Google User",
      rating: Number(item.rating) || 5,
      text: item.text || "",
      timeAgo: item.relative_time_description || ""
    }));

    return {
      rating: Number(result.rating) || null,
      totalRatings: Number(result.user_ratings_total) || null,
      placeUrl: result.url || GOOGLE_REVIEWS_FALLBACK_URL,
      reviews
    };
  } catch {
    return null;
  }
}

export { GOOGLE_REVIEWS_FALLBACK_URL };
