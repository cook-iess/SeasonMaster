import Image from "next/image";
import Hero from "@/components/Home/Hero";
import { fetchHomePage, fetchGoogleRating } from "@/lib/homePageStrapi";

export default async function HomePage() {
  const [homeRes, ratingRes] = await Promise.all([
    fetchHomePage(),
    fetchGoogleRating(),
  ]);

  const home = homeRes.data;
  const rating = ratingRes.data;

  return (
    <main>
      <Hero home={home} rating={rating} />
      {/* will continue */}
    </main>
  );
}
