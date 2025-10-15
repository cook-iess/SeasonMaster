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

    return (
        <section className="px-12 py-18">
            <div className="mx-auto  space-y-8">
                <h2 className="text-[44px] font-bold text-[#1C3960] text-center mb-8 md:mb-12">{Header}</h2>

                <div className="space-y-6">
                    {/* ShadCN Carousel */}
                    <Carousel
                        opts={{
                            align: "start",
                            slidesToScroll: 1,
                        }}
                        className="w-full max-w-[70%] mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 max-w-80">
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
                                        <p className="text-[#0A1422] font-light text-base">{item.review}</p>
                                        <div className="border-t-[0.5px] border-[#1C3960]/20"></div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-sm text-[#152B48]">
                                                {item.reviewer}
                                            </p>
                                            <p className="text-sm text-[#0A1422]">
                                                {formatDate(item.date)}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-16" />
                        <CarouselNext className="-right-16" />
                    </Carousel>

                    {/* Rating */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 max-w-max mx-auto mt-10">
                        <Image
                            src={socialIconUrl}
                            alt="Google"
                            width={47.36}
                            height={47.36}
                            className="rounded-full"
                        />
                        <div>
                            <div className={`${jakarta.className} text-[11.28px] font-semibold`}>
                                {rating.socialName}
                            </div>
                            <div className={`${jakarta.className} text-[11.28px]`}>
                                {rating.ratingDesc}
                            </div>
                            <div className="">
                                <Image
                                    src={starsImageUrl}
                                    alt="Google rating stars"
                                    width={90}
                                    height={18}
                                />
                            </div>
                        </div>
                        <div className="text-base">{rating.ratedText}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}