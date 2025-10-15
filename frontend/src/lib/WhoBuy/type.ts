export interface ImageData {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface ShoppingAsListItem {
  id: number;
  who: string;
  why: string;
  description: string;
  buttonText: string;
  image: ImageData;
}

export interface ShoppingAsData {
  id: number;
  title: string;
  description: string;
  shopping_as_lists: ShoppingAsListItem[];
}