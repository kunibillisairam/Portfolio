import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { personal } from "../../data";

// Custom SVG Icons for GitHub & LinkedIn
const GithubIcon = ({ size = 18, ...props }) => (
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

const LinkedinIcon = ({ size = 18, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative flex flex-col justify-center min-h-[90vh] lg:min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-transparent"
    >
      {/* ── Subtle Background Decorative Elements & Glows ───────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Background Radial Gradient */}
        <div
          className="absolute top-1/4 left-5 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: isDark ? "rgba(249, 115, 22, 0.25)" : "rgba(249, 115, 22, 0.15)",
          }}
        />
        <div
          className="absolute bottom-10 right-5 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: isDark ? "rgba(139, 92, 246, 0.25)" : "rgba(193, 122, 58, 0.12)",
          }}
        />
      </div>

      {/* ── Hero Container ────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* ── Left Column: Main Hero Content ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 1. Small Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase mb-4 sm:mb-5 border max-w-full"
              style={{
                background: isDark ? "rgba(249, 115, 22, 0.08)" : "rgba(249, 115, 22, 0.06)",
                borderColor: "rgba(249, 115, 22, 0.25)",
                color: "#f97316",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse flex-shrink-0" />
              <span className="truncate">SOFTWARE DEVELOPER • ML • DATA</span>
            </div>

            {/* 2. Deliberate 2-Line Name Heading: KUNIBILLI / SAIRAM. */}
            <h1
              className="font-display font-black tracking-tight leading-[0.95] mb-4 sm:mb-5 select-none w-full"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                KUNIBILLI
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap mt-1">
                SAIRAM
                <span className="text-[#f97316] inline-block font-black ml-0.5">.</span>
              </span>
            </h1>

            {/* 3. Main Statement */}
            <h2
              className="font-display font-bold text-2xl sm:text-4xl md:text-5xl leading-snug mb-4 sm:mb-5"
              style={{ color: isDark ? "#f1f5f9" : "#1e293b" }}
            >
              I build <span className="text-[#f97316]">digital products</span> that solve real problems.
            </h2>

            {/* 4. Supporting Text */}
            <p
              className="font-body text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl"
              style={{ color: isDark ? "#94a3b8" : "#475569" }}
            >
              I'm a Computer Science Engineering student focused on software development, machine learning and data-driven applications.
            </p>

            {/* 5. Buttons & Social Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-2">
              {/* Primary Action Button */}
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] text-sm font-medium font-body rounded-xl text-white transition-all duration-200 cursor-pointer shadow-lg hover:shadow-orange-500/25 focus:outline-none hover:-translate-y-0.5 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Action Button */}
              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] text-sm font-medium font-body rounded-xl border transition-all duration-200 cursor-pointer focus:outline-none hover:-translate-y-0.5 w-full sm:w-auto"
                style={{
                  color: isDark ? "#f8fafc" : "#0f172a",
                  background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)",
                }}
              >
                <span>Let's Connect</span>
                <Send size={15} className="transition-transform duration-200 group-hover:scale-110" />
              </button>

              {/* Social Icons (GitHub & LinkedIn) */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 sm:pt-0">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
                    style={{
                      color: isDark ? "#94a3b8" : "#64748b",
                      background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                    }}
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} className="hover:text-[#f97316] transition-colors" />
                  </a>
                )}

                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
                    style={{
                      color: isDark ? "#94a3b8" : "#64748b",
                      background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                    }}
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} className="hover:text-[#f97316] transition-colors" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Student Avatar Showcase ──────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
          >
            {/* Soft Ambient Warm Glow */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none opacity-60 transition-opacity duration-500"
              style={{
                background: isDark
                  ? "radial-gradient(circle at 60% 40%, rgba(249, 115, 22, 0.22) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 80%)"
                  : "radial-gradient(circle at 60% 40%, rgba(249, 115, 22, 0.18) 0%, rgba(193, 122, 58, 0.08) 50%, transparent 80%)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />

            {/* Floating Avatar Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative group w-full max-w-[400px] rounded-3xl p-3 border transition-all duration-300"
              style={{
                background: isDark ? "rgba(13, 13, 24, 0.88)" : "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(20px)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
                boxShadow: isDark
                  ? "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(249, 115, 22, 0.1)"
                  : "0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 25px rgba(249, 115, 22, 0.08)",
              }}
            >
              {/* Avatar Image Frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-inner bg-slate-100 dark:bg-slate-900">
                <img
                  src="/student-avatar.webp"
                  alt="Student Developer Avatar"
                  width={400}
                  height={400}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Floating Status Pill at bottom */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-2 rounded-xl backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg bg-black/45 text-white select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[11px] font-semibold tracking-wider">
                      CS Student &amp; Developer
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#fdba74] font-bold tracking-widest uppercase">
                    ONLINE
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
