import { useState, useEffect } from "react";

/**
 * useScrolled — Returns true when the page has scrolled past a threshold.
 * Used by Navbar to toggle its background style.
 * @param {number} threshold - Scroll Y position to trigger (default: 20px)
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    // Set initial state
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
