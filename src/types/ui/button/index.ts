import type * as React from "react";

export type ButtonVariant = "dark" | "light";

type Base = {
    variant?: ButtonVariant;
    full_width?: boolean;
    className?: string;
    children?: React.ReactNode;
};

export type ButtonProps =
    | (Base &
    { as?: "button" } &
        React.ButtonHTMLAttributes<HTMLButtonElement>)
    | (Base &
    { as: "a"; href: string } &
        React.AnchorHTMLAttributes<HTMLAnchorElement>);