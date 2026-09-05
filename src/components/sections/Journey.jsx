import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { journey } from "../../data";

/**
 * Journey Section — Redesigned Phase 3 Compact Developer Timeline.
 * Features a thin vertical track, small circular orange markers,
 * dark titles, muted descriptions, and 35% reduced vertical height.
 */
export default function Journey() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="journey"
      className="relative section-pad overflow-hidden bg-transparent"
      aria-label="Journey section"
    >
      {/* Subtle top border separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--color-border) 30%, var(--color-border) 70%, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* ── Section Container ──────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#f97316]">
              04
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400">
              Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-3"
            style={{ color: "var(--color-text-1)" }}
          >
            Journey<span className="text-[#f97316]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base sm:text-lg"
            style={{ color: "var(--color-text-2)" }}
          >
            My computer science and software development milestones.
          </motion.p>
        </div>

        {/* ── Compact Editorial Vertical Timeline ────────────────────── */}
        <div className="relative mt-6 sm:mt-8 max-w-4xl mx-auto">
          
          {/* Thin Vertical Timeline Line — Center on Desktop, Left-aligned on Mobile */}
          <div
            className="absolute top-2 bottom-2 left-4 md:left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#f97316]/35 to-transparent"
            aria-hidden="true"
          />

          {/* Timeline Milestones List */}
          <div className="space-y-6 sm:space-y-8">
            {journey.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Small Orange Circular Marker on Timeline */}
                  <div
                    className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-[#f97316] ring-4"
                    style={{
                      boxShadow: "0 0 10px rgba(249, 115, 22, 0.4)",
                      borderColor: isDark ? "#08080f" : "#fafaf7",
                    }}
                    aria-hidden="true"
                  />

                  {/* Milestone Content Block */}
                  <div className="w-full md:w-1/2 pl-9 md:pl-0 md:px-8">
                    <div className={`flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                      
                      {/* 1. Year Tag */}
                      <span className="font-mono text-xs font-bold tracking-wider text-[#f97316] uppercase mb-1">
                        {item.year}
                      </span>

                      {/* 2. Dark Milestone Title */}
                      <h3
                        className="font-display font-bold text-lg sm:text-xl tracking-tight leading-snug mb-1.5"
                        style={{ color: "var(--color-text-1)" }}
                      >
                        {item.title}
                      </h3>

                      {/* 3. Muted Description */}
                      <p
                        className="font-body text-sm sm:text-base leading-relaxed"
                        style={{ color: "var(--color-text-2)" }}
                      >
                        {item.description}
                      </p>

                      {/* 4. Optional Tech / Context Tag */}
                      {item.tag && (
                        <span
                          className="font-mono text-[11px] font-medium text-slate-400 dark:text-slate-500 mt-2"
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Empty Half for Desktop Symmetrical Layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
