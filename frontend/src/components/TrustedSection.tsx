import { TrustedSectionData } from '@/lib/Trusted/types';
import Image from 'next/image';

type TrustedSectionProps = {
    data: TrustedSectionData;
};

export default function TrustedSection({ data }: TrustedSectionProps) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
    const bgImageUrl = STRAPI_URL + data.imageBg.url;

    return (
        <section
            className="relative w-full py-16 md:py-34 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            <div className="absolute inset-0"></div>
            <div className="relative z-10 flex items-center justify-center px-4">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl text-center w-full max-w-[940px] px-10 pb-10 pt-3">
                    <div className="mb-6 mt-10">
                        <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-[#1C3960] px-2 pb-3">
                            {data.title}
                        </h2>
                        <p className="text-base sm:text-lg text-[#333333] max-w-2xl mx-auto px-2">
                            {data.description}
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-nowrap justify-center gap-4 sm:gap-6 w-full max-w-4xl">
                            {data.Logos.map((logo, index) => {
                                const isLast = index === data.Logos.length - 1;
                                return (
                                    <div key={logo.id} className="flex-shrink-0">
                                        <Image
                                            src={STRAPI_URL + logo.url}
                                            alt={logo.alternativeText || 'Certification logo'}
                                            width={isLast ? 161 : 213}
                                            height={114}
                                            className="w-auto h-[80px] sm:h-[90px] md:h-[114px] object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}