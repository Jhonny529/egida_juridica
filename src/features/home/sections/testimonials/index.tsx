import * as React from "react";
import type { Testimonial } from "../../../../types";

const testimonials: Testimonial[] = [
  {
    rating: 5,
    text: "I would and do recommend our team to family, friends and anyone looking to have an amazing experience buying and/or selling a home. They went above and beyond through the whole process and helped avoid common mistakes.",
    author: "Puzzle fairy",
    source: "Google",
  },
  {
    rating: 5,
    text: "Professional, responsive, and clear from start to finish. They made every step feel simple and handled details that would’ve been stressful on my own.",
    author: "Andrea M.",
    source: "Google",
  },
  {
    rating: 4,
    text: "We felt supported the entire time. Great negotiation, great communication, and a strong strategy that delivered results.",
    author: "Carlos R.",
    source: "Google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-[#F5B301]" : "text-white/25"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-visible">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
          alt="Testimonials background"
          className="h-full w-full object-cover opacity-45"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-[-20px] select-none text-center text-[120px] leading-none text-white/5 md:text-[200px]"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        CLIENTS
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
        <div className="text-center">
          <h2
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Success Stories
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/35" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="flex items-center justify-between gap-6">
            <Stars count={testimonials[index]?.rating ?? 0} />
            <div className="text-sm text-white/70">
              {testimonials[index]?.source ?? "Reviews"}
            </div>
          </div>

          <div
            className={[
              "relative mx-auto mt-6",
              "min-h-[140px] md:min-h-[160px] lg:min-h-[150px]",
            ].join(" ")}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={[
                  "absolute inset-0",
                  "transition-[opacity,transform] duration-500 ease-out",
                  "motion-reduce:transition-none",
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none",
                ].join(" ")}
              >
                <p
                  className="mx-auto text-sm leading-7 text-white/75 md:text-base"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {t.text}
                </p>

                <div className="mt-10 text-xs tracking-[0.25em] text-white/80">
                  {t.author}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={[
                  "h-[2px] w-6 transition-opacity",
                  "motion-reduce:transition-none",
                  i === index ? "bg-white/70" : "bg-white/20 hover:bg-white/40",
                ].join(" ")}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-70px] right-[8%] hidden md:block">
        <div className="relative w-[260px]">
          <div className="pointer-events-none absolute -left-6 -top-6 h-full w-full border border-[#C28C6B]/50" />

          <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
              alt="Brand image"
              className="h-full w-full object-cover opacity-95"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-x-0 bottom-6 text-center">
              <div
                className="text-lg tracking-[0.22em] text-white/85"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                IMAGE LOGO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
