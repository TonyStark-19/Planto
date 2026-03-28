// star rating type
import type { StarRating } from "../components/review/Review";

// type definition for review card
export type Review = {
    name: string;
    image: string;
    rating: StarRating;
    text: string;
};

// type definition for plant box
export type Plant = {
    name: string;
    tag: string;
    image: string;
    alt: string;
};

// trendy plants definition
export type TrendyPlant = {
    title: string;
    price: string;
    image: string;
    description: string;
    layout: "md:flex-row" | "md:flex-row-reverse";
    position: string;
};

// product type definition
export type Product = {
    name: string;
    price: string;
    image: string;
    desc: string;
};

// o2 plants type definition
export type O2Plant = {
    image: string;
    alt: string;
    title: string;
    description: string[];
};