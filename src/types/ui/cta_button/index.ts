import type { HeroCTA } from "../hero_slider";

export type CtaButtonProps = {
  cta: HeroCTA;
  variant?: "dark" | "light";
  full_width?: boolean;
  className?: string;
};