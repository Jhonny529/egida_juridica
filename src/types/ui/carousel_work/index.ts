import type { Slide } from "../slide";

export type CarouselWorkProps = {
  title: string;
  background_image_url: string;
  slides: Slide[];
  min_h_className?: string;
  padding_y_className?: string; 
};