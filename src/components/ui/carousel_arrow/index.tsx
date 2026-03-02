import type { CarouselArrowButtonProps } from "../../../types";

export default function CarouselArrow({
  direction,
  variant = "dark",
  className = "",
  ...props
}: CarouselArrowButtonProps) {
  const variants = {
    dark: "border border-white/25 bg-black/15 text-white/90 backdrop-blur hover:bg-black/45 hover:border-white/60 hover:text-white",
    light:
      "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50",
  };

  return (
    <button
      {...props}
      type="button"
      className={[
        "h-20 w-20 rounded-full flex items-center justify-center transition active:scale-95",
        variants[variant],
        className,
      ].join(" ")}
      aria-label={direction === "prev" ? "Previous" : "Next"}
    >
      <span className="text-xl">{direction === "prev" ? "←" : "→"}</span>
    </button>
  );
}
