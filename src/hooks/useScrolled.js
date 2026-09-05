import { useState, useEffect } from "react";

/**
 * useScrolled — Returns true when the page has scrolled past a threshold.
 * Uses requestAnimationFrame throttling and deduplicated state updates
 * to avoid forced layout and unnecessary re-renders during scrolling.
 * @param {number} threshold - Scroll Y position to trigger (default: 20px)
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > threshold;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

