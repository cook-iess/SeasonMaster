'use client'
import { TestimonialsData } from "@/lib/Testimonials/type";
import { GoogleRatingData } from "@/lib/Home/types";
import Image from "next/image";
import { Plus_Jakarta_Sans } from 'next/font/google';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['500', '700'],
    display: 'swap',
});

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
};

export default function TestimonialsSection({
    data,
    rating,
}: {
    data: TestimonialsData;
    rating: GoogleRatingData;
}) {
    const { Header, testimonials_lists: testimonials } = data;

    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
    const socialIconUrl = STRAPI_URL + rating.socialIcon.url;
    const starsImageUrl = STRAPI_URL + rating.stars.url;

    const GoogleRatingBlock = ({
        rating,
        size,
    }: {
        rating: GoogleRatingData;
        size: number;
    }) => {
        const socialIconUrl = STRAPI_URL + rating.socialIcon.url;
        const starsImageUrl = STRAPI_URL + rating.stars.url;

        return (
            <div className="flex flex-row items-center mx-auto gap-x-2 max-w-max">
                <Image
                    src={socialIconUrl}
                    alt="Google"
                    width={size}
                    height={size}
                    className={`rounded-full w-[${size}px] h-[${size}px] object-contain`}
                />
                <div>
                    <div className={`${jakarta.className} md:text-[11.28px] text-[6.92px] font-semibold`}>
                        {rating.socialName}
                    </div>
                    <div className={`${jakarta.className} md:text-[11.28px] text-[6.92px]`}>
                        {rating.ratingDesc}
                    </div>
                    <div>
                        <Image
                            src={starsImageUrl}
                            alt="Google rating stars"
                            width={55}
                            height={8}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="text-sm md:text-base">{rating.ratedText} <span className="md:hidden">based on <u>500 reviews.</u></span></div>
            </div>
        );
    };


    return (
        <section className="md:px-12 md:py-18 px-4 py-8">
            <div className="mx-auto space-y-8">
                <div className="space-y-4 md:space-y-0">
                    <h2 className="lg:text-[44px] sm:text-3xl text-2xl font-bold text-[#1C3960] md:text-center mb-8 md:mb-12">{Header}</h2>
                    <div className="space-x-2 md:hidden">
                        <span className={`${jakarta.className} inline-block p-2 rounded text-sm font-bold bg-[#0284A3] text-white`}>
                            Homeowners
                        </span>
                        <span className={`${jakarta.className} inline-block p-2 text-sm font-bold bg-[#F5F5F5] text-[#1C3960]`}>
                            Trade Installers
                        </span>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="md:hidden">
                        <GoogleRatingBlock rating={rating} size={29} />
                    </div>
                    {/* ShadCN Carousel */}
                    <Carousel
                        opts={{
                            align: "start",
                            slidesToScroll: 1,
                        }}
                        className="w-full md:max-w-[70%] max-w-[80%] mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 md:max-w-80 max-w-[95%] sm:max-w-[85%]">
                                    <div className="p-4 bg-[#EAFCFB] rounded-md shadow-sm h-full space-y-2.5">
                                        <div className="flex mb-3">
                                            <Image
                                                src={starsImageUrl}
                                                alt="5 stars"
                                                width={90}
                                                height={18}
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="text-[#0A1422] font-light md:text-base text-sm">{item.review}</p>
                                        <div className="border-t-[0.5px] border-[#1C3960]/20"></div>
                                        <div className="flex justify-between md:text-sm text-xs">
                                            <p className="font-bold  text-[#152B48]">
                                                {item.reviewer}
                                            </p>
                                            <p className="text-[#0A1422]">
                                                {formatDate(item.date)}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="md:-left-16 -left-11" />
                        <CarouselNext className="md:-right-16 -right-11" />
                    </Carousel>

                    {/* Rating */}
                    <div className="hidden md:block">
                        <GoogleRatingBlock rating={rating} size={47} />
                    </div>
                </div>
            </div>
        </section>
    );
}