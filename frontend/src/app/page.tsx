import Hero from "@/components/Home/Hero";
import { fetchHomePage, fetchGoogleRating, fetchUnderHero } from "@/lib/Home/Strapi";
import { fetchAreasServiced, fetchRegions } from "@/lib/AreasServiced/Strapi";
import { fetchTrustedSection } from "@/lib/Trusted/Stripe";
import UnderHeroSec from "@/components/Home/underHeroSec";
import AreasWeService from "@/components/AreasWeService";
import TrustedSection from "@/components/TrustedSection";

export default async function HomePage() {
  const [homeRes, ratingRes, underHeroRes, areasRes,
    regionsRes, trustedRes,] = await Promise.all([
      fetchHomePage(),
      fetchGoogleRating(),
      fetchUnderHero(),
      fetchAreasServiced(),
      fetchRegions(),
      fetchTrustedSection(),
    ]);

  const home = homeRes.data;
  const rating = ratingRes.data;
  const underHero = underHeroRes.data;
  const area = areasRes.data;
  const region = regionsRes.data;
  const trustedData = trustedRes.data;

  return (
    <main className="bg-white">
      <Hero home={home} rating={rating} />
      <UnderHeroSec items={underHero} />
      <AreasWeService
        mainData={area}
        regions={region}
        rating={rating}
      />
      <TrustedSection data={trustedData} />
      {/* will continue */}
    </main>
  );
}
