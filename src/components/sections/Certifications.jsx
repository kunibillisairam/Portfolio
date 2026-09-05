import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink, Sparkles, FileBadge, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { certifications } from "../../data";

// Genuine Achievements derived directly from user portfolio data
const ACTUAL_ACHIEVEMENTS = [
  {
    id: "ach-1",
    num: "01",
    category: "HACKATHONS & PROJECTS",
    title: "Hackathon Participation & Technical Projects",
    description: "Built and presented technology-driven solutions across software and machine learning domain competitions.",
    year: "2024 — 2026",
    icon: Trophy,
  },
  {
    id: "ach-2",
    num: "02",
    category: "MACHINE LEARNING",
    title: "Deployed ML Retention Prediction System",
    description: "Engineered and deployed an end-to-end customer subscription cancellation prediction model.",
    year: "2025",
    icon: Sparkles,
  },
  {
    id: "ach-3",
    num: "03",
    category: "FULL-STACK & DATA",
    title: "Full-Stack Web & Analytics Dashboards",
    description: "Built responsive web applications and interactive business forecasting dashboards.",
    year: "2024 — 2025",
    icon: Award,
  },
];

export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="certifications"
      aria-label="Achievements and Certifications section"
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
              05
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400">
              Credentials &amp; Milestones
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
            Achievements &amp; Certifications<span className="text-[#f97316]">.</span>
          </motion.h2>
        </div>

        {/* ── Two Visually Distinct Columns Grid ────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* ── LEFT COLUMN: Achievements ───────────────────────────── */}
          <div>
            {/* Left Header */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center border"
                style={{
                  background: isDark ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.06)",
                  borderColor: isDark ? "rgba(249, 115, 22, 0.25)" : "rgba(249, 115, 22, 0.2)",
                }}
              >
                <Trophy size={17} className="text-[#f97316]" />
              </div>
              <h3
                className="font-display font-bold text-xl sm:text-2xl tracking-tight"
                style={{ color: "var(--color-text-1)" }}
              >
                Achievements
              </h3>
            </div>

            {/* Achievements List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4 sm:space-y-5"
            >
              {ACTUAL_ACHIEVEMENTS.map((item) => {
                return (
                  <motion.article
                    key={item.id}
                    variants={itemVariants}
                    className="group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 hover:shadow-lg overflow-hidden flex flex-col justify-between"
                    style={{
                      background: isDark ? "rgba(15, 15, 26, 0.88)" : "rgba(253, 252, 248, 0.98)",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)",
                      boxShadow: isDark
                        ? "0 10px 25px -10px rgba(0, 0, 0, 0.5)"
                        : "0 8px 20px -10px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {/* Subtle Orange Vertical Accent on Left Edge */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316] rounded-l-2xl group-hover:w-1.5 transition-all duration-300 ease-out" />

                    <div className="pl-2">
                      {/* Top Row: Item Number & Category */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="font-mono text-xs font-bold text-[#f97316]">
                          {item.num}
                        </span>
                        <span className="text-slate-400 dark:text-slate-600 text-xs">/</span>
                        <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#f97316]">
                          {item.category}
                        </span>
                      </div>

                      {/* Achievement Title (Strongest visual text) */}
                      <h4
                        className="font-display font-bold text-xl sm:text-2xl mb-2 leading-snug tracking-tight group-hover:text-[#f97316] transition-colors duration-300 ease-out"
                        style={{ color: "var(--color-text-1)" }}
                      >
                        {item.title}
                      </h4>

                      {/* Short Description */}
                      <p
                        className="font-body text-sm sm:text-base leading-relaxed mb-4"
                        style={{ color: "var(--color-text-2)" }}
                      >
                        {item.description}
                      </p>

                      {/* Footer Row: Year & Interactive Arrow */}
                      <div
                        className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/5 text-xs font-mono font-medium text-slate-400"
                      >
                        <span>{item.year}</span>
                        <ArrowUpRight
                          size={16}
                          className="text-[#f97316] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-out"
                        />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Certifications ───────────────────────── */}
          <div>
            {/* Right Header */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center border"
                style={{
                  background: isDark ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.06)",
                  borderColor: isDark ? "rgba(249, 115, 22, 0.25)" : "rgba(249, 115, 22, 0.2)",
                }}
              >
                <FileBadge size={17} className="text-[#f97316]" />
              </div>
              <h3
                className="font-display font-bold text-xl sm:text-2xl tracking-tight"
                style={{ color: "var(--color-text-1)" }}
              >
                Certifications
              </h3>
            </div>

            {/* Certifications List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4 sm:space-y-5"
            >
              {certifications.map((cert) => (
                <motion.article
                  key={cert.id}
                  variants={itemVariants}
                  className="group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 hover:shadow-lg flex flex-col justify-between"
                  style={{
                    background: isDark ? "rgba(15, 15, 26, 0.88)" : "rgba(253, 252, 248, 0.98)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)",
                    boxShadow: isDark
                      ? "0 10px 25px -10px rgba(0, 0, 0, 0.5)"
                      : "0 8px 20px -10px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div className="flex items-start gap-4 min-w-0">
                    {/* Small Certificate Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border transition-all duration-300 ease-out group-hover:border-[#f97316]/40 mt-0.5"
                      style={{
                        background: isDark ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.06)",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <Award size={18} className="text-[#f97316]" strokeWidth={1.8} />
                    </div>

                    {/* Certificate Information */}
                    <div className="min-w-0 flex-1">
                      {/* Provider / Issuer */}
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#f97316] block mb-1">
                        {cert.issuer}
                      </span>

                      {/* Certificate Title */}
                      <h4
                        className="font-display font-bold text-xl sm:text-2xl leading-snug tracking-tight group-hover:text-[#f97316] transition-colors duration-300 ease-out mb-2"
                        style={{ color: "var(--color-text-1)" }}
                      >
                        {cert.title}
                      </h4>

                      {/* Year & Action Footer */}
                      <div className="flex items-center justify-between pt-3 mt-2 border-t border-black/5 dark:border-white/5">
                        {cert.date && (
                          <span className="font-mono text-xs font-medium text-slate-400">
                            Completed: {cert.date}
                          </span>
                        )}

                        {/* View Certificate Button — ONLY rendered if actual credential URL exists */}
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-[#f97316] hover:brightness-110 transition-all duration-300 ease-out group/cert shadow-sm ml-auto"
                          >
                            <span className="group-hover/cert:translate-x-0.5 transition-transform duration-300 ease-out">
                              View Certificate ↗
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}


