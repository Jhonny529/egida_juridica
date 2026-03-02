export default function BuyersIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-neutral-900">
      {/* Fondo grande más pequeño */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="select-none text-[90px] leading-none text-neutral-900/[0.03] md:text-[140px] lg:text-[180px]"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          BUYERS
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="flex items-start gap-5 md:gap-8">
          {/* Línea más corta */}
          <div className="mt-1 h-10 w-px bg-[#C28C6B] md:h-14" />

          <h2
            className="text-xl leading-snug md:text-2xl lg:text-3xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Whether you’re a first time home buyer or an experienced one,
            we&apos;ve got you covered from start to finish!
          </h2>
        </div>
      </div>
    </section>
  );
}
