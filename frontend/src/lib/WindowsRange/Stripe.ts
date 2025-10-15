export async function fetchWindowsRange() {
  const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
  const res = await fetch(`${STRAPI_URL}/api/windows-ranges?populate[windows_range_lists][populate]=*`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch Windows Range');
  return res.json();
}