// fetch why choose us section
export async function fetchWhyChooseSection() {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const res = await fetch(`${STRAPI_URL}/api/why-chooses?populate=*`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch Why Choose section');
    return res.json();
}