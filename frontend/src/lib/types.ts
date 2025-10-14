export type HomePageData = {
  Title: string;
  description: string;
  button1: string;
  button2: string;
  background: {
    url: string;
    formats?: {
      large?: { url: string };
      medium?: { url: string };
    };
  };
};

export type GoogleRatingData = {
  socialName: string;
  ratedText: string;
  ratingDesc: string;
  addDesc: string;
  socialIcon: {
    url: string;
  };
  stars: {
    url: string;
  };
};