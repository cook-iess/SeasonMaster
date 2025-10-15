import { UnderHeroData } from '@/lib/Home/types';
import { VolumeOffIcon, ThermometerWarmIcon, SecurityCheckIcon } from 'hugeicons-react';

type UnderHeroProps = {
  items: UnderHeroData[];
};

const getIconComponent = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes('quiet')) {
    return <VolumeOffIcon size={40} color="#20A69E" />;
  }
  if (normalized.includes('thermal') || normalized.includes('temperature')) {
    return <ThermometerWarmIcon size={40} color="#20A69E" />;
  }
  if (normalized.includes('secure') || normalized.includes('security')) {
    return <SecurityCheckIcon size={40} color="#20A69E" />;
  }
  // fallback
  return <VolumeOffIcon size={40} color="#20A69E" />;
};

export default function UnderHeroSec({ items }: UnderHeroProps) {
  return (
    <section className="px-12 pt-16 pb-18 max-w-[1512px] h-fit mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="gap-8 px-4 py-2 gap-y-2"
          >
            <div className="flex-shrink-0">
              {getIconComponent(item.title)}
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
        ))}
      </div>
    </section>
  );
}