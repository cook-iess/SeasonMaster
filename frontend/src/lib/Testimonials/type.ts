export interface Testimonial {
  id: number;
  review: string;
  reviewer: string;
  date: string; // "2025-09-19"
}

export interface TestimonialsData {
  Header: string;
  testimonials_lists: Testimonial[];
}