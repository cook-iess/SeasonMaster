import Hero from "@/components/Home/Hero";
import { fetchHomePage, fetchGoogleRating, fetchUnderHero } from "@/lib/Home/Strapi";
import UnderHeroSec from "@/components/Home/underHeroSec";
import { fetchAreasServiced, fetchRegions } from "@/lib/AreasServiced/Strapi";
import AreasWeService from "@/components/AreasWeService";

export default async function HomePage() {
  const [homeRes, ratingRes, underHeroRes, areasRes,
    regionsRes,] = await Promise.all([
      fetchHomePage(),
      fetchGoogleRating(),
      fetchUnderHero(),
      fetchAreasServiced(),
      fetchRegions(),
    ]);

  const home = homeRes.data;
  const rating = ratingRes.data;
  const underHero = underHeroRes.data;
  const area = areasRes.data;
  const region = regionsRes.data;

  return (
    <main className="bg-white">
      <Hero home={home} rating={rating} />
      <UnderHeroSec items={underHero} />
      <AreasWeService
        mainData={area}
        regions={region}
        rating={rating}
      />
      {/* will continue */}
    </main>
  );
}
