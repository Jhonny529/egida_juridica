import * as React from "react";
import type { EmblaCarouselType } from "embla-carousel";

import Carousel from "../carousel";
import CarouselArrow from "../carousel_arrow";
import { useCarouselState } from "../carousel_state";
import { CtaButton } from "../";

import type { CarouselWorkProps } from "../../../types";

export default function CarouselWork({
  title,
  background_image_url,
  slides,
  min_h_className = "min-h-[90vh]",
  padding_y_className = "py-40 md:py-48",
}: CarouselWorkProps) {
  const [embla_api, set_embla_api] = React.useState<
    EmblaCarouselType | undefined
  >(undefined);

  const { selected_index, scroll_prev, scroll_next } =
    useCarouselState(embla_api);

  const css_vars = {
    ["--slide_w" as any]: "clamp(720px, 60vw, 1040px)",
    ["--sep" as any]: "clamp(16px, 2.2vw, 42px)",
    ["--btn" as any]: "56px",
  } as React.CSSProperties;

  return (
    <section
      className={[
        "relative overflow-hidden bg-neutral-950 text-white",
        min_h_className,
      ].join(" ")}
      style={css_vars}
    >
      <div className="absolute inset-0">
        <img
          src={background_image_url}
          alt="Background"
          className="h-full w-full object-cover opacity-35"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className={["relative", padding_y_className].join(" ")}>
        <div className="mx-auto px-6 text-center">
          <h2
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h2>
          <div className="mx-auto mt-4 h-px w-14 bg-white/40" />
        </div>

        <div className="relative mt-14">
          <Carousel
            options={{
              align: "center",
              loop: true,
              skipSnaps: false,
              startIndex: 0,
            }}
            on_api={set_embla_api}
          >
            <div className="flex items-center">
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
                          : "opacity-40 scale-[0.95]",
                      ].join(" ")}
                    >
                      <div className="relative h-[620px] overflow-hidden md:h-[700px]">
                        <img
                          src={s.image_url}
                          alt={s.title}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/15" />
                      </div>

                      <div
                        className="
                          absolute right-[-6%] top-1/2 w-[360px] -translate-y-1/2
                          bg-white p-10 text-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                          md:w-[420px] md:p-12
                        "
                      >
                        <div className="text-sm italic text-[#C28C6B]">
                          {s.tag}
                        </div>

                        <div
                          className="mt-3 text-4xl leading-tight md:text-[44px]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {s.title}
                        </div>

                        <p className="mt-6 text-[15px] leading-7 text-neutral-600">
                          {s.body}
                        </p>

                        <CtaButton
                          cta={s.cta}
                          variant="light"
                          className="mt-8 h-11 px-6 text-xs tracking-[0.22em]"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Carousel>

          <CarouselArrow
            direction="prev"
            onClick={scroll_prev}
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              left: "calc(50% - (var(--slide_w) / 2) - (var(--sep) * 0.8) - (var(--btn) / 2))",
            }}
          />

          <CarouselArrow
            direction="next"
            onClick={scroll_next}
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
            style={{
              left: "calc(50% + (var(--slide_w) / 2) + (var(--sep) * 0.8) - (var(--btn) / 2))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
