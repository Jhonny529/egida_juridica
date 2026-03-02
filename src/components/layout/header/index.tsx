import * as React from "react";
import MenuOverlay from "../menu";
import { header_navigation } from "../../../data";

export default function Header() {
  const [is_open, set_is_open] = React.useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="relative flex h-20 items-center px-4 sm:px-8 text-white">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => set_is_open(true)}
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm backdrop-blur transition hover:bg-white/10"
            >
              <span className="text-lg leading-none">≡</span>
              <span>Menu</span>
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="border border-white/40 px-5 py-2 text-xs tracking-[0.35em] backdrop-blur">
              IMAGE LOGO
            </div>
          </div>

          <div className="ml-auto flex items-center gap-10 text-sm">
            <nav className="hidden items-center gap-10 md:flex">
              {header_navigation.map((item) => (
                <a
                  key={item.href}
                  className="transition hover:text-white/80"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {is_open && <MenuOverlay on_close={() => set_is_open(false)} />}
    </>
  );
}
