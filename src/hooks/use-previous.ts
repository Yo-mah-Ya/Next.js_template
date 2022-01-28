import { useEffect, useRef } from "react";

export const useIdleCallback = <T>(value: T): undefined | T => {
    const ref = useRef<undefined | T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
