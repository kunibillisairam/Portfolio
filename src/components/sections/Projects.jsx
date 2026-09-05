import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Code2, Compass, Wallet, Activity } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { projects } from "../../data";

// Custom SVG Icon for GitHub
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Designed Project Cover System for TYPE 2 projects without real screenshots.
 * Each project gets its own custom visual cover identity based on its actual purpose.
 */
function DesignedProjectCover({ project, isDark }) {
  const t = project.title.toLowerCase();

  // Variant 1: Finance Project Cover (Spends & Earns Tracker)
  if (t.includes("spends") || t.includes("earns") || t.includes("finance")) {
    return (
      <div
        className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden select-none"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #0b0c16 0%, #15162a 100%)"
            : "linear-gradient(135deg, #faf7f2 0%, #f0e8d9 100%)",
        }}
      >
        {/* Top Bar: Category + Icon */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
              FINANCE / WEB APP
            </span>
          </div>
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center border"
            style={{
              background: isDark ? "rgba(249, 115, 22, 0.12)" : "rgba(249, 115, 22, 0.08)",
              borderColor: "rgba(249, 115, 22, 0.25)",
            }}
          >
            <Wallet size={14} className="text-[#f97316]" />
          </div>
        </div>

        {/* Center: Minimal Dashboard Component Graphics */}
        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            {/* Income Stat Block */}
            <div
              className="p-2 sm:p-2.5 rounded-xl border flex flex-col justify-between"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.7)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
              }}
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                Income
              </span>
              <span className="font-mono text-xs font-bold text-emerald-500 mt-0.5">
                +$2,450.00
              </span>
            </div>

            {/* Expenses Stat Block */}
            <div
              className="p-2 sm:p-2.5 rounded-xl border flex flex-col justify-between"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.7)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
              }}
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                Expenses
              </span>
              <span className="font-mono text-xs font-bold text-[#f97316] mt-0.5">
                -$820.00
              </span>
            </div>
          </div>

          {/* Abstract SVG Spending Chart Bars */}
          <div
            className="p-2 sm:p-2.5 rounded-xl border flex items-end justify-between h-12 sm:h-14"
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.6)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.05)",
            }}
          >
            {[40, 65, 30, 85, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="w-2.5 rounded-t transition-all duration-300 group-hover:brightness-110"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? "#f97316" : isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom: Tech Labels */}
        <div className="relative z-10 flex items-center justify-between pt-1 border-t border-black/5 dark:border-white/5">
          <span className="font-mono text-[10px] font-semibold text-slate-400">
            {project.technologies.join(" • ")}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
        </div>
      </div>
    );
  }

  // Variant 2: Creative Coding Cover (Code Gravity Experiment)
  if (t.includes("gravity") || t.includes("code")) {
    return (
      <div
        className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden select-none"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #070712 0%, #121226 100%)"
            : "linear-gradient(135deg, #f8f6f0 0%, #ede6d6 100%)",
        }}
      >
        {/* Top Bar: Category + Icon */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
              CREATIVE CODING
            </span>
          </div>
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center border"
            style={{
              background: isDark ? "rgba(249, 115, 22, 0.12)" : "rgba(249, 115, 22, 0.08)",
              borderColor: "rgba(249, 115, 22, 0.25)",
            }}
          >
            <Activity size={14} className="text-[#f97316]" />
          </div>
        </div>

        {/* Center: Abstract Physics Node Particle Graphic */}
        <div className="relative z-10 my-auto py-1 flex flex-col items-center justify-center">
          <div className="relative w-24 sm:w-28 h-20 sm:h-24 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              <circle cx="50" cy="12" r="3" fill="#f97316" />
              <circle cx="84" cy="65" r="2.5" fill="#f97316" />
              <circle cx="16" cy="65" r="2" fill="#f97316" />
            </svg>

            <div
              className="w-9 h-9 rounded-full flex items-center justify-center border shadow-sm transition-transform duration-500 group-hover:scale-110"
              style={{
                background: isDark ? "rgba(249, 115, 22, 0.18)" : "rgba(249, 115, 22, 0.12)",
                borderColor: "#f97316",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]" />
            </div>
          </div>

          <span
            className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full border mt-1"
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.7)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
              color: "var(--color-text-2)",
            }}
          >
            gravity.simulate(particles)
          </span>
        </div>

        {/* Bottom: Tech Labels */}
        <div className="relative z-10 flex items-center justify-between pt-1 border-t border-black/5 dark:border-white/5">
          <span className="font-mono text-[10px] font-semibold text-slate-400">
            {project.technologies.join(" • ")}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
        </div>
      </div>
    );
  }

  // Variant 3: Travel & Exploration Cover (Our Tourism Explorer)
  return (
    <div
      className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden select-none"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #0a0d18 0%, #131a2c 100%)"
          : "linear-gradient(135deg, #f9f7f2 0%, #ebe4d4 100%)",
      }}
    >
      {/* Top Bar: Category + Icon */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
            TRAVEL & EXPLORATION
          </span>
        </div>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center border"
          style={{
            background: isDark ? "rgba(249, 115, 22, 0.12)" : "rgba(249, 115, 22, 0.08)",
            borderColor: "rgba(249, 115, 22, 0.25)",
          }}
        >
          <Compass size={14} className="text-[#f97316]" />
        </div>
      </div>

      {/* Center: Geographic / Topography / Destination Graphic */}
      <div className="relative z-10 my-auto py-1 flex flex-col items-center justify-center">
        <div className="relative w-24 sm:w-28 h-18 sm:h-20 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 120 80" fill="none">
            <path d="M 10 40 Q 40 10, 70 40 T 110 40" stroke="#f97316" strokeWidth="1.5" />
            <path d="M 20 50 Q 50 20, 80 50 T 100 50" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          <div
            className="w-9 h-9 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-500 group-hover:rotate-45"
            style={{
              background: isDark ? "rgba(249, 115, 22, 0.15)" : "rgba(249, 115, 22, 0.1)",
              borderColor: "#f97316",
            }}
          >
            <Compass size={18} className="text-[#f97316]" strokeWidth={1.8} />
          </div>
        </div>

        <span
          className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full border mt-1"
          style={{
            background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.7)",
            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
            color: "var(--color-text-2)",
          }}
        >
          Explore Destinations • Booking Engine
        </span>
      </div>

      {/* Bottom: Tech Labels */}
      <div className="relative z-10 flex items-center justify-between pt-1 border-t border-black/5 dark:border-white/5">
        <span className="font-mono text-[10px] font-semibold text-slate-400">
          {project.technologies.join(" • ")}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Separate Featured Project (Customer Retention Prediction)
  const featuredProject = projects.find(
    (p) =>
      p.id === "project-1" ||
      p.title.toLowerCase().includes("retention") ||
      p.title.toLowerCase().includes("subscription")
  ) || projects[0];

  const gridProjects = projects.filter((p) => p.id !== featuredProject.id);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      aria-label="Projects section"
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
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#f97316]">
              02
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400">
              Portfolio Highlights
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
            Selected Projects<span className="text-[#f97316]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base sm:text-lg"
            style={{ color: "var(--color-text-2)" }}
          >
            Real projects, built to solve real problems.
          </motion.p>
        </div>

        {/* ── 1. FEATURED PROJECT CARD (Customer Retention Prediction) ── */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-16"
          >
            <div
              className="group relative rounded-2xl border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-[#f97316]/40"
              style={{
                background: isDark ? "rgba(15, 15, 26, 0.92)" : "rgba(255, 255, 255, 0.98)",
                borderColor: isDark ? "rgba(249, 115, 22, 0.28)" : "rgba(249, 115, 22, 0.22)",
                boxShadow: isDark
                  ? "0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(249, 115, 22, 0.1)"
                  : "0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 25px rgba(249, 115, 22, 0.08)",
              }}
            >
              <div className="grid lg:grid-cols-12 items-center p-3 sm:p-4 gap-4 lg:gap-6">
                
                {/* LEFT: Real Screenshot Banner (~58% width) */}
                <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-sm bg-black/40">
                  {featuredProject.image ? (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <DesignedProjectCover project={featuredProject} isDark={isDark} />
                  )}

                  {/* Dark Glass Hover Overlay with View Project Badge */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2.5 rounded-full bg-[#f97316] text-white text-xs font-mono font-semibold tracking-wider uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      View Project ↗
                    </span>
                  </div>
                </div>

                {/* RIGHT: Project Information (~42% width) */}
                <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
                  <div>
                    {/* Category / Status Label & Project Number */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316]">
                        <Sparkles size={12} /> MACHINE LEARNING
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                        01
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 group-hover:text-[#f97316] transition-colors duration-300 ease-out flex items-center gap-2"
                      style={{ color: "var(--color-text-1)" }}
                    >
                      <span>Customer Retention Prediction</span>
                      <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out text-[#f97316]">
                        ↗
                      </span>
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body text-base sm:text-lg leading-relaxed mb-6 line-clamp-3"
                      style={{ color: "var(--color-text-2)" }}
                    >
                      {featuredProject.description}
                    </p>

                    {/* Refined Minimal Technology Tags */}
                    <div className="flex items-center gap-2 flex-wrap mb-8">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono font-medium rounded-lg"
                          style={{
                            background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                            border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.07)"}`,
                            color: isDark ? "#cbd5e1" : "#475569",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Intentional Interactive Action Buttons */}
                  <div
                    className="flex items-center gap-3.5 pt-5 border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    {featuredProject.liveDemo && (
                      <a
                        href={featuredProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 shadow-md shadow-orange-500/20 group/act"
                        style={{
                          background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                        }}
                      >
                        <span>View Project</span>
                        <span className="group-hover/act:translate-x-0.5 transition-transform duration-300 ease-out">↗</span>
                      </a>
                    )}

                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 group/act"
                        style={{
                          color: isDark ? "#f8fafc" : "#0f172a",
                          background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                          borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                        <span className="group-hover/act:translate-x-0.5 transition-transform duration-300 ease-out">↗</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* ── 2. REMAINING PROJECTS (2-Column Grid + Wide Horizontal Card for Final Single Item) ──── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
        >
          {gridProjects.map((project, idx) => {
            const projectNum = String(idx + 2).padStart(2, "0");
            const isLastSingle = idx === gridProjects.length - 1 && gridProjects.length % 2 !== 0;

            if (isLastSingle) {
              // Wide Horizontal Card Layout for final single Tourism Explorer project card
              return (
                <motion.article
                  key={project.id}
                  variants={cardVariants}
                  className="md:col-span-2 group relative rounded-2xl border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#f97316]/40"
                  style={{
                    background: isDark ? "rgba(15, 15, 26, 0.88)" : "rgba(253, 252, 248, 0.98)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)",
                    boxShadow: isDark
                      ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                      : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="grid lg:grid-cols-12 items-center p-3 sm:p-4 gap-4 lg:gap-6">
                    {/* LEFT: Image Banner (~50% width) */}
                    <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-sm bg-black/30">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                          <DesignedProjectCover project={project} isDark={isDark} />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center pointer-events-none">
                        <span className="px-3.5 py-2 rounded-full bg-[#f97316] text-white text-xs font-mono font-semibold tracking-wider uppercase shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          View Project ↗
                        </span>
                      </div>
                    </div>

                    {/* RIGHT: Project Information (~50% width) */}
                    <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span
                            className="font-mono text-xs uppercase tracking-wider font-semibold"
                            style={{ color: "var(--color-accent)" }}
                          >
                            WEB DEVELOPMENT
                          </span>
                          <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                            {projectNum}
                          </span>
                        </div>

                        <h3
                          className="font-display font-bold text-2xl sm:text-3xl mb-2.5 leading-snug group-hover:text-[#f97316] transition-colors duration-300 ease-out flex items-center gap-1.5"
                          style={{ color: "var(--color-text-1)" }}
                        >
                          <span>{project.title}</span>
                          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out text-[#f97316]">
                            ↗
                          </span>
                        </h3>

                        <p
                          className="font-body text-sm sm:text-base leading-relaxed mb-4 line-clamp-3"
                          style={{ color: "var(--color-text-2)" }}
                        >
                          {project.description}
                        </p>

                        <div className="flex items-center gap-1.5 flex-wrap mb-5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md"
                              style={{
                                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                                border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"}`,
                                color: isDark ? "#cbd5e1" : "#475569",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-3.5 pt-4 border-t"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 shadow-md shadow-orange-500/20 group/act"
                            style={{
                              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                            }}
                          >
                            <span>View Project</span>
                            <span className="group-hover/act:translate-x-0.5 transition-transform duration-300 ease-out">↗</span>
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 group/act"
                            style={{
                              color: isDark ? "#cbd5e1" : "#475569",
                              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                              borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <GithubIcon size={14} />
                            <span>GitHub</span>
                            <span className="group-hover/act:translate-x-0.5 transition-transform duration-300 ease-out">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            // Standard Grid Card Layout
            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="group relative rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 hover:border-[#f97316]/40 h-full"
                style={{
                  background: isDark ? "rgba(15, 15, 26, 0.88)" : "rgba(253, 252, 248, 0.98)",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)",
                  boxShadow: isDark
                    ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* TOP: Consistent Aspect Ratio Screenshot */}
                <div className="p-3 sm:p-4 pb-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-sm bg-black/30">
                    {project.image ? (
                      /* TYPE 1: Real Screenshot */
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      />
                    ) : (
                      /* TYPE 2: Purpose-Built Designed Project Cover */
                      <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                        <DesignedProjectCover project={project} isDark={isDark} />
                      </div>
                    )}

                    {/* Dark Glass Hover Overlay with View Project Badge */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-2 rounded-full bg-[#f97316] text-white text-xs font-mono font-semibold tracking-wider uppercase shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        View Project ↗
                      </span>
                    </div>
                  </div>
                </div>

                {/* MIDDLE & DESCRIPTION & BOTTOM */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label & Project Number */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className="font-mono text-xs uppercase tracking-wider font-semibold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {project.category === "fullstack"
                          ? "FULL STACK"
                          : project.category === "ml"
                          ? "MACHINE LEARNING"
                          : "WEB DEVELOPMENT"}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                        {projectNum}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className="font-display font-bold text-xl sm:text-2xl lg:text-3xl mb-2.5 leading-snug group-hover:text-[#f97316] transition-colors duration-300 ease-out flex items-center gap-1.5"
                      style={{ color: "var(--color-text-1)" }}
                    >
                      <span>{project.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out text-[#f97316]">
                        ↗
                      </span>
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3"
                      style={{ color: "var(--color-text-2)" }}
                    >
                      {project.description}
                    </p>

                    {/* Refined Minimal Technology Tags */}
                    <div className="flex items-center gap-1.5 flex-wrap mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md"
                          style={{
                            background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                            border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"}`,
                            color: isDark ? "#cbd5e1" : "#475569",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM: Intentional Interactive Action Buttons */}
                  <div
                    className="flex items-center gap-3.5 pt-4 border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 shadow-md shadow-orange-500/20 group/act"
                        style={{
                          background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                        }}
                      >
                        <span>View Project</span>
                        <span className="group-hover/act:translate-x-0.5 transition-transform duration-300 ease-out">↗</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 group/act"
                        style={{
                          color: isDark ? "#cbd5e1" : "#475569",
                          background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                          borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                        <span className="group-hover/act:translate-x-0.5 transition-transform duration-300 ease-out">↗</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
