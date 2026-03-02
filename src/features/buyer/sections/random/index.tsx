import { CtaButton } from "../../../../components/ui";

export default function AboutSection() {
  return (
    <section className="relative overflow-visible bg-white text-neutral-900">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 py-32 md:grid-cols-2 md:items-center md:pb-0">
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <span className="h-px w-12 bg-[#C28C6B]" />
            <span className="italic">About us</span>
          </div>

          <h2
            className="mt-8 text-6xl leading-[1.02] md:text-7xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Proud To Be
            <br />
            Your Utah Real
            <br />
            Estate Experts.
          </h2>

          <p className="mt-10 text-[17px] leading-8 text-neutral-600">
            We understand that buying or selling a home is more than just a
            transaction: it’s a life-changing experience. That’s why our team is
            dedicated to providing exceptional, personalized service.
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

        <div className="relative z-20 hidden md:block">
          <div className="relative -mt-8 translate-y-4 mb-[-30px] w-[75%] ml-auto">
            <div className="pointer-events-none absolute -right-8 -top-8 h-full w-full border border-[#C28C6B]/60" />

            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&h=1200&q=80"
              alt="About"
              className="relative h-[700px] w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
