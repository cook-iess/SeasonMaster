// Fetch testimonials
export async function fetchTestimonialsSection() {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const res = await fetch(`${STRAPI_URL}/api/testimonialss?populate=*`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch Testimonials');
    return res.json();
}