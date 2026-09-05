import { motion } from "framer-motion";
import { Terminal, CheckCircle2, Code2, Sparkles, FolderGit2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { personal, projects } from "../../data";

export default function DeveloperCard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Calculate real number of deployed projects from dataset
  const projectCount = projects.length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
    >
      {/* ── Soft Orange Background Glow ───────────────────────────── */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none opacity-60 transition-opacity duration-500"
        style={{
          background: isDark
            ? "radial-gradient(circle at 60% 40%, rgba(249, 115, 22, 0.18) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 80%)"
            : "radial-gradient(circle at 60% 40%, rgba(249, 115, 22, 0.15) 0%, rgba(193, 122, 58, 0.06) 50%, transparent 80%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />

      {/* ── Main IDE Window Container ─────────────────────────────── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300"
        style={{
          background: isDark ? "rgba(13, 13, 24, 0.92)" : "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(20px)",
          borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
          boxShadow: isDark
            ? "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(249, 115, 22, 0.1)"
            : "0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 25px rgba(249, 115, 22, 0.08)",
        }}
      >
        {/* ── IDE Window Header ───────────────────────────────────── */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b select-none"
          style={{
            background: isDark ? "rgba(8, 8, 16, 0.6)" : "rgba(245, 243, 239, 0.8)",
            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Window Control Buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block opacity-80" />
            <span
              className="ml-2 text-xs font-mono font-medium flex items-center gap-1.5"
              style={{ color: isDark ? "#94a3b8" : "#64748b" }}
            >
              <Code2 size={13} className="text-[#f97316]" />
              developer.config.ts
            </span>
          </div>

          {/* Status Indicator */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.25)",
              color: "#22c55e",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>

        {/* ── IDE Code Content Area ───────────────────────────────── */}
        <div className="p-5 md:p-6 font-mono text-xs md:text-[13px] leading-relaxed overflow-x-auto">
          <div className="flex items-start gap-4">
            {/* Line Numbers */}
            <div
              className="select-none text-right font-mono text-xs pr-2 flex flex-col space-y-1"
              style={{ color: isDark ? "#475569" : "#94a3b8" }}
            >
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
              <span>09</span>
              <span>10</span>
            </div>

            {/* Code Snippet Lines */}
            <div className="flex-1 space-y-1">
              <div>
                <span className="text-purple-400 dark:text-purple-400 font-semibold">const</span>{" "}
                <span className="text-amber-500 dark:text-amber-400">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-slate-300 dark:text-slate-200">&#123;</span>
              </div>

              <div className="pl-4">
                <span className="text-sky-400 dark:text-sky-300">name</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400 dark:text-emerald-300">"{personal.fullName}"</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sky-400 dark:text-sky-300">role</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400 dark:text-emerald-300">"Software & ML Developer"</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sky-400 dark:text-sky-300">skills</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-slate-400">[</span>
                <span className="text-emerald-400 dark:text-emerald-300">"Python"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400 dark:text-emerald-300">"React"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400 dark:text-emerald-300">"ML"</span>
                <span className="text-slate-400">, </span>
                <span className="text-emerald-400 dark:text-emerald-300">"Data"</span>
                <span className="text-slate-400">],</span>
              </div>

              <div className="pl-4">
                <span className="text-sky-400 dark:text-sky-300">projectsCompleted</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-[#f97316] font-bold">{projectCount}</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sky-400 dark:text-sky-300">education</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400 dark:text-emerald-300">"B.E. Computer Science"</span>
                <span className="text-slate-400">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sky-400 dark:text-sky-300">focus</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400 dark:text-emerald-300">"Building real-world applications"</span>
              </div>

              <div>
                <span className="text-slate-300 dark:text-slate-200">&#125;;</span>
              </div>

              <div className="pt-1">
                <span className="text-slate-500 italic">// Crafting digital experiences with precision</span>
              </div>

              <div className="pt-0.5 flex items-center gap-1 text-[#f97316]">
                <span>&gt;</span>
                <span className="w-2 h-4 bg-[#f97316] inline-block animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* ── IDE Status Bar Footer ────────────────────────────────── */}
        <div
          className="flex items-center justify-between px-4 py-2 text-[11px] font-mono border-t select-none"
          style={{
            background: isDark ? "rgba(8, 8, 16, 0.8)" : "rgba(245, 243, 239, 0.9)",
            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)",
            color: isDark ? "#94a3b8" : "#64748b",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#f97316] font-medium">
              <Terminal size={12} /> TypeScript 5.4
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-500" /> All systems nominal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>UTF-8</span>
            <span>Ln 10, Col 1</span>
          </div>
        </div>
      </motion.div>

      {/* ── Floating Accent Badge Top Right ───────────────────────── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-5 -right-3 md:-right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border shadow-lg text-xs font-mono font-medium"
        style={{
          background: isDark ? "rgba(18, 18, 30, 0.95)" : "rgba(255, 255, 255, 0.95)",
          borderColor: "rgba(249, 115, 22, 0.3)",
          boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)",
          color: isDark ? "#f8fafc" : "#0f172a",
        }}
      >
        <Sparkles size={14} className="text-[#f97316]" />
        <span>Python • React • ML</span>
      </motion.div>

      {/* ── Floating Accent Badge Bottom Left ─────────────────────── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-3 md:-left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border shadow-lg text-xs font-mono font-medium"
        style={{
          background: isDark ? "rgba(18, 18, 30, 0.95)" : "rgba(255, 255, 255, 0.95)",
          borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
          color: isDark ? "#f8fafc" : "#0f172a",
        }}
      >
        <FolderGit2 size={14} className="text-[#f97316]" />
        <span>{projectCount} Projects Deployed</span>
      </motion.div>
    </motion.div>
  );
}

