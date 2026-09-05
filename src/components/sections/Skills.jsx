import { motion } from "framer-motion";
import { Code2, Terminal, Brain, Wrench } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

// ─── 4 Category Tech Stack Capability Groups ─────────────────────────────────
const TECH_GROUPS = [
  {
    num: "01",
    id: "languages",
    title: "Languages",
    description: "Core programming languages and syntax foundations.",
    footerNote: "Core development foundation",
    icon: Code2,
    items: [
      { name: "Python", code: "PY" },
      { name: "JavaScript", code: "JS" },
      { name: "SQL", code: "SQL" },
      { name: "HTML5", code: "HTML" },
      { name: "CSS3", code: "CSS" },
    ],
  },
  {
    num: "02",
    id: "development",
    title: "Development",
    description: "Modern web frameworks, UI libraries, and runtime environments.",
    footerNote: "Full-stack client & server architecture",
    icon: Terminal,
    items: [
      { name: "React", code: "RE" },
      { name: "Node.js", code: "ND" },
      { name: "Express.js", code: "EX" },
      { name: "Tailwind CSS", code: "TW" },
      { name: "Vite", code: "VT" },
    ],
  },
  {
    num: "03",
    id: "data-ml",
    title: "Data & Machine Learning",
    description: "Analytical pipelines, machine learning models, and visualization dashboards.",
    footerNote: "Predictive modeling & business intelligence",
    icon: Brain,
    items: [
      { name: "Python", code: "PY" },
      { name: "Pandas", code: "PD" },
      { name: "NumPy", code: "NP" },
      { name: "Scikit-learn", code: "SK" },
      { name: "Power BI", code: "BI" },
      { name: "Matplotlib", code: "MP" },
    ],
  },
  {
    num: "04",
    id: "tools",
    title: "Tools & Platforms",
    description: "Version control, database management, and deployment tools.",
    footerNote: "Engineering workflow & cloud tooling",
    icon: Wrench,
    items: [
      { name: "Git", code: "GIT" },
      { name: "GitHub", code: "GH" },
      { name: "MongoDB", code: "MDB" },
      { name: "VS Code", code: "VS" },
      { name: "Vercel", code: "VCL" },
      { name: "Postman", code: "PM" },
    ],
  },
];

export default function Skills() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      aria-label="Tech Stack section"
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
              03
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400">
              Toolbox &amp; Capabilities
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
            Tech Stack<span className="text-[#f97316]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base sm:text-lg"
            style={{ color: "var(--color-text-2)" }}
          >
            Tools and technologies I build with.
          </motion.p>
        </div>

        {/* ── 4 Capability Cards Grid (2 × 2 Desktop, 1 Col Mobile) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch"
        >
          {TECH_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.id}
                variants={cardVariants}
                className="group relative rounded-2xl p-5 sm:p-6 lg:p-7 border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#f97316]/40 hover:shadow-lg flex flex-col justify-between h-full"
                style={{
                  background: isDark
                    ? "rgba(15, 15, 26, 0.88)"
                    : "rgba(253, 252, 248, 0.98)",
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.09)"
                    : "rgba(0, 0, 0, 0.08)",
                  boxShadow: isDark
                    ? "0 10px 25px -10px rgba(0, 0, 0, 0.5)"
                    : "0 8px 20px -10px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div>
                  {/* TOP ROW: Category Icon Badge with Accent Dot + Number */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ease-out group-hover:scale-105 group-hover:border-[#f97316]/50"
                        style={{
                          background: isDark
                            ? "rgba(249, 115, 22, 0.08)"
                            : "rgba(249, 115, 22, 0.06)",
                          borderColor: isDark
                            ? "rgba(249, 115, 22, 0.25)"
                            : "rgba(249, 115, 22, 0.2)",
                        }}
                      >
                        <Icon
                          size={18}
                          className="text-[#f97316] transition-transform duration-300 ease-out group-hover:rotate-3"
                          strokeWidth={1.8}
                        />
                        {/* Small orange accent dot */}
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#f97316] ring-2 ring-white dark:ring-[#0f0f1a]" />
                      </div>

                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#f97316]">
                        {group.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Category Number */}
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                      {group.num}
                    </span>
                  </div>

                  {/* CATEGORY TITLE */}
                  <h3
                    className="font-display font-bold text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-[#f97316] transition-colors duration-300 ease-out"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    {group.title}
                  </h3>

                  {/* SHORT DESCRIPTION */}
                  <p
                    className="font-body text-sm leading-relaxed mb-6"
                    style={{ color: "var(--color-text-2)" }}
                  >
                    {group.description}
                  </p>

                  {/* STRUCTURED TECHNOLOGY MINI-GRID */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                    {group.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/tech flex items-center gap-2 px-2.5 py-2 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 ease-out hover:border-[#f97316]/40 hover:bg-[#f97316]/5 cursor-default min-w-0"
                        style={{
                          background: isDark
                            ? "rgba(255, 255, 255, 0.03)"
                            : "rgba(0, 0, 0, 0.02)",
                          borderColor: isDark
                            ? "rgba(255, 255, 255, 0.08)"
                            : "rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        {/* Monogram Badge */}
                        <span
                          className="font-mono text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded-md border flex-shrink-0 transition-colors duration-200"
                          style={{
                            background: isDark
                              ? "rgba(249, 115, 22, 0.1)"
                              : "rgba(249, 115, 22, 0.08)",
                            borderColor: isDark
                              ? "rgba(249, 115, 22, 0.25)"
                              : "rgba(249, 115, 22, 0.2)",
                            color: "#f97316",
                          }}
                        >
                          {tech.code}
                        </span>

                        {/* Technology Name */}
                        <span
                          className="font-body font-medium text-xs sm:text-sm truncate transition-colors duration-200 group-hover/tech:text-[#f97316]"
                          style={{ color: "var(--color-text-1)" }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER: Capability Note */}
                <div className="pt-4 mt-auto border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]/70" />
                    {group.footerNote}
                  </span>
                  <span className="font-semibold text-[11px] uppercase tracking-wider text-slate-400 opacity-70">
                    {group.items.length} Techs
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

