import { useTheme } from "../../context/ThemeContext";
import { personal } from "../../data";

// Custom SVG Icons for GitHub & LinkedIn
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

const LinkedinIcon = ({ size = 16, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/**
 * Footer Component — Clean, premium footer displaying copyrights, social icons,
 * and quick return to top navigation supporting custom light/dark modes.
 */
export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-10 overflow-hidden border-t bg-transparent"
      style={{
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand Logo */}
        <button
          onClick={handleScrollTop}
          className="flex items-center select-none group focus:outline-none cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span className="font-display font-bold text-[16px] tracking-wide" style={{ color: "var(--color-text-1)" }}>
            KUNIBILLI SAIRAM
          </span>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full ml-0.5 mb-2.5"
            style={{
              backgroundColor: "#f97316",
              boxShadow: "0 0 8px rgba(249, 115, 22, 0.7)",
            }}
          />
        </button>

        {/* Social Icons Links */}
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f97316]/50"
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
              borderColor: "var(--color-border)",
              color: isDark ? "#cbd5e1" : "#475569",
            }}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} className="hover:text-[#f97316] transition-colors" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f97316]/50"
            style={{
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
              borderColor: "var(--color-border)",
              color: isDark ? "#cbd5e1" : "#475569",
            }}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} className="hover:text-[#f97316] transition-colors" />
          </a>
        </div>

        {/* Info */}
        <p className="font-body text-xs text-center sm:text-right" style={{ color: "var(--color-text-3)" }}>
          © {new Date().getFullYear()} Kunibilli Sairam. Built with React &amp; Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}
