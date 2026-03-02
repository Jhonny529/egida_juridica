import type * as React from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

export type CarouselProps = {
    options?: EmblaOptionsType;
    children: React.ReactNode;
    className?: string;
    on_api?: (api: EmblaCarouselType | undefined) => void;
};

export type CarouselArrowVariant = "dark" | "light";

export type CarouselArrowButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        direction: "prev" | "next";
        variant?: CarouselArrowVariant;
    };
    