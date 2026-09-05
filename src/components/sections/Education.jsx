import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { education } from "../../data";

/**
 * Education Section — Redesigned Phase 5 Balanced Showcase Card.
 * One polished, purposeful card with strong typography, comfortable padding,
 * clean academic tags, subtle hover lift, and robust accessibility fallbacks.
 */
export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Access education data from store
  const eduData = education[0] || {};
  const collegeName =
    eduData.institution && eduData.institution !== "Your College Name"
      ? eduData.institution
      : null;

  const relevantStudy = eduData.highlights || [
    "Core CS Fundamentals",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
  ];

  return (
    <section
      id="education"
      aria-label="Education section"
      className="relative section-pad overflow-hidden bg-transparent"
    >
      {/* ── Top Border Separator ───────────────────────────────────── */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--color-border) 30%, var(--color-border) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── Main Container ─────────────────────────────────────────── */}
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
              06
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400">
              Academic Background
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
            style={{ color: "var(--color-text-1)" }}
          >
            Education<span className="text-[#f97316]">.</span>
          </motion.h2>
        </div>

        {/* ── Polished Education Showcase Card (Single Card, 180-220px Desktop) ── */}
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl p-6 sm:p-7 md:p-8 border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 hover:shadow-lg overflow-hidden flex flex-col justify-between"
            style={{
              background: isDark
                ? "rgba(15, 15, 26, 0.88)"
                : "rgba(253, 252, 248, 0.98)", // Warm cream background
              borderColor: isDark
                ? "rgba(255, 255, 255, 0.09)"
                : "rgba(0, 0, 0, 0.08)",
              boxShadow: isDark
                ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                : "0 8px 25px -10px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Subtle Left Edge Orange Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316] rounded-l-2xl group-hover:w-1.5 transition-all duration-300 ease-out" />

            {/* Top Row: Icon + Degree + Status Badge */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6 pl-2">
              
              {/* Left Group: Icon + Degree Information */}
              <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                {/* Academic Icon Box */}
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all duration-300 ease-out group-hover:border-[#f97316]/40 mt-0.5"
                  style={{
                    background: isDark ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.06)",
                    borderColor: isDark ? "rgba(249, 115, 22, 0.25)" : "rgba(249, 115, 22, 0.2)",
                  }}
                >
                  <GraduationCap size={22} className="text-[#f97316]" strokeWidth={1.8} />
                </div>

                {/* Degree & Year Details */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#f97316]">
                      UNDERGRADUATE
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-xl sm:text-2xl leading-snug tracking-tight group-hover:text-[#f97316] transition-colors duration-300 ease-out"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    B.E. Computer Science Engineering
                  </h3>

                  {collegeName && (
                    <p className="font-body text-sm font-medium text-slate-400 mt-1">
                      {collegeName}
                    </p>
                  )}

                  <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-mono font-medium text-slate-400">
                    <Calendar size={13} className="text-[#f97316]" />
                    <span>Expected Graduation: 2028</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Subtle Status Pill */}
              <div className="self-start md:self-auto flex-shrink-0">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold tracking-wide border"
                  style={{
                    background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                    color: isDark ? "#94a3b8" : "#64748b",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active Student
                </span>
              </div>
            </div>

            {/* Bottom Row: Core Focus & Study Area Tags */}
            {relevantStudy && relevantStudy.length > 0 && (
              <div
                className="mt-6 pt-5 border-t flex flex-col sm:flex-row sm:items-center gap-3 pl-2"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center gap-1.5 flex-shrink-0 text-slate-400">
                  <BookOpen size={13} className="text-[#f97316]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Core Focus:
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {relevantStudy.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border"
                      style={{
                        background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                        color: isDark ? "#cbd5e1" : "#475569",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </motion.article>
        </div>

      </div>
    </section>
  );
}


