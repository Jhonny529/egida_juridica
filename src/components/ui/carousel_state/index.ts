import * as React from "react";
import type { EmblaCarouselType } from "embla-carousel";

export function useCarouselState(embla_api: EmblaCarouselType | undefined) {
    const [selected_index, set_selected_index] = React.useState(0);

    React.useEffect(() => {
        if (!embla_api) return;

        const on_select = () => set_selected_index(embla_api.selectedScrollSnap());
        on_select();

        embla_api.on("select", on_select);
        embla_api.on("reInit", on_select);

        return () => {
            embla_api.off("select", on_select);
            embla_api.off("reInit", on_select);
        };
    }, [embla_api]);

    const scroll_prev = React.useCallback(() => embla_api?.scrollPrev(), [embla_api]);
    const scroll_next = React.useCallback(() => embla_api?.scrollNext(), [embla_api]);

    return { selected_index, scroll_prev, scroll_next };
}