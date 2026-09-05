import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Terminal, Disc, Clock, Calendar, CheckCircle2 } from "lucide-react";

const GithubIcon = ({ size = 16, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Developer Dashboard Section — Simulated live developer dashboard showing stats,
 * coding hours, current learning goals, GitHub mockup calendar, and active music player.
 */
export default function Dashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Mock stats
  const wakatimeHours = [
    { name: "Python",     percentage: 42, color: "#3b82f6" },
    { name: "JavaScript", percentage: 35, color: "#facc15" },
    { name: "React",      percentage: 15, color: "#22d3ee" },
    { name: "SQL",        percentage: 8,  color: "#f97316" },
  ];

  // Grid for simulated GitHub calendar contribution square coordinates (7 rows, 28 columns for simplified aesthetic)
  const columnsCount = 24;
  const rowsCount = 6;
  const generateGrid = () => {
    let cells = [];
    for (let r = 0; r < rowsCount; r++) {
      for (let c = 0; c < columnsCount; c++) {
        // Pseudo-random level of contribution [0-4]
        const rand = (r * c + r + c * 3) % 5;
        cells.push(rand);
      }
    }
    return cells;
  };
  const contributions = generateGrid();

  const getContributionColor = (level) => {
    if (level === 0) return isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
    if (isDark) {
      if (level === 1) return "rgba(139,92,246,0.15)";
      if (level === 2) return "rgba(139,92,246,0.35)";
      if (level === 3) return "rgba(139,92,246,0.6)";
      return "#8b5cf6"; // Level 4
    } else {
      if (level === 1) return "rgba(193,122,58,0.15)";
      if (level === 2) return "rgba(193,122,58,0.35)";
      if (level === 3) return "rgba(193,122,58,0.6)";
      return "#c17a3a"; // Level 4
    }
  };

  return (
    <section
      id="dashboard"
      className="relative section-pad overflow-hidden bg-transparent"
      aria-label="Developer dashboard"
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
              05
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "10px" }}>/</span>
            <span
              className="font-mono text-[11px] tracking-[0.18em] uppercase font-semibold"
              style={{ color: "var(--color-text-3)" }}
            >
              Live Status
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
            Developer <span className="text-gradient-theme">dashboard.</span>
          </motion.h2>
        </div>

        {/* ── Grid Layout of Dashboard Widgets ── */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. WakaTime coding hours (span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 rounded-2xl p-6 border flex flex-col justify-between"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-[15px] flex items-center gap-2" style={{ color: "var(--color-text-1)" }}>
                  <Clock size={16} className="text-accent" style={{ color: "var(--color-accent)" }} />
                  Coding Stats
                </h3>
                <span className="font-mono text-[10px] text-content-muted">LAST 7 DAYS</span>
              </div>
              <p className="font-body text-[12px] text-content-secondary mb-6 leading-relaxed">
                Active coding metrics compiled from local dev environments.
              </p>

              <div className="space-y-4">
                {wakatimeHours.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className="font-medium text-white" style={{ color: "var(--color-text-1)" }}>{lang.name}</span>
                      <span style={{ color: "var(--color-text-2)" }}>{lang.percentage}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: isDark ? "var(--color-accent)" : lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
              <span className="font-mono text-[10px] text-content-secondary">
                Weekly Dev Total: ~36.8 Hours
              </span>
            </div>
          </motion.div>

          {/* 2. GitHub Activity Streak Mockup (span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 rounded-2xl p-6 border flex flex-col justify-between"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-[15px] flex items-center gap-2" style={{ color: "var(--color-text-1)" }}>
                  <GithubIcon size={16} style={{ color: "var(--color-accent)" }} />
                  GitHub Activity
                </h3>
                <span className="font-mono text-[10px] text-content-muted">SIMULATED TRACKER</span>
              </div>
              <p className="font-body text-[12px] text-content-secondary mb-6 leading-relaxed">
                Consistency is key. Visualization of active repository commits and branches.
              </p>

              {/* GitHub Grid Calendar Graphic */}
              <div className="overflow-x-auto pb-2 scrollbar-none">
                <div
                  className="grid gap-1"
                  style={{
                    gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
                    width: "100%",
                    minWidth: "440px",
                  }}
                >
                  {contributions.map((lvl, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-sm transition-colors duration-300 hover:scale-110"
                      style={{
                        backgroundColor: getContributionColor(lvl),
                        border: "1px solid rgba(255,255,255,0.01)",
                      }}
                      title={`Activity level: ${lvl}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t flex items-center justify-between text-[11px] font-mono" style={{ borderColor: "var(--color-border)", color: "var(--color-text-2)" }}>
              <span>Total Commits Year-To-Date: 486</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-content-muted">Less</span>
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: getContributionColor(0) }} />
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: getContributionColor(1) }} />
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: getContributionColor(2) }} />
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: getContributionColor(3) }} />
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: getContributionColor(4) }} />
                <span className="text-[10px] text-content-muted">More</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Spotify "Currently Listening" mockup (span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 rounded-2xl p-6 border flex flex-col justify-between"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-[15px] flex items-center gap-2" style={{ color: "var(--color-text-1)" }}>
                  <Disc size={16} className="text-emerald-500 animate-spin-slow" />
                  Currently Jamming
                </h3>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/25">SPOTIFY</span>
              </div>

              {/* Player details */}
              <div className="flex items-center gap-4 mt-2">
                <div
                  className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
                      : "linear-gradient(135deg, #f1eae0 0%, #e4dacb 100%)",
                  }}
                >
                  {/* Pseudo album art */}
                  <Disc size={28} className="text-content-muted animate-spin-slow" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-[15px] truncate text-white" style={{ color: "var(--color-text-1)" }}>
                    Lofi Beats / Deep Focus
                  </h4>
                  <p className="font-body text-[11.5px] text-content-secondary mt-0.5 truncate">
                    Curated Coding Soundtrack
                  </p>
                </div>
              </div>

              {/* Music wave visualization */}
              <div className="flex items-end justify-between gap-[3px] h-10 mt-6 px-1">
                {[12, 28, 16, 40, 24, 32, 14, 28, 36, 18, 26, 32, 14, 28, 40, 20, 26, 32, 14].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full"
                    style={{
                      height: `${h}%`,
                      backgroundColor: "var(--color-accent)",
                      animation: `pulse-slow ${1 + (i % 3) * 0.3}s ease-in-out infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t flex items-center justify-between text-[10px] font-mono text-content-muted" style={{ borderColor: "var(--color-border)" }}>
              <span>Shuffle On</span>
              <span>02:45 / 03:50</span>
            </div>
          </motion.div>

          {/* 4. Active learning focus checklist (span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 rounded-2xl p-6 border flex flex-col justify-between"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-[15px] flex items-center gap-2" style={{ color: "var(--color-text-1)" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-accent)" }} />
                  Learning Roadmap
                </h3>
                <span className="font-mono text-[10px] text-content-muted">ACTIVE FOCUS</span>
              </div>
              <p className="font-body text-[12px] text-content-secondary mb-4 leading-relaxed">
                Ongoing studies and project initiatives I'm tracking this month.
              </p>

              <div className="space-y-3 mt-2">
                {[
                  { name: "Deploy Scikit-Learn predictions API", done: true  },
                  { name: "Optimize Framer Motion bundle size", done: true  },
                  { name: "Design premium Power BI analytics dashboard", done: false },
                  { name: "Integrate fully functional Node REST route", done: false },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border mt-0.5 ${
                        item.done ? "bg-accent/15 border-accent text-accent" : "border-content-muted"
                      }`}
                      style={{
                        borderColor: item.done ? "var(--color-accent)" : "rgba(255,255,255,0.12)",
                      }}
                    >
                      {item.done && <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ backgroundColor: "var(--color-accent)" }} />}
                    </span>
                    <span
                      className={`text-[12.5px] font-body ${
                        item.done ? "line-through text-content-muted" : "text-white"
                      }`}
                      style={{ color: item.done ? "var(--color-text-3)" : "var(--color-text-1)" }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t" style={{ borderColor: "var(--color-border)" }}>
              <span className="font-mono text-[10px] text-content-secondary">
                Weekly Target: 50% Complete
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
