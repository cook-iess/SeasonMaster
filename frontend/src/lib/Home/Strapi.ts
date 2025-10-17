const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

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

// Fetch content under hero section
export async function fetchUnderHero() {
  const res = await fetch(`${STRAPI_URL}/api/frame-2s`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch Frame 2 data');
  return res.json();
}