import { WindowsRangeData, WindowsRangeItem } from '@/lib/WindowsRange/types';
import Image from 'next/image';
import { COLORS } from '@/lib/colors';

const Card = ({ item }: { item: WindowsRangeItem }) => {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const imageUrl = item.Image ? STRAPI_URL + item.Image.url : '/images/fallback.jpg';
    const altText = item.Image?.alternativeText || item.subtitle;

    return (
        <div className="">
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    className="object-cover rounded-t-2xl"
                />
            </div>
            <div className="space-y-2.5 px-5 pt-4 pb-6 shadow-md rounded-b-2xl">
                <div className="flex justify-between items-start gap-x-[10px]">
                    <h3 className="text-[28px] font-bold"
                        style={{ color: COLORS.headingText }}>
                        {item.subtitle}
                    </h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[40px] w-[40px] text-[#B9C2CE] ml-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.3}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
                <div className={`border-t-[0.2px] border-dashed border-[${COLORS.headingText}]/40`}></div>
                <p className="mt-3 text-lg  overflow-hidden" style={{
                    color: COLORS.bodyText,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                }}>{item.subDescription}</p>
            </div>
        </div>
    );
};

export default function WindowRangeSection({
    data,
}: {
    data: WindowsRangeData;
}) {
    const { title, description, windows_range_lists: items } = data;

    return (
        <section className="mx-auto px-4 md:px-12 pt-12 md:pt-18 pb-18">
            <div className="max-w-[769px]">
                <h2 className="text-[24px] md:text-[44px] font-bold"
                    style={{ color: COLORS.headingText }}>
                    {title}
                </h2>
                <p className="text-sm md:text-lg leading-relaxed"
                    style={{ color: COLORS.bodyText }}>
                    {description}
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}