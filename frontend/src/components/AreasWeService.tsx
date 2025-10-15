// src/components/Home/AreasWeService.tsx
import { AreasServicedData, RegionsData } from '@/lib/AreasServiced/types';
import { GoogleRatingData } from '@/lib/Home/types';
import { Location06Icon, Tick01Icon } from 'hugeicons-react';
import Image from 'next/image';

type AreasWeServiceProps = {
    mainData: AreasServicedData;
    regions: RegionsData;
    rating: GoogleRatingData;
};

export default function AreasWeService({
    mainData,
    regions,
    rating,
}: AreasWeServiceProps) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

    const mapImageUrl = STRAPI_URL + mainData.mapimage.url;
    const googleLogoUrl = STRAPI_URL + rating.socialIcon.url;
    const starsImageUrl = STRAPI_URL + rating.stars.url;

    const getRegion = (area: string) => regions.find(r => r.area === area);
    const north = getRegion('North & Scotland');
    const midlands = getRegion('Midlands');
    const south = getRegion('South');

    const RegionCard = ({
  title,
  cities,
  positionClasses,
}: {
  title: string;
  cities: string[];
  positionClasses: string;
}) => (
  <div className={`absolute ${positionClasses} bg-[#22B1A9] p-4 rounded-lg shadow-md min-w-[180px] border border-white`}>
    <div className="flex items-center gap-2 mb-3">
      <Location06Icon size={20} color='#FFFFFF'/>
      <h4 className="font-semibold text-lg text-white">{title}</h4>
    </div>
    
    {/* ✅ VERTICAL LIST: flex-col instead of flex-wrap */}
    <div className="flex flex-col gap-1">
      {cities.map((city, i) => (
        <div key={i} className="flex items-center gap-2 text-white">
          <Tick01Icon size={20} />
          <span className="text-sm">{city}</span>
        </div>
      ))}
    </div>
  </div>
);

    return (
        <section className="px-14 py-18 gap-x-10 max-w-[1512px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 items-start">
                {/* Left Side */}
                <div className="gap-y-16 text-[#333333] my-auto">
                    <div>
                        <h2 className="text-[44px] leading-[1.2] text-[#1C3960] font-bold py-2">{mainData.title}</h2>
                        <p className=" text-lg">{mainData.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 mt-6 mb-8">
                        <div className="gap-y-2">
                            <h3 className="font-bold text-base mb-2">{mainData.subTitle1}</h3>
                            <p className="text-sm">{mainData.subDescription1}</p>
                        </div>
                        <div className="gap-y-2">
                            <h3 className="font-bold text-base mb-2 text-[#1C3960]">{mainData.subTitle2}</h3>
                            <p className="text-sm">{mainData.subDescription2}</p>
                        </div>
                    </div>

                    {/* Button + Rating */}
                    <div className="space-y-6">
                        <button className="flex items-center gap-3 bg-[#0284A3] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#026f8a] transition">
                            <Location06Icon size={24} color='#FFFFFF' />
                            {mainData.buttonText}
                        </button>

                        <div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2">
                                <Image
                                    src={googleLogoUrl}
                                    alt={rating.socialName}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                                <Image
                                    src={starsImageUrl}
                                    alt="5-star rating"
                                    width={90}
                                    height={18}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-600 text-base">{rating.addDesc}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative w-full h-[500px]">
                    <Image
                        src={mapImageUrl}
                        alt="UK Map with coverage areas"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {north && (
                        <RegionCard
                            title={north.area}
                            cities={[north.state1, north.state2, north.state3, north.state4, north.state5]}
                            positionClasses="top-0 right-30"
                        />
                    )}
                    {midlands && (
                        <RegionCard
                            title={midlands.area}
                            cities={[midlands.state1, midlands.state2, midlands.state3, midlands.state4, midlands.state5]}
                            positionClasses="top-3/4 left-15 transform -translate-y-1/2"
                        />
                    )}
                    {south && (
                        <RegionCard
                            title={south.area}
                            cities={[south.state1, south.state2, south.state3, south.state4, south.state5]}
                            positionClasses="-bottom-14 right-26"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}