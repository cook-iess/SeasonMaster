import Hero from "@/components/Home/Hero";
import { fetchHomePage, fetchGoogleRating, fetchUnderHero } from "@/lib/homeSectionStrapi";
import UnderHeroSec from "@/components/Home/underHeroSec";

export default async function HomePage() {
  const [homeRes, ratingRes, underHeroRes] = await Promise.all([
    fetchHomePage(),
    fetchGoogleRating(),
    fetchUnderHero(),
  ]);

  const home = homeRes.data;
  const rating = ratingRes.data;
  const underHero = underHeroRes.data;

  return (
    <main className="bg-white">
      <Hero home={home} rating={rating} />
      <UnderHeroSec items={underHero} />
      {/* will continue */}
    </main>
  );
}
