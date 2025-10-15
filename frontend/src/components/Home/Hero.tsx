import { HomePageData, GoogleRatingData } from '@/lib/Home/types';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['500', '700'],
    display: 'swap',
});

type HeroProps = {
    home: HomePageData;
    rating: GoogleRatingData;
};

export default function Hero({ home, rating }: HeroProps) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

    const bgImageUrl = STRAPI_URL + home.background.url;
    const socialIconUrl = STRAPI_URL + rating.socialIcon.url;
    const starsImageUrl = STRAPI_URL + rating.stars.url;

    return (
        <section
            style={{
                backgroundImage: `url('${bgImageUrl}')`,
                backgroundSize: 'cover',
            }}
            className="relative w-full min-h-[400px] sm:min-h-[481px] bg-cover bg-right md:p-0 p-4 md:pb-0 pb-28"
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-[1512px] mx-auto px-6 sm:px-12 lg:px-[249px] py-[44px] text-center text-white z-10 spaace-y-4">
                <div>
                    <h1
                        className="font-bold leading-tight"
                        style={{
                            fontSize: 'clamp(32px, 8vw, 56px)',
                            lineHeight: '1.2',
                        }}
                    >
                        {home.Title}
                    </h1>

                    <p
                        className="mt-6 max-w-full md:max-w-[735px] mx-auto"
                        style={{ fontSize: 'clamp(16px, 4vw, 18px)' }}
                    >
                        {home.description}
                    </p>
                </div>


                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-6 md:text-lg text-sm space-y-4 md:space-y-0">
                    <button className="bg-[#0284A3] text-white font-semibold md:py-4 md:px-10 px-8 py-3 rounded-md md:rounded-lg shadow-lg w-fit md:w-full mx-auto">
                        {home.button1}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-semibold md:py-4 md:px-10 px-8 py-3 rounded-md md:rounded-lg w-fit md:w-full mx-auto">
                        {home.button2}
                    </button>
                </div>

                {/* Rating section: keep centered, responsive gap */}
                <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-2 p-2 max-w-max mx-auto md:pb-[44px] pt-4">
                    <Image
                        src={socialIconUrl}
                        alt="Google"
                        width={47.36}
                        height={47.36}
                        className="w-[47.36px] h-[47.36px]"
                    />
                    <div className="text-left">
                        <div className={`${jakarta.className} text-[11.28px] font-semibold`}>
                            {rating.socialName}
                        </div>
                        <Image
                            src={starsImageUrl}
                            alt="stars"
                            width={90}
                            height={18}
                            className="w-[90px] h-[18px]"
                        />
                    </div>
                    <div className="text-base">{rating.ratedText}</div>
                </div>
            </div>
        </section>
    );
}