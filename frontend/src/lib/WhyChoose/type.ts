export interface WhyChooseCard {
    id: number;
    cardTitle: string;
    cardDescription: string;
}

export interface WhyChooseData {
    title: string;
    description: string;
    Image: {
        url: string;
        alternativeText?: string;
    };
    why_choose_lists: WhyChooseCard[];
}