import { useEffect, RefObject } from "react";

export const useOnClickOutSide = (
    ref: RefObject<HTMLElement>,
    handler: (event: MouseEvent) => void
): void => {
    useEffect(() => {
        const onMousedown = (event: MouseEvent): void => {
            if (!ref.current || !event.target) {
                return;
            }
            if (
                event.target instanceof Node &&
                ref.current.contains(event.target)
            )
                return;
            handler(event);
        };

        document.addEventListener("mousedown", onMousedown);
        return (): void => {
            document.removeEventListener("mousedown", onMousedown);
        };
    }, [ref, handler]);
};
