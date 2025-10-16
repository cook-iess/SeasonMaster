export interface ShoppingAsItem {
    id: number;
    who: string;
    why: string;
    description: string;
    buttonText: string;
    image: {
        url: string;
        alternativeText?: string;
    };
}

export interface ShoppingAsData {
    title: string;
    description: string;
    shopping_as_lists: ShoppingAsItem[];
}