import type * as React from "react";

export type HeroCTA = {
    label: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type HeroSliderProps = {
    images: string[];
    title: string;
    subtitle: string;
    cta_left: HeroCTA;
    cta_right: HeroCTA;
};