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
      {/* ── 1. Subtle Editorial Grain/Noise Texture ───────────────────────── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.035] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* ── 2. Soft Warm Orange & Beige Gradient Blobs ────────────────────── */}
      {/* Top Left Warm Ambient Blob */}
      <div
        className="animate-float-slow absolute top-[-8%] left-[-6%] w-[550px] h-[550px] rounded-full blur-[140px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0) 70%)"
            : "radial-gradient(circle, rgba(249, 115, 22, 0.07) 0%, rgba(232, 216, 200, 0.12) 60%, transparent 80%)",
        }}
      />

      {/* Mid Right Warm Beige/Orange Ambient Blob */}
      <div
        className="animate-float-medium absolute top-[38%] right-[-8%] w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, rgba(139, 92, 246, 0.04) 70%)"
            : "radial-gradient(circle, rgba(234, 88, 12, 0.05) 0%, rgba(217, 180, 142, 0.1) 60%, transparent 80%)",
        }}
      />

      {/* Bottom Left Warm Accent Blob */}
      <div
        className="animate-float-reverse absolute bottom-[-5%] left-[8%] w-[480px] h-[480px] rounded-full blur-[130px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, rgba(230, 210, 190, 0.08) 60%, transparent 80%)",
        }}
      />

      {/* ── 3. Large Low-Opacity Organic Vector Curves ────────────────────── */}
      <svg
        className="animate-float-slow absolute top-[15%] right-[5%] w-[450px] h-[450px] opacity-[0.035] dark:opacity-[0.05]"
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
        className="animate-float-reverse absolute bottom-[25%] left-[2%] w-[500px] h-[500px] opacity-[0.03] dark:opacity-[0.045]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M 50 250 Q 250 50, 450 250 T 50 250"
          stroke={isDark ? "#ffffff" : "#c17a3a"}
          strokeWidth="1.5"
        />
      </svg>

      {/* ── 4. Minimal Circular Elements & Ring Outlines ──────────────────── */}
      <div className="animate-float-slow absolute top-[8%] left-[45%] w-24 h-24 rounded-full border border-[#f97316]/30 dark:border-white/20 opacity-[0.06]" />

      <div className="animate-float-medium absolute bottom-[20%] right-[12%] w-36 h-36 rounded-full border border-dashed border-[#f97316]/25 dark:border-white/15 opacity-[0.05]" />

      {/* Small Ambient Accent Dots */}
      <div className="animate-float-slow absolute top-[28%] left-[15%] w-2 h-2 rounded-full bg-[#f97316] opacity-[0.12] dark:opacity-[0.15]" />
      <div className="animate-float-reverse absolute top-[65%] right-[22%] w-2.5 h-2.5 rounded-full bg-[#f97316] opacity-[0.1] dark:opacity-[0.12]" />
    </div>
  );
}
