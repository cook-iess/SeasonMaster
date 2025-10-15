export type WindowsRangeImage = {
  id: number;
  url: string;
  alternativeText?: string | null;
};

export type WindowsRangeItem = {
  id: number;
  subtitle: string;
  subDescription: string;
  Image: WindowsRangeImage | null;
};

export type WindowsRangeData = {
  id: number;
  title: string;
  description: string;
  windows_range_lists: WindowsRangeItem[];
};