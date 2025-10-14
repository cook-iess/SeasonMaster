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
                backgroundPosition: 'center',
            }}
            className="relative w-full min-h-[400px] sm:min-h-[481px] bg-cover bg-center"
        >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-[1512px] mx-auto px-6 sm:px-12 md:px-[249px] py-[44px] text-center text-white z-10">
                <h1
                    className="font-bold leading-tight"
                    style={{ fontSize: '56px', lineHeight: '1.2' }}
                >
                    {home.Title}
                </h1>

                <p
                    className="mt-6 md:w-[735] mx-auto"
                    style={{ fontSize: '18px' }}
                >
                    {home.description}
                </p>

                {/* Buttons & Rating — same as above */}
                <div className="flex flex-col sm:flex-row justify-center md:gap-8 gap-4 mt-6">
                    <button className="bg-[#0284A3] text-white font-semibold py-4 px-10 rounded-lg shadow-lg">
                        {home.button1}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-lg">
                        {home.button2}
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-2 max-w-max mx-auto md:pb-[44px] pt-4">
                    <Image src={socialIconUrl} alt="Google" width={47.36} height={47.36} />
                    <div className="text-left">
                        <div className={jakarta.className + " text-[11.28px] font-semibold"}>{rating.socialName}</div>
                        <Image src={starsImageUrl} alt="stars" width={90} height={18} />
                    </div>
                    <div className="text-base">{rating.ratedText}</div>
                </div>
            </div>
        </section>
    );
}