import * as React from "react";

const footer_nav = [
  "ABOUT",
  "COMMUNITIES",
  "BUYERS",
  "SELLERS",
  "INVESTORS",
  "PROPERTY SEARCH",
  "BLOG",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80"
          alt="Footer background"
          className="h-full w-full object-cover opacity-35"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(36,36,36,0.70),rgba(7,7,7,1))]" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-[1400px] py-16">
        {/* ROW 1: logo + nav */}
        <div className="flex flex-col items-center gap-8 border-b border-white/30 pb-10 text-center">
          <div className="flex flex-col items-center">
            <div className="rounded border border-white/25 bg-black/10 px-4 py-3 text-xs tracking-[0.35em] text-white/85 backdrop-blur">
              IMAGE LOGO
            </div>
            <div
              className="mt-5 text-[22px] tracking-[0.35em] text-white/85"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              REAL ESTATE
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-[12px] tracking-[0.22em] text-white/70">
            {footer_nav.map((x) => (
              <a key={x} href="#" className="hover:text-white transition">
                {x}
              </a>
            ))}
          </nav>
        </div>

        {/* ROW 2: Testimonials / icons / Connect */}
        <div className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-3">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-block text-[22px] text-white/90 hover:text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="italic">Testimonials</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { k: "f", label: "Facebook" },
              { k: "ig", label: "Instagram" },
              { k: "in", label: "LinkedIn" },
            ].map((x) => (
              <a
                key={x.k}
                href="#"
                aria-label={x.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/80 hover:text-white transition"
              >
                {x.k}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <a
              href="#"
              className="inline-block text-[22px] text-white/90 hover:text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="italic">Connect with us</span>
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-white/30" />

        {/* ROW 3: addresses + badges + sitemap */}
        <div className="grid grid-cols-1 gap-8 pt-10 text-[15px] text-white/75 md:grid-cols-5 md:items-start">
          <div className="md:col-span-1">
            <div className="text-white">
              Phone: 801.610.MAIN
              <br />
              Email: Contact@ModernAndMain.com
            </div>

            <div className="mt-4 text-white/75">
              Salt Lake City | Lehi | Park City
            </div>

            <div className="mt-4 text-white/75">
              Data Powered by <b className="text-white">Home Junction</b>
            </div>
          </div>

          <div className="md:col-span-1 text-center md:text-left">
            650 S. Main Street Suite 150
            <br />
            Salt Lake City, UT 84101
          </div>

          <div className="md:col-span-1 text-center md:text-left">
            1633 W Innovation Way 4th floor
            <br />
            Lehi, UT 84043
          </div>

          <div className="md:col-span-1 text-center md:text-left">
            1389 Center Dr Suite 200
            <br />
            Park City, UT 84098
          </div>

          <div className="md:col-span-1 text-center md:text-right">
            <div className="flex items-center justify-center gap-3 md:justify-end">
              <div className="h-9 w-20 rounded bg-white/10" />
              <div className="h-9 w-10 rounded bg-white/10" />
            </div>

            <div className="mt-3 flex items-center justify-center gap-6 text-[14px] text-white/60 md:justify-end">
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
