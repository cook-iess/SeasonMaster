// src/components/Home/AreasWeService.tsx
import { AreasServicedData, RegionsData } from '@/lib/AreasServiced/types';
import { GoogleRatingData } from '@/lib/Home/types';
import { Location06Icon, Tick01Icon } from 'hugeicons-react';
import Image from 'next/image';
import { COLORS } from '@/lib/colors';

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
        <div
            className={`absolute ${positionClasses} bg-[#22B1A9] py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-lg shadow-md border border-white z-10 inline-block`}
        >
            <div className="flex items-start gap-1.5 mb-1">
                <Location06Icon size={18} color="#FFFFFF" className="mt-0.5 flex-shrink-0 my-auto" />
                <h4 className="font-semibold text-[11px] md:text-lg text-white">
                    {title}
                </h4>
            </div>
            <div className="flex flex-col gap-0.5">
                {cities
                    .filter(Boolean)
                    .map((city, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-white">
                            <Tick01Icon size={16} className="mt-0.5 flex-shrink-0" />
                            <span className="text-[8.61px] md:text-[13px] leading-tight">{city}</span>
                        </div>
                    ))}
            </div>
        </div>
    );

    return (
        <section className="px-4 md:px-12 py-12 md:py-18 max-w-[1512px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-14 sm:gap-y-4 items-start">
                {/* Left Side */}
                <div className="my-auto"
                    style={{ color: COLORS.bodyText }}>
                    <h2 className="text-[24px] md:text-[40px] lg:text-[44px] leading-[1.2] font-bold py-2"
                        style={{ color: COLORS.headingText }}>
                        {mainData.title}
                    </h2>
                    <p className="text-base sm:text-sm mb-6">{mainData.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-4 mt-4 mb-8">
                        <div>
                            <h3 className="font-bold text-base mb-2"
                                style={{ color: COLORS.headingText }}>{mainData.subTitle1}</h3>
                            <p className="md:text-sm text-xs">{mainData.subDescription1}</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-base mb-2"
                                style={{ color: COLORS.headingText }}>{mainData.subTitle2}</h3>
                            <p className="md:text-sm text-xs">{mainData.subDescription2}</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <button className="flex items-center justify-center bg-[#0284A3] hover:opacity-90 duration-300 mb-4 md:gap-x-3 w-full md:w-fit gap-x-2 text-white font-semibold md:px-10 md:py-4 px-8 py-3 md:rounded-lg rounded-md shadow-md transition md:text-lg text-sm">
                            <Location06Icon size={20} color='#FFFFFF' />
                            {mainData.buttonText}
                        </button>

                        <div>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={googleLogoUrl}
                                    alt={rating.socialName}
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                                <Image
                                    src={starsImageUrl}
                                    alt="5-star rating"
                                    width={80}
                                    height={16}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-black text-sm sm:text-base mt-1">{rating.addDesc}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative w-full mt-12 lg:mt-0 h-[400px] sm:h-[450px] lg:h-[500px]">
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
                            positionClasses="-top-4 right-[8%] md:-top-4 md:right-[124px]"
                        />
                    )}
                    {midlands && (
                        <RegionCard
                            title={midlands.area}
                            cities={[midlands.state1, midlands.state2, midlands.state3, midlands.state4, midlands.state5]}
                            positionClasses="top-[70%] left-[5%] md:top-[67%] md:left-[110px] transform -translate-y-1/2"
                        />
                    )}
                    {south && (
                        <RegionCard
                            title={south.area}
                            cities={[south.state1, south.state2, south.state3, south.state4, south.state5]}
                            positionClasses="bottom-[-20px] right-[10%] md:bottom-[-16px] md:right-[164px]"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}