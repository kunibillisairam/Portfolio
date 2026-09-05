import { useTheme } from "../../context/ThemeContext";

/**
 * BackgroundDecorations Component — Optimized ambient editorial background.
 * Uses GPU-accelerated CSS keyframe animations for zero main-thread JS animation overhead.
 */
export default function BackgroundDecorations() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── Soft Warm Orange & Amber Ambient Lighting (Static CSS Gradients, Zero GPU Strain) ── */}
      {/* Top-Left Ambient Warm Glow */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.07) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, rgba(232, 216, 200, 0.1) 50%, transparent 70%)",
        }}
      />

      {/* Mid-Right Warm Accent Glow */}
      <div
        className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(234, 88, 12, 0.05) 0%, rgba(217, 180, 142, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* Bottom-Left Subtle Glow */}
      <div
        className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Minimal Vector Accent Curves (Static SVG, Zero Script Overhead) ── */}
      <svg
        className="absolute top-[15%] right-[5%] w-[420px] h-[420px] opacity-[0.035] dark:opacity-[0.045] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 50 200 C 120 100, 280 300, 350 200 C 280 100, 120 300, 50 200 Z"
          stroke={isDark ? "#ffffff" : "#ea580c"}
          strokeWidth="1.5"
        />
        <path
          d="M 80 200 C 140 130, 260 270, 320 200"
          stroke={isDark ? "#ffffff" : "#ea580c"}
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      <svg
        className="absolute bottom-[25%] left-[2%] w-[450px] h-[450px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M 50 250 Q 250 50, 450 250 T 50 250"
          stroke={isDark ? "#ffffff" : "#c17a3a"}
          strokeWidth="1.5"
        />
      </svg>

      {/* ── Subtle Geometric Rings & Accent Dots ── */}
      <div className="absolute top-[8%] left-[45%] w-24 h-24 rounded-full border border-[#f97316]/20 dark:border-white/15 opacity-[0.06] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[12%] w-36 h-36 rounded-full border border-dashed border-[#f97316]/20 dark:border-white/10 opacity-[0.05] pointer-events-none" />
      <div className="absolute top-[28%] left-[15%] w-2 h-2 rounded-full bg-[#f97316] opacity-[0.12] dark:opacity-[0.15] pointer-events-none" />
      <div className="absolute top-[65%] right-[22%] w-2.5 h-2.5 rounded-full bg-[#f97316] opacity-[0.1] dark:opacity-[0.12] pointer-events-none" />
    </div>
  );
}
