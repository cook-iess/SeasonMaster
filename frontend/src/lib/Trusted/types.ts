export type TrustedLogo = {
  id: number;
  url: string;
  alternativeText?: string | null;
};

export type TrustedSectionData = {
  id: number;
  title: string;
  description: string;
  imageBg: {
    url: string;
    alternativeText?: string | null;
  };
  Logos: TrustedLogo[];
};