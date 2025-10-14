const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

// Fetch Areas We Service
export async function fetchAreasServiced() {
  const res = await fetch(`${STRAPI_URL}/api/areas-serviced?populate=*`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch Areas Serviced');
  return res.json();
}

// Fetch Regions
export async function fetchRegions() {
  const res = await fetch(`${STRAPI_URL}/api/areas-serviced2s?populate=*`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch Regions');
  return res.json();
}