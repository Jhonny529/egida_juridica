import * as React from "react";
import type { Testimonial } from "../../../../types";

const testimonials: Testimonial[] = [
  {
    rating: 5,
    text: `I have been very impressed with Paris’s professionalism and knowledge. She has always promptly returned my calls or emails. I have worked with part-time “wannabe” agents in the past, so it is refreshing to work with a full time and dedicated real estate professional. Thank you Paris for all your hard work in helping me and my family find our home.`,
    author: "Sam M.",
    source: "Google",
  },
  {
    rating: 5,
    text: `Professional, responsive, and clear from start to finish. They made every step feel simple and handled details that would’ve been stressful on my own.`,
    author: "Andrea M.",
    source: "Google",
  },
  {
    rating: 4,
    text: `We felt supported the entire time. Great negotiation, great communication, and a strong strategy that delivered results.`,
    author: "Carlos R.",
    source: "Google",
  },
  {
    rating: 5,
    text: `I have been very impressed with Paris’s professionalism and knowledge. She has always promptly returned my calls or emails. I have worked with part-time “wannabe” agents in the past, so it is refreshing to work with a full time and dedicated real estate professional. Thank you Paris for all your hard work in helping me and my family find our home.`,
    author: "Sam M.",
    source: "Google",
  },
  {
    rating: 5,
    text: `Professional, responsive, and clear from start to finish. They made every step feel simple and handled details that would’ve been stressful on my own.`,
    author: "Andrea M.",
    source: "Google",
  },
  {
    rating: 4,
    text: `We felt supported the entire time. Great negotiation, great communication, and a strong strategy that delivered results.`,
    author: "Carlos R.",
    source: "Google",
  },
];

export default function SuccessStoriesSection() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2400&q=80"
          alt="Success Stories"
          className="h-full w-full object-cover"
          draggable={false}
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-12 select-none text-center text-[160px] leading-none text-white/5 md:text-[240px]"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        CLIENTS
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center text-white">
        <h2
          className="text-4xl md:text-6xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Success Stories
        </h2>

        <div className="mx-auto mt-4 h-px w-16 bg-white/40" />

        <div className="relative mx-auto mt-12 min-h-[160px] md:min-h-[200px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={[
                "absolute inset-0 transition-[opacity,transform] duration-500 ease-out",
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none",
              ].join(" ")}
            >
              <p className="mx-auto max-w-3xl text-sm leading-7 text-white/80 md:text-base">
                “{t.text}”
              </p>

              <div className="mt-8 text-xs tracking-[0.25em] text-white/90">
                {t.author}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={[
                "h-[2px] w-8 transition-opacity",
                i === index ? "bg-white/70" : "bg-white/25",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
