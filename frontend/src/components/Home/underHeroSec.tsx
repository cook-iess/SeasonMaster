import { UnderHeroData } from '@/lib/Home/types';
import Image from 'next/image';

type UnderHeroProps = {
  items: UnderHeroData[];
};

export default function UnderHeroSec({ items }: UnderHeroProps) {
  const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

  return (
    <section className="px-12 pt-16 pb-18 max-w-[1512px] h-fit mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item) => {
          const iconUrl = STRAPI_URL + item.Icon.url;
          return (
            <div
              key={item.id}
              className="gap-8 px-4 pb-1"
            >
              <div className="flex-shrink-0">
                <Image
                  src={iconUrl}
                  alt={item.Icon.alternativeText || item.title.trim()}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl leading-tight mt-2 pb-1 text-[#1C3960]">
                  {item.title.trim()}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}