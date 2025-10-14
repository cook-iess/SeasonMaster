const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

// Fetch homepage content
export async function fetchHomePage() {
  const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch home page');
  return res.json();
}

// Fetch Google rating
export async function fetchGoogleRating() {
  const res = await fetch(`${STRAPI_URL}/api/google-rating?populate=*`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch Google rating');
  return res.json();
}