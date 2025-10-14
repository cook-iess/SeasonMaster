// For content
export type AreasServicedIcon = {
  url: string;
  alternativeText?: string | null;
};

export type AreasServicedMapImage = {
  url: string;
  alternativeText?: string | null;
};

export type AreasServicedData = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  subTitle1: string;
  subDescription1: string;
  subTitle2: string;
  subDescription2: string;
  Icon: AreasServicedIcon;
  mapimage: AreasServicedMapImage;
};

// For list of regions
export type RegionData = {
  id: number;
  area: string;
  state1: string;
  state2: string;
  state3: string;
  state4: string;
  state5: string;
};

export type RegionsData = RegionData[];