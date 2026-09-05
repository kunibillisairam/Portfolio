import { motion } from "framer-motion";
import { Beaker, ArrowUpRight, Play, Terminal } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { experiments } from "../../data";

/**
 * Experiments Section — Represents code laboratory, micro-experiments,
 * or ongoing prototypes with status tracking and interactive terminal-style cards.
 */
export default function Experiments() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="experiments"
      className="relative section-pad overflow-hidden bg-transparent"
      aria-label="Experiments section"
    >
      {/* Top separator line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--color-border) 30%, var(--color-border) 70%, transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-4"
          >
            <span
              className="font-mono text-[11px] font-bold tracking-widest"
              style={{ color: "var(--color-accent)" }}
            >
              06
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "10px" }}>/</span>
            <span
              className="font-mono text-[11px] tracking-[0.18em] uppercase font-semibold"
              style={{ color: "var(--color-text-3)" }}
            >
              The Laboratory
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-section-title"
            style={{ color: "var(--color-text-1)" }}
          >
            Micro-experiments &amp; <span className="text-gradient-theme">prototypes.</span>
          </motion.h2>
        </div>

        {/* ── Grid Layout of Lab Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiments.map((exp) => (
            <motion.article
              key={exp.id}
              variants={cardVariants}
              className="rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.015]"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                {/* Simulated Window/Terminal Header Bar */}
                <div
                  className="flex items-center justify-between px-5 py-3.5 border-b"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="flex items-center gap-1.5 select-none">
                    <span className="relative flex items-center justify-center">
                      <span className="absolute w-2 h-2 rounded-full bg-purple-500/40 animate-ping" />
                      <span className="relative w-1.5 h-1.5 rounded-full bg-purple-500" />
                    </span>
                    <span className="font-mono text-[9px] text-content-secondary uppercase tracking-widest font-semibold">
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Tech stack chips */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="chip-theme">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-display font-bold text-[16px] mb-2 leading-snug"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="font-body text-[12.5px] leading-relaxed"
                    style={{ color: "var(--color-text-2)" }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Bottom bar / footer link */}
              <div
                className="px-6 py-4 border-t flex items-center justify-between"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-content-muted" />
                  <span className="font-mono text-[10px] text-content-muted">
                    exp://sairam/{exp.id}
                  </span>
                </div>
                
                <button
                  className="flex items-center gap-1 text-[11px] font-mono hover:underline font-semibold focus:outline-none"
                  style={{ color: "var(--color-accent)" }}
                >
                  Inspect code
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
