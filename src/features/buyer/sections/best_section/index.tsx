import { CtaButton } from "../../../../components/ui";

export default function BuyWithBestSection() {
  return (
    <section className="relative overflow-visible bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:py-20">
        <div className="relative z-20 order-1">
          <div className="relative mx-auto w-full max-w-[520px] md:mx-0 md:w-[75%] md:max-w-none md:-mt-8 md:mb-[-30px] md:translate-y-4">
            <div className="pointer-events-none absolute -right-6 -top-6 h-full w-full border border-[#C28C6B]/60 md:-left-8 md:-right-auto md:-top-8" />

            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&h=1200&q=80"
              alt="Buyers"
              className="relative h-[420px] w-full object-cover md:h-[700px]"
              draggable={false}
            />
          </div>
        </div>

        <div className="relative z-10 order-2 max-w-xl">
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <span className="h-px w-10 bg-[#C28C6B]" />
            <span className="italic">Buyers</span>
          </div>

          <h2
            className="mt-6 text-5xl leading-[1.02] md:text-7xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Buy With The Best
            <br />
            Team In Utah.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-3">
            <div>
              <div
                className="text-2xl leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Get daily hand
                <br />
                picked listings.
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                We are here to make sure your dream home never slips by you.
              </p>
              <a
                href="/#"
                className="mt-4 inline-block text-xs tracking-[0.22em] text-neutral-700 underline underline-offset-4"
              >
                PROPERTY SEARCH
              </a>
            </div>

            <div>
              <div
                className="text-2xl leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Advice when you
                <br />
                need it the most.
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                We are here to give you advice, not pressure you into buying.
              </p>
              <a
                href="/#"
                className="mt-4 inline-block text-xs tracking-[0.22em] text-neutral-700 underline underline-offset-4"
              >
                CONTACT US
              </a>
            </div>

            <div>
              <div
                className="text-2xl leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Pair up with a
                <br />
                trusted agent.
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                When you&apos;re ready, we are here to help you buy a home.
              </p>
              <a
                href="/#"
                className="mt-4 inline-block text-xs tracking-[0.22em] text-neutral-700 underline underline-offset-4"
              >
                MEET THE TEAM
              </a>
            </div>
          </div>

          <CtaButton
            cta={{ label: "YOUR GUIDE TO BUYING", href: "/buyers" }}
            variant="light"
            className="mt-8 h-12 px-8 text-xs tracking-[0.25em]"
          />
        </div>
      </div>
    </section>
  );
}
