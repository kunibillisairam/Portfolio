import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Target, BookOpen, Layers, Sparkles, Brain, Code2 } from "lucide-react";

/**
 * About Section — Redesigned modern 2-column layout + 3 core pillars.
 * Concise, easy to scan, with subtle entrance animations and themed cards.
 */
export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const pillars = [
    {
      num: "01",
      badge: "BUILD",
      title: "Working Products",
      description: "Turning ideas into practical, reliable digital applications.",
      icon: Code2,
    },
    {
      num: "02",
      badge: "LEARN",
      title: "Continuous Growth",
      description: "Continuously exploring new technologies and engineering practices.",
      icon: BookOpen,
    },
    {
      num: "03",
      badge: "SOLVE",
      title: "Practical Solutions",
      description: "Focusing on analytical solutions to real-world problems.",
      icon: Target,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative section-pad overflow-hidden bg-transparent"
      aria-label="About section"
    >
      {/* Subtle top border separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--color-border) 30%, var(--color-border) 70%, transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ── Section Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2.5 mb-6"
        >
          <span
            className="font-mono text-xs font-bold tracking-widest text-[#f97316]"
          >
            01
          </span>
          <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
          <span
            className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400"
          >
            About Me
          </span>
        </motion.div>

        {/* ── Two Column Grid ── */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 sm:mb-10">
          
          {/* LEFT: Heading + Concise Intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4"
              style={{ color: "var(--color-text-1)" }}
            >
              More than <span className="text-gradient-theme">just code.</span>
            </h2>

            <p
              className="font-body text-sm sm:text-base leading-relaxed max-w-xl"
              style={{ color: "var(--color-text-2)" }}
            >
              I'm <strong style={{ color: "var(--color-text-1)", fontWeight: 600 }}>KUNIBILLI SAIRAM</strong>, a Computer Science Engineering student who enjoys turning ideas into practical digital products. My interests include software development, machine learning, data analytics and building useful web applications.
            </p>
          </motion.div>

          {/* RIGHT: Modern Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div
              className="rounded-2xl p-5 sm:p-6 border relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Profile Card Header */}
              <div
                className="flex items-center justify-between pb-4 mb-5 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-[15px]"
                    style={{
                      background: "var(--chip-bg)",
                      border: "1px solid var(--chip-border)",
                      color: "var(--color-accent)",
                    }}
                  >
                    KS
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-[18px] leading-tight"
                      style={{ color: "var(--color-text-1)" }}
                    >
                      KUNIBILLI SAIRAM
                    </h3>
                    <p
                      className="font-mono text-[11px] font-medium mt-0.5"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Computer Science Engineering
                    </p>
                  </div>
                </div>

                <span className="relative flex items-center justify-center">
                  <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500/40 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                </span>
              </div>

              {/* Card Body: Focus & Learning */}
              <div className="space-y-4 font-body">
                
                {/* Focus */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Target size={14} style={{ color: "var(--color-accent)" }} strokeWidth={2} />
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider font-semibold"
                      style={{ color: "var(--color-text-3)" }}
                    >
                      Focus
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {["Software Development", "Machine Learning", "Data Analytics"].map((item) => (
                      <span key={item} className="chip-theme">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px" style={{ background: "var(--color-border)" }} />

                {/* Currently Learning */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <BookOpen size={14} style={{ color: "var(--color-accent)" }} strokeWidth={2} />
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider font-semibold"
                      style={{ color: "var(--color-text-3)" }}
                    >
                      Currently learning
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {["DSA", "Full Stack Development", "Machine Learning"].map((item) => (
                      <span key={item} className="chip-theme">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Below Two-Column Area: 3 Editorial Pillar Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f97316]/30 flex flex-col justify-between"
                style={{
                  background: isDark ? "rgba(15, 15, 26, 0.88)" : "rgba(253, 252, 248, 0.98)",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div>
                  {/* Small Orange Icon Box */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border mb-4 transition-all duration-300 bg-[#f97316]/10 border-[#f97316]/20 group-hover:bg-[#f97316] group-hover:border-[#f97316]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#f97316] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Small Category Label */}
                  <span className="font-mono text-[11px] font-bold text-[#f97316] tracking-widest uppercase mb-1.5 block">
                    {pillar.num} — {pillar.badge}
                  </span>

                  {/* Strong Short Title */}
                  <h3
                    className="font-display font-bold text-lg leading-snug mb-1.5 group-hover:text-[#f97316] transition-colors duration-200"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    {pillar.title}
                  </h3>

                  {/* One Concise Sentence */}
                  <p
                    className="font-body text-xs sm:text-sm leading-relaxed"
                    style={{ color: "var(--color-text-2)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
