import { WhyChooseData } from '@/lib/WhyChoose/type';
import Image from 'next/image';
import { COLORS } from '@/lib/colors';

export default function WhyChooseSection({ data }: { data: WhyChooseData }) {
    const { title, description, Image: image, why_choose_lists: cards } = data;

    return (
        <section className="md:px-8 px-4 md:pt-18 md:pb-18 pt-8 pb-10">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col sm:flex-row gap-10 w-full">
                    {/* Left */}
                    <div className="w-full sm:w-2/3 min-w-0">
                        <div className="space-y-2 mb-6">
                            <h2 className="text-2xl md:text-[44px] font-bold"
                                style={{ color: COLORS.headingText }}>
                                {title}
                            </h2>
                            <p className="text-sm md:text-lg"
                                style={{ color: COLORS.bodyText }}>
                                {description}
                            </p>
                        </div>
                        <div className="relative h-96 w-full mt-6">
                            <Image
                                src={`${process.env.STRAPI_URL}${image.url}`}
                                alt={image.alternativeText || 'Why Choose Season Master'}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, (min-width: 769px) 66vw"
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full sm:w-1/3 min-w-0 flex gap-6">
                        <div className="w-[3px] bg-black self-stretch flex-shrink-0 hidden sm:block"></div>
                        <div className="flex flex-col space-y-6 w-full">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    className="space-y-2 p-4 rounded-lg bg-[#26C7BE] hover:opacity-90 duration-300 text-white"
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