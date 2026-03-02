export type NavItem = {
    label: string;
    href: string;
};

export type MenuPanelData = {
    title: string;
    items: NavItem[];
    bg: string;
    bg_pos?: string;
    cta?: { label: string; href?: string };
};

export type HeaderProps = { on_close: () => void }; // 👈 antes Props
export type Phase = "opening" | "open" | "closing";
export type MenuItem = { label: string; href?: string };

export type MenuPanelProps = {
    phase: Phase;
    delay_ms: number;
    title: string;
    items: MenuItem[];
    cta?: { label: string; href?: string };
    bg: string;
    bg_pos?: string;
};