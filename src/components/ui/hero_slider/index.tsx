import * as React from "react";
import Button from "../button";
import type { HeroSliderProps } from "../../../types";

export default function HeroSlider({
  images,
  title,
  subtitle,
  cta_left,
  cta_right,
}: HeroSliderProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((img, i) => (
        <div
          key={`${img}-${i}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            className="h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center">
          <h1
            className="whitespace-pre-line text-[44px] leading-[1.05] text-white md:text-[72px]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h1>

          <div className="mt-6 text-sm text-white/70 md:text-base">
            {subtitle}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {cta_left.href ? (
              <a href={cta_left.href} className="w-full sm:w-auto">
                <Button variant="dark" full_width>
                  {cta_left.label}
                </Button>
              </a>
            ) : (
              <Button variant="dark" full_width onClick={cta_left.onClick}>
                {cta_left.label}
              </Button>
            )}

            {cta_right.href ? (
              <a href={cta_right.href} className="w-full sm:w-auto">
                <Button variant="dark" full_width>
                  {cta_right.label}
                </Button>
              </a>
            ) : (
              <Button variant="dark" full_width onClick={cta_right.onClick}>
                {cta_right.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
