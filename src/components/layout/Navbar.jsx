import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useScrolled } from "../../hooks/useScrolled";
import { useTheme } from "../../context/ThemeContext";

const NAV_ITEMS = [
  { label: "About",          href: "#about"          },
  { label: "Projects",       href: "#projects"       },
  { label: "Tech Stack",     href: "#skills"         },
  { label: "Journey",        href: "#journey"        },
  { label: "Certifications", href: "#certifications" },
  { label: "Education",      href: "#education"      },
  { label: "Contact",        href: "#contact"        },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section via IntersectionObserver (zero forced reflows, zero scroll jank)
  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "journey", "certifications", "education", "contact"];
    const labelMap = {
      about: "About",
      projects: "Projects",
      skills: "Tech Stack",
      journey: "Journey",
      certifications: "Certifications",
      education: "Education",
      contact: "Contact",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = labelMap[entry.target.id];
            if (label) {
              setActiveSection((prev) => (prev !== label ? label : prev));
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    let ticking = false;
    const handleTopCheck = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 180) {
            setActiveSection((prev) => (prev !== "" ? "" : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleTopCheck, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopCheck);
    };
  }, []);

  const handleNavClick = (href, label) => {
    setMobileOpen(false);
    setActiveSection(label);

    if (href === "#hero" || href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ── Sticky Header ────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? isDark
              ? "rgba(8, 8, 15, 0.78)"
              : "rgba(255, 255, 255, 0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(150%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(150%)" : "none",
          borderBottom: scrolled
            ? isDark
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(0, 0, 0, 0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? isDark
              ? "0 4px 20px -2px rgba(0, 0, 0, 0.4)"
              : "0 4px 20px -2px rgba(0, 0, 0, 0.05)"
            : "none",
        }}
      >
        <nav
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-14 md:h-16 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* ── Brand Logo Left ─────────────────────────────── */}
          <button
            onClick={() => handleNavClick("#top", "")}
            className="group flex items-center gap-1.5 focus:outline-none select-none text-left min-h-[40px] px-1"
            aria-label="SAIRAM - Scroll to top"
          >
            <span
              className="font-display font-bold text-base md:text-lg tracking-wider transition-colors duration-200"
              style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            >
              KUNIBILLI SAIRAM
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#f97316] transition-transform duration-300 group-hover:scale-125"
              style={{
                boxShadow: "0 0 8px rgba(249, 115, 22, 0.8)",
              }}
            />
          </button>

          {/* ── Desktop Nav Right ─────────────────────────────── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8" role="menubar">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.label;

              return (
                <button
                  key={item.label}
                  role="menuitem"
                  onClick={() => handleNavClick(item.href, item.label)}
                  className="relative group py-1 text-xs md:text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none flex items-center gap-1.5"
                  style={{
                    color: isActive
                      ? isDark
                        ? "#ffffff"
                        : "#0f172a"
                      : isDark
                      ? "#94a3b8"
                      : "#64748b",
                  }}
                >
                  <span className="group-hover:text-[#f97316] transition-colors duration-200">
                    {item.label}
                  </span>

                  {/* Active Orange Accent Indicator */}
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="w-1.5 h-1.5 rounded-full bg-[#f97316]"
                      style={{
                        boxShadow: "0 0 8px rgba(249, 115, 22, 0.8)",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Subtle hover/active underline animation */}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-orange-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#f97316] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#f97316]/70 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                </button>
              );
            })}

            {/* Subtle Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none hover:scale-105"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.05)",
                border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)"}`,
                color: isDark ? "#cbd5e1" : "#475569",
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* ── Mobile Action (Theme + Hamburger) ─────────────── */}
          <div className="md:hidden flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center focus:outline-none active:scale-95"
              style={{
                background: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.05)",
                border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)"}`,
                color: isDark ? "#cbd5e1" : "#475569",
              }}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="w-9 h-9 rounded-xl flex items-center justify-center focus:outline-none transition-colors active:scale-95"
              style={{
                color: isDark ? "#f8fafc" : "#0f172a",
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
              }}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X size={20} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu size={20} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Dropdown Panel ───────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-x-0 top-14 md:hidden z-40 px-4 pt-2 pb-4"
          >
            <div
              className="rounded-2xl p-4 shadow-xl border overflow-hidden"
              style={{
                background: isDark ? "rgba(12, 12, 22, 0.95)" : "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(20px)",
                borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.label;

                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => handleNavClick(item.href, item.label)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left focus:outline-none"
                      style={{
                        color: isActive
                          ? "#f97316"
                          : isDark
                          ? "#cbd5e1"
                          : "#334155",
                        background: isActive
                          ? isDark
                            ? "rgba(249, 115, 22, 0.1)"
                            : "rgba(249, 115, 22, 0.08)"
                          : "transparent",
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="w-2 h-2 rounded-full bg-[#f97316]"
                          style={{ boxShadow: "0 0 6px rgba(249, 115, 22, 0.8)" }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

