export type TrustedSectionData = {
  id: number;
  title: string;
  description: string;
  imageBg: {
    url: string;
    alternativeText?: string | null;
  };
  Logos: {
    id: number;
    url: string;
    alternativeText?: string | null;
  }[];
};