import { TrustedSectionData } from '@/lib/Trusted/types';
import Image from 'next/image';
import { COLORS } from '@/lib/colors';

type TrustedSectionProps = {
    data: TrustedSectionData;
};

export default function TrustedSection({ data }: TrustedSectionProps) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
    const bgImageUrl = STRAPI_URL + data.imageBg.url;

    return (
        <section
            className="relative w-full py-32 md:py-24 px-4 md:px-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <div className="relative z-10 flex items-center justify-center space-y-2 py-16">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl text-center w-full md:max-w-[940px] md:px-6 md:py-8 px-2 py-10 space-y-6">
                    <div className="mb-8 sm:mt-10">
                        <h2 className={`text-[32px] md:text-5xl font-bold text-[${COLORS.headingText}] px-1 sm:px-2`}>
                            {data.title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-2xl mx-auto px-1 sm:px-2">
                            {data.description}
                        </p>
                    </div>

                    <div className="flex justify-center overflow-x-auto sm:overflow-x-visible">
                        <div className="flex flex-nowrap justify-center gap-x-2 sm:gap-x-4 w-full max-w-4xl px-2">
                            {data.Logos.map((logo) => (
                                <div key={logo.id} className="flex-shrink flex items-center justify-center min-w-[22%] sm:min-w-[16%]">
                                    <Image
                                        src={STRAPI_URL + logo.url}
                                        alt={logo.alternativeText || 'Logo'}
                                        width={180}
                                        height={90}
                                        className="w-fit h-auto md:max-h-[114px] max-h-[40px] object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}