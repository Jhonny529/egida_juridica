import * as React from "react";
import type { EmblaCarouselType } from "embla-carousel";

import {
  Carousel,
  CarouselArrow,
  useCarouselState,
  CtaButton,
} from "../../../../components/ui";
import type { Slide } from "../../../../types";

const slides: Slide[] = [
  {
    tag: "Buyers",
    title: "The best buying experience",
    body: "We’re here to guide you through every part of the buying process and help you avoid common mistakes.",
    cta: { label: "BUY WITH US", href: "/buyers" },
    image_url:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2400&q=80",
  },
  {
    tag: "Sellers",
    title: "Sell with confidence",
    body: "Strategy, positioning, and negotiation to help you maximize outcomes without stress.",
    cta: { label: "SELL WITH US", href: "/sellers" },
    image_url:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80",
  },
  {
    tag: "Investors",
    title: "Investing in the Utah area?",
    body: "If you are planning to invest, we can help you every step of the way and educate you in long & short-term investing.",
    cta: { label: "LEARN MORE", href: "/investors" },
    image_url:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function WorkWithUsCarousel() {
  const [embla_api, set_embla_api] = React.useState<
    EmblaCarouselType | undefined
  >(undefined);

  const { selected_index, scroll_prev, scroll_next } =
    useCarouselState(embla_api);

  const css_vars = {
    ["--slide_w" as any]: "clamp(320px, 82vw, 1040px)",
    ["--sep" as any]: "clamp(80px, 3vw, 14px)",
    ["--slide_h" as any]: "clamp(360px, 52vh, 560px)",
    ["--btn" as any]: "56px",
    ["--arrow_gap" as any]: "clamp(50px, 0.9vw, 12px)",
  } as React.CSSProperties;
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden bg-neutral-950 text-white"
      style={css_vars}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2400&q=80"
          alt="Background"
          className="h-full w-full object-cover opacity-35"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative py-16 md:py-48">
        <div className="mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Work With Us.
          </h2>
          <div className="mx-auto mt-4 h-px w-14 bg-white/40" />
        </div>

        <div className="relative mt-10 md:mt-14 h-[var(--slide_h)]">
          <Carousel
            options={{
              align: "center",
              loop: true,
              skipSnaps: false,
              startIndex: 0,
            }}
            on_api={set_embla_api}
            className="h-full"
          >
            <div className="flex h-full items-center">
              {slides.map((s, i) => {
                const is_active = i === selected_index;

                return (
                  <div
                    key={s.tag + i}
                    className="shrink-0"
                    style={{
                      flex: "0 0 var(--slide_w)",
                      paddingLeft: "var(--sep)",
                      paddingRight: "var(--sep)",
                    }}
                  >
                    <div
                      className={[
                        "relative transition-all duration-500 ease-out",
                        is_active
                          ? "opacity-100 scale-100"
                          : "opacity-30 scale-[0.80]",
                      ].join(" ")}
                    >
                      <div className="relative h-[var(--slide_h)] overflow-hidden">
                        <img
                          src={s.image_url}
                          alt={s.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/15" />
                      </div>

                      <div
                        className={[
                          "absolute bg-white text-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)]",
                          "left-1/2 bottom-6 w-[min(92%,420px)] -translate-x-1/2",
                          "md:left-auto md:bottom-auto md:right-[-6%] md:top-1/2 md:w-[420px] md:-translate-x-0 md:-translate-y-1/2",
                          "p-6 md:p-12",
                        ].join(" ")}
                      >
                        <div className="text-sm italic text-[#C28C6B]">
                          {s.tag}
                        </div>

                        <div
                          className="mt-3 text-3xl leading-tight md:text-[44px]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {s.title}
                        </div>

                        <p className="mt-4 md:mt-6 text-[14px] md:text-[15px] leading-7 text-neutral-600">
                          {s.body}
                        </p>

                        <CtaButton
                          cta={s.cta}
                          variant="light"
                          className="mt-6 md:mt-8 h-11 px-6 text-xs tracking-[0.22em]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Carousel>

          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="absolute left-4 md:hidden pointer-events-auto">
              <CarouselArrow direction="prev" onClick={scroll_prev} />
            </div>

            <div className="absolute right-4 md:hidden pointer-events-auto">
              <CarouselArrow direction="next" onClick={scroll_next} />
            </div>

            <div className="hidden md:block pointer-events-auto">
              <CarouselArrow
                direction="prev"
                onClick={scroll_prev}
                className="absolute z-20"
                style={{
                  left: "calc(50% - (var(--slide_w) / 2) - var(--arrow_gap) - (var(--btn) / 2))",
                }}
              />

              <CarouselArrow
                direction="next"
                onClick={scroll_next}
                className="absolute z-20"
                style={{
                  left: "calc(50% + (var(--slide_w) / 2) + var(--arrow_gap) - (var(--btn) / 2))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
