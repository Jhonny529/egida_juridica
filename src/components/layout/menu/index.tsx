import * as React from "react";
import type { HeaderProps, Phase, MenuPanelProps } from "../../../types";
import { menu_panels } from "../../../data";

const DURATION_MS = 780;
const STAGGER_MS = 200;

const BACKDROP_MS = 220;
const KICK_MS = 70;

function MenuPanel({
  phase,
  delay_ms,
  title,
  items,
  cta,
  bg,
  bg_pos = "center",
}: MenuPanelProps) {
  const style: React.CSSProperties = {
    transitionDelay: `${delay_ms}ms`,
    transitionDuration: `${DURATION_MS}ms`,
    transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
    willChange: "transform",
  };

  return (
    <section
      className={[
        "group relative isolate h-full overflow-hidden",
        "transition-transform",
        phase === "closing" ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      style={style}
    >
      <div className="absolute inset-0">
        <img
          src={bg}
          alt={title}
          className="h-full w-full object-cover"
          style={{ objectPosition: bg_pos }}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/55 transition-opacity duration-300 group-hover:bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.7))]" />
      </div>

      <div className="relative flex h-full items-center justify-center px-6">
        <div className="text-center">
          <div
            className="text-[32px] text-white/92 md:text-[36px]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </div>

          <div
            className={[
              "mx-auto mt-6 w-full max-w-[260px]",
              "transition-all duration-300 ease-out",
              "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            ].join(" ")}
          >
            <div className="space-y-3 text-xs tracking-[0.18em] text-white/70">
              {items.map((it) => (
                <a
                  key={`${title}-${it.label}`}
                  href={it.href}
                  className="block transition hover:text-white/95"
                >
                  {it.label.toUpperCase()}
                </a>
              ))}
            </div>

            {cta &&
              (cta.href ? (
                <a
                  href={cta.href}
                  className="mt-6 inline-flex h-11 items-center border border-white/25 bg-white/0 px-5 text-xs tracking-[0.18em] text-white/85 backdrop-blur transition hover:bg-white/10"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {cta.label}
                </a>
              ) : (
                <button
                  type="button"
                  className="mt-6 inline-flex h-11 items-center border border-white/25 bg-white/0 px-5 text-xs tracking-[0.18em] text-white/85 backdrop-blur transition hover:bg-white/10"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {cta.label}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MenuOverlay({ on_close }: HeaderProps) {
  const [phase, set_phase] = React.useState<Phase>("closing");
  const [backdrop_on, set_backdrop_on] = React.useState(false);

  const timers_ref = React.useRef<number[]>([]);
  const opened_at_ref = React.useRef<number | null>(null);
  const close_last_idx_ref = React.useRef<number>(menu_panels.length - 1);

  const clear_timers = React.useCallback(() => {
    for (const t of timers_ref.current) window.clearTimeout(t);
    timers_ref.current = [];
  }, []);

  React.useEffect(() => {
    clear_timers();

    const t0 = window.setTimeout(() => set_backdrop_on(true), 0);

    const t1 = window.setTimeout(() => {
      opened_at_ref.current = performance.now();
      set_phase("opening");
    }, KICK_MS);

    const enter_total =
      DURATION_MS + Math.max(0, menu_panels.length - 1) * STAGGER_MS;

    const t2 = window.setTimeout(() => {
      set_phase("open");
    }, KICK_MS + enter_total);

    timers_ref.current = [t0, t1, t2];
    return clear_timers;
  }, [clear_timers]);

  const request_close = React.useCallback(() => {
    if (phase === "closing") return;

    clear_timers();

    const now = performance.now();
    const opened_at = opened_at_ref.current;

    let last_idx = -1;
    if (opened_at != null) {
      const elapsed = Math.max(0, now - opened_at);
      last_idx = Math.min(
        menu_panels.length - 1,
        Math.floor(elapsed / STAGGER_MS),
      );
    }
    close_last_idx_ref.current = last_idx;

    set_phase("closing");
    set_backdrop_on(false);

    const panel_total = last_idx >= 0 ? DURATION_MS + last_idx * STAGGER_MS : 0;
    const total = Math.max(panel_total, BACKDROP_MS);

    window.setTimeout(() => on_close(), total);
  }, [phase, on_close, clear_timers]);

  React.useEffect(() => {
    const on_key = (e: KeyboardEvent) => {
      if (e.key === "Escape") request_close();
    };
    window.addEventListener("keydown", on_key);
    return () => window.removeEventListener("keydown", on_key);
  }, [request_close]);

  const last_idx =
    phase === "closing" ? close_last_idx_ref.current : menu_panels.length - 1;

  const panels: MenuPanelProps[] = menu_panels.map((panel, index) => ({
    phase,
    delay_ms:
      phase === "closing"
        ? index <= last_idx
          ? index * STAGGER_MS
          : 0
        : index * STAGGER_MS,
    title: panel.title,
    items: panel.items,
    cta: panel.cta,
    bg: panel.bg,
  }));

  return (
    <div
      className={[
        "fixed inset-0 z-[60]",
        backdrop_on ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <div
        style={{ transitionDuration: `${BACKDROP_MS}ms` }}
        className={[
          "absolute inset-0 bg-black/65 transition-opacity",
          backdrop_on ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={request_close}
      />

      <div
        style={{ transitionDuration: `${BACKDROP_MS}ms` }}
        className={[
          "absolute left-6 top-6 z-20 flex items-center gap-3 text-white/90",
          "transition-all ease-out",
          backdrop_on
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={request_close}
          className="flex items-center gap-3 pointer-events-auto"
          aria-label="Close menu"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur">
            ✕
          </span>
          <span className="text-sm">Close</span>
        </button>
      </div>

      <div className="absolute inset-0">
        <div
          className="grid h-full"
          style={{
            gridTemplateColumns: `repeat(${menu_panels.length}, minmax(0,1fr))`,
          }}
        >
          {panels.map((p, idx) => (
            <div
              key={`${p.title}-${idx}`}
              className={[
                "h-full overflow-hidden",
                idx === 0 ? "" : "-ml-px",
              ].join(" ")}
            >
              <MenuPanel {...p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
