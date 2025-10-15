import { TrustedSectionData } from '@/lib/Trusted/types';
import Image from 'next/image';

type TrustedSectionProps = {
    data: TrustedSectionData;
};

export default function TrustedSection({ data }: TrustedSectionProps) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

    const bgImageUrl = STRAPI_URL + data.imageBg.url;
    const logos = data.Logos.map((logo) => ({
        id: logo.id,
        url: STRAPI_URL + logo.url,
        alt: logo.alternativeText || 'Certification logo',
    }));

    return (
        <section
            className="relative w-full h-[679px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
            {/* Centered glass card */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl mx-72 my-40 p-10 shadow w-full text-center">
                    <div className='mt-10 my-10 mb-6'>
                        <h2 className="text-5xl text-[#1C3960] font-bold mb-6">
                            {data.title}
                        </h2>
                        <p className="text-lg text-[#333333] leading-relaxed max-w-2xl mx-auto">
                            {data.description}
                        </p>
                    </div>

                    <div className="flex justify-center gap-x-8">
                        {logos.map((logo, index) => (
                            <div key={logo.id} className="flex-shrink-0">
                                <Image
                                    src={logo.url}
                                    alt={logo.alt}
                                    width={index === logos.length - 1 ? 160 : 213}
                                    height={index === logos.length - 1 ? Math.round((160 / 213) * 114) : 114}
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}