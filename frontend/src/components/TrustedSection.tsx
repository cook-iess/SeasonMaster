import { TrustedSectionData } from '@/lib/Trusted/types';

type TrustedSectionProps = {
  data: TrustedSectionData;
};

export default function TrustedSection({ data }: TrustedSectionProps) {
  const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

  const bgImageUrl = STRAPI_URL + data.imageBg.url;
  const logos = data.Logos.map(logo => ({
    id: logo.id,
    url: STRAPI_URL + logo.url,
    alt: logo.alternativeText || 'Trusted partner logo',
  }));

  return (
    <section
      className="relative w-full h-[679px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
            {data.description}
          </p>

          {/* Logos row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div key={logo.id} className="flex-shrink-0">
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-12 md:h-16 object-contain"
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