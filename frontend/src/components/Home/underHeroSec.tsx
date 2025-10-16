import { UnderHeroData } from '@/lib/Home/types';
import { VolumeOffIcon, ThermometerWarmIcon, SecurityCheckIcon } from 'hugeicons-react';
import { COLORS } from '@/lib/colors';

type UnderHeroProps = {
  items: UnderHeroData[];
};

const IconByTitle = ({ title, size }: { title: string; size: number }) => {
  const normalized = title.toLowerCase();
  const props = { size, color: "#20A69E" };
  if (normalized.includes('quiet')) {
    return <VolumeOffIcon {...props} />;
  }
  if (normalized.includes('thermal') || normalized.includes('temperature')) {
    return <ThermometerWarmIcon {...props} />;
  }
  if (normalized.includes('secure') || normalized.includes('security')) {
    return <SecurityCheckIcon {...props} />;
  }
  return <VolumeOffIcon {...props} />;
};

export default function UnderHeroSec({ items }: UnderHeroProps) {
  return (
    <section className="md:px-12 md:pt-4 md:pb-18 h-fit p-4 space-y-2 md:space-y-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-10 md:gap-y-10 gap-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="gap-8 px-4 py-2 gap-y-2"
          >
            <div className="md:hidden block">
              <IconByTitle title={item.title} size={24} />
            </div>
            <div className="md:block hidden">
              <IconByTitle title={item.title} size={40} />
            </div>
            <div className="text-left">
              <h3 className="font-bold md:text-xl text-lg leading-tight mt-2 pb-1"
                style={{ color: COLORS.headingText }}>
                {item.title.trim()}
              </h3>
              <p className="md:text-sm text-xs leading-relaxed"
                style={{ color: COLORS.bodyText }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}