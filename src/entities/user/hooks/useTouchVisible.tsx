import { getDeviceType, useClickOutside } from "@/shared/helpers";
import { useState, useRef, RefObject, useMemo } from "react";

export const useTouchVisible = <T extends HTMLElement>(
  excludedRefs: RefObject<HTMLElement>[],
) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMemo(() => getDeviceType() === "mobile", []);
  const ref = useRef<T>(null);

  const handleTouchEnd = () => {
    if (!isMobile) {
      return;
    }
    setTimeout(() => setIsHovered((prev) => !prev), 500);
  };

  useClickOutside(
    ref,
    () => {
      setIsHovered(false);
    },
    excludedRefs,
  );

  return {
    targetRef: ref,
    isHovered,
    handleTouchEnd,
  };
};
