import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { CarouselProps } from "../../../types";

export default function Carousel({
  options,
  children,
  className = "",
  on_api,
}: CarouselProps) {
  const [embla_ref, embla_api] = useEmblaCarousel(options);

  React.useEffect(() => {
    on_api?.(embla_api ?? undefined);
  }, [embla_api, on_api]);

  return (
    <div
      ref={embla_ref}
      className={[
        "overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
