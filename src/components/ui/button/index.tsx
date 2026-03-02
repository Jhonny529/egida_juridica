import type { ButtonProps, ButtonVariant } from "../../../types";

export default function Button({
  variant = "dark",
  full_width = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "h-11 px-6 text-xs tracking-[0.18em] inline-flex items-center justify-center font-sans transition-all duration-300 ease-out active:scale-[0.98]";

  const variants: Record<ButtonVariant, string> = {
    dark: "border border-white/35 text-white/90 backdrop-blur hover:bg-white/10 hover:-translate-y-[2px] hover:shadow-lg",
    light:
      "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 hover:-translate-y-[2px] hover:shadow-md hover:border-neutral-400",
  };

  const classes = [
    base,
    variants[variant],
    full_width ? "w-full" : "",
    className,
  ].join(" ");

  if (props.as === "a") {
    const { as, ...a_props } = props;
    return (
      <a {...a_props} className={classes}>
        {children}
      </a>
    );
  }

  const { as, type, ...btn_props } = props as Extract<
    ButtonProps,
    { as?: "button" }
  >;
  return (
    <button type={type ?? "button"} {...btn_props} className={classes}>
      {children}
    </button>
  );
}
