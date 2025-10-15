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
        <section className="py-18 px-10">
            <div className="">
                <div className="mb-10 space-y-2">
                    <h2 className="text-3xl md:text-[44px] font-bold text-[#1C3960]">{title}</h2>
                    <p className="text-lg text-[#333333] max-w-3xl">{description}</p>
                </div>

                {/* Two Cards Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
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
                                    <span className="inline-block rounded-sm text-base font-bold bg-[#19857F] p-2 gap-x-8">
                                        {item.who}
                                    </span>
                                    <div className='space-y-4 my-6'>
                                        <h3 className="text-[44px] font-bold mb-2">{item.why}</h3>
                                        <p className="mb-4 text-gray-200">{item.description}</p>
                                    </div>
                                    <button className="flex items-center gap-2 font-semibold group/button bg-[#0284A3] px-10 py-4 rounded-lg">
                                        {item.buttonText}
                                        <span className="group-hover/button:translate-x-1 transition-transform">→</span>
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