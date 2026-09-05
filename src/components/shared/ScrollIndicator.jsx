import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * ScrollIndicator — Bottom-of-hero scroll prompt.
 * Clicking smoothly scrolls to the #about section.
 * Shows "SCROLL TO EXPLORE" with a bouncing chevron.
 */
export default function ScrollIndicator() {
  function handleClick() {
    const about = document.querySelector("#about");
    if (about) about.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Scroll to explore"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      whileHover={{ opacity: 1 }}
      className="group flex flex-col items-center gap-2.5 cursor-pointer
                 text-content-muted hover:text-content-secondary transition-colors duration-300"
    >
      {/* Label */}
      <span
        className="font-mono text-[9px] tracking-[0.3em] uppercase"
        aria-hidden="true"
      >
        Scroll to Explore
      </span>

      {/* Animated arrow */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut",
        }}
        className="w-8 h-8 rounded-full border border-line
                   flex items-center justify-center
                   group-hover:border-accent/40 transition-colors duration-300"
      >
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className="group-hover:text-accent transition-colors duration-300"
        />
      </motion.div>
    </motion.button>
  );
}
