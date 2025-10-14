import Image from 'next/image';
import { HomePageData, GoogleRatingData } from '@/lib/types';

type HeroProps = {
    home: HomePageData;
    rating: GoogleRatingData;
};

export default function Hero({ home, rating }: HeroProps) {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

    // Get full image URL
    const bgImageUrl =
        STRAPI_URL + home.background.url;

    const socialIconUrl = STRAPI_URL + rating.socialIcon.url;
    const starsImageUrl = STRAPI_URL + rating.stars.url;

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
            style={{
                backgroundImage: `url('${bgImageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {home.Title}
                </h1>
                <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
                    {home.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition shadow-lg">
                        {home.button1}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition">
                        {home.button2}
                    </button>
                </div>

                {/* Rating Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/10 backdrop-blur-sm py-4 px-6 rounded-full max-w-max mx-auto">
                    {/* Icon */}
                    <div className="text-left">
                        <div className="text-sm font-medium text-blue-200">
                            {rating.socialName}
                        </div>
                        <div className="font-bold">{rating.ratedText}</div>
                    </div>

                    <div>
                        <img
                            src={socialIconUrl}
                            alt="Google"
                            className="w-8 h-8"
                            loading="lazy"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <img
                            src={starsImageUrl}
                            alt="5-star rating"
                            className="h-5"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}