import { WhyChooseData } from '@/lib/WhyChoose/type';
import Image from 'next/image';

export default function WhyChooseSection({ data }: { data: WhyChooseData }) {
    const { title, description, Image: image, why_choose_lists: cards } = data;

    return (
        <section className="md:px-28 px-4 md:pt-18 md:pb-18 pt-8 pb-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left */}
                    <div className="md:basis-[640px] md:max-w-[640px] space-y-6 flex-shrink-0">
                        <div className="space-y-2 mb-6">
                            <h2 className="text-2xl md:text-[44px] font-bold text-[#1C3960]">{title}</h2>
                            <p className="text-sm md:text-lg text-[#333333]">{description}</p>
                        </div>
                        <div className="relative h-96 w-full mt-6">
                            <Image
                                src={`${process.env.STRAPI_URL}${image.url}`}
                                alt={image.alternativeText || 'Why Choose Season Master'}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, (min-width: 768px) 640px"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="md:basis-[428px] md:max-w-[428px] flex-shrink-0 flex gap-6">
                        <div className="w-[3px] bg-black self-stretch flex-shrink-0 hidden md:block"></div>
                        <div className="flex flex-col space-y-6 md:w-fit w-full">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    className="space-y-2 p-4 rounded-lg bg-[#26C7BE] hover:bg-[#26C7BE]/90 duration-300 text-white"
                                >
                                    <h3 className="text-2xl font-bold">{card.cardTitle}</h3>
                                    <p className="text-base font-light">{card.cardDescription}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}