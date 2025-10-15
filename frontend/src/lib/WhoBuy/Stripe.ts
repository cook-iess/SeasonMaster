// fetch ShoppingAs section
export async function fetchShoppingAsSection() {
  const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
  const res = await fetch(`${STRAPI_URL}/api/shopping-asas?populate[shopping_as_lists][populate]=*`, {
      next: { revalidate: 3600 },
    });
  if (!res.ok) throw new Error('Failed to fetch Shopping As section');
  return res.json();
}