import Image from 'next/image';
import { ShoppingAsData } from '@/lib/WhoBuy/type';
import { COLORS } from '@/lib/colors';

export default function ShoppingAs({ data }: { data: ShoppingAsData }) {
    const { title, description, shopping_as_lists: items } = data;

    const [left, right] = items;

    return (
        <section className="py-18 md:px-10 px-4 pt-6 md:pt-18 md:pb-18 pb-14 max-w-[1512px] mx-auto">
            <div className="space-y-8">
                <div className="mb-10 space-y-2">
                    <h2 className="md:text-3xl text-2xl md:text-[44px] font-bold"
                        style={{ color: COLORS.headingText }}>{title}</h2>
                    <p className="md:text-lg text-sm max-w-3xl"
                        style={{ color: COLORS.bodyText }}>{description}</p>
                </div>

                {/* Two Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-y-0 gap-y-4">
                    {[left, right].map((item) => (
                        <div key={item.id} className="relative group">
                            <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[600px] overflow-hidden rounded-2xl">
                                <Image
                                    src={`${process.env.STRAPI_URL}${item.image.url}`}
                                    alt={item.image.alternativeText || item.who}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Content at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/95 to-transparent">
                                    <span className="inline-block rounded text-xs md:text-base md:font-bold font-semibold  bg-[#19857F] hover:bg-[#20A69E] duration-300 px-2 md:py-2 py-1 gap-x-8">
                                        {item.who}
                                    </span>
                                    <div className='space-y-4 my-6'>
                                        <h3 className="lg:text-[44px] sm:text-[32] text-[24px] font-bold mb-2">{item.why}</h3>
                                        <p className="text-base md:text-lg">{item.description}</p>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 font-semibold group/button bg-[#0284A3] hover:opacity-95 duration-300 px-10 py-4 rounded-lg md:w-fit w-full">
                                        {item.buttonText}
                                        <span className="text-sm md:text-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="4" y1="12" x2="16" y2="12" />
                                                <polyline points="16 6 22 12 16 18" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}