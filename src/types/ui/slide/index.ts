import type { HeroCTA } from "../hero_slider";

export type Slide = {
    tag: string;
    title: string;
    body: string;
    cta: HeroCTA;
    image_url: string;
};