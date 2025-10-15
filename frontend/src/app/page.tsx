import Hero from "@/components/Home/Hero";
import { fetchHomePage, fetchGoogleRating, fetchUnderHero } from "@/lib/Home/Strapi";
import { fetchAreasServiced, fetchRegions } from "@/lib/AreasServiced/Strapi";
import { fetchTrustedSection } from "@/lib/Trusted/Stripe";
import { fetchWindowsRange } from "@/lib/WindowsRange/Stripe";
import { fetchShoppingAsSection } from "@/lib/WhoBuy/Stripe";
import UnderHeroSec from "@/components/Home/underHeroSec";
import AreasWeService from "@/components/AreasWeService";
import WindowRangeSection from "@/components/WindowsRange";
import TrustedSection from "@/components/TrustedSection";
import ShoppingAs from "@/components/ShoppingAs";

export default async function HomePage() {
  const [homeRes, ratingRes, underHeroRes, areasRes,
    regionsRes, windowsRangeRes, trustedRes, shoppingAsRes, ] = await Promise.all([
      fetchHomePage(),
      fetchGoogleRating(),
      fetchUnderHero(),
      fetchAreasServiced(),
      fetchRegions(),
      fetchWindowsRange(),
      fetchTrustedSection(),
      fetchShoppingAsSection(), 
    ]);

  const home = homeRes.data;
  const rating = ratingRes.data;
  const underHero = underHeroRes.data;
  const area = areasRes.data;
  const region = regionsRes.data;
  const windowsRangeData = windowsRangeRes.data[0];
  const trustedData = trustedRes.data;
  const shoppingAsData = shoppingAsRes.data[0];

  return (
    <main className="bg-white">
      <Hero home={home} rating={rating} />
      <UnderHeroSec items={underHero} />
      <AreasWeService
        mainData={area}
        regions={region}
        rating={rating}
      />
      <WindowRangeSection data={windowsRangeData} />
      <TrustedSection data={trustedData} />
      <ShoppingAs data={shoppingAsData} />
      {/* will continue */}
    </main>
  );
}
