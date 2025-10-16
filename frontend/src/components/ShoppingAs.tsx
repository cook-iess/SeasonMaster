import Image from 'next/image';

interface ShoppingAsItem {
    id: number;
    who: string;
    why: string;
    description: string;
    buttonText: string;
    image: {
        url: string;
        alternativeText?: string;
    };
}

interface ShoppingAsData {
    title: string;
    description: string;
    shopping_as_lists: ShoppingAsItem[];
}

export default function ShoppingAs({ data }: { data: ShoppingAsData }) {
    const { title, description, shopping_as_lists: items } = data;

    const [left, right] = items;

    return (
        <section className="py-18 md:px-10 px-4 pt-6 md:pt-18 md:pb-18 pb-14 max-w-[1512px] mx-auto">
            <div className="space-y-8">
                <div className="mb-10 space-y-2">
                    <h2 className="md:text-3xl text-2xl md:text-[44px] font-bold text-[#1C3960]">{title}</h2>
                    <p className="md:text-lg text-sm text-[#333333] max-w-3xl">{description}</p>
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

                                {/* Content at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <span className="inline-block rounded text-xs md:text-base md:font-bold font-semibold  bg-[#19857F] hover:bg-[#20A69E] duration-300 px-2 md:py-2 py-1 gap-x-8">
                                        {item.who}
                                    </span>
                                    <div className='space-y-4 my-6'>
                                        <h3 className="lg:text-[44px] sm:text-[32] text-[24px] font-bold mb-2">{item.why}</h3>
                                        <p className="text-base md:text-lg">{item.description}</p>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 font-semibold group/button bg-[#0284A3] hover:bg-[#0284A3]/80 duration-300 px-10 py-4 rounded-lg w-full">
                                        {item.buttonText}
                                        <span className="group-hover/button:translate-x-1 transition-transform text-sm md:text-lg">→</span>
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