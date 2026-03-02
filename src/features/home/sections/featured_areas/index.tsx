import { CtaButton } from "../../../../components/ui";

export default function FeaturedAreasSection() {
  return (
    <section className="relative overflow-hidden bg-white text-neutral-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-[-30px] select-none text-center text-[140px] leading-none text-neutral-200/45 md:text-[220px]"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        AREAS
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative z-10">
          <div className="mx-auto aspect-[4/3] w-full max-w-[560px] border border-neutral-200 bg-neutral-50">
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
              MAP IMAGE
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <span className="h-px w-10 bg-[#C28C6B]" />
            <span className="italic">Featured areas</span>
          </div>

          <h2
            className="mt-6 text-5xl leading-[1.05] md:text-6xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Start Exploring
            <br />
            With Our
            <br />
            Local Experts
          </h2>

          <p className="mt-8 max-w-xl text-[15px] leading-7 text-neutral-600">
            We simplify the process by giving you unique market and demographic
            insights into each area, so you can find the right place to call
            home.
          </p>

          <CtaButton
            cta={{
              label: "READ MORE",
              href: "/about",
            }}
            variant="light"
            className="relative z-20 mt-12 h-12 px-8 text-xs tracking-[0.25em]"
          />
        </div>
      </div>
    </section>
  );
}
