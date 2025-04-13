import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  excludeRefs: RefObject<HTMLElement | null>[] = [],
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedNode = event.target as Node;

      if (!ref.current) return;
      const isInside = ref.current.contains(clickedNode);
      const isExcluded = excludeRefs.some((excludeRef) =>
        excludeRef.current?.contains(clickedNode),
      );
      console.log(isInside, isExcluded, ref.current, clickedNode);

      if (!isInside && !isExcluded) callback();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, excludeRefs]);
};
