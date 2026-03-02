import Button from "../button";
import type { CtaButtonProps } from "../../../types";

export default function CtaButton({
  cta,
  variant = "dark",
  full_width = false,
  className = "",
}: CtaButtonProps) {
  if (cta.href) {
    return (
      <Button
        as="a"
        href={cta.href}
        variant={variant}
        full_width={full_width}
        className={className}
      >
        {cta.label}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      full_width={full_width}
      onClick={cta.onClick}
      className={className}
    >
      {cta.label}
    </Button>
  );
}
