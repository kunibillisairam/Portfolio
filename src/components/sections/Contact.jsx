import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, AlertCircle } from "lucide-react";
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
 * Contact Section — Phase 7 Premium Final CTA & Developer Collaboration Section.
 * Features a 2-column layout with a strong closing statement, direct clickable contact cards,
 * clean social button row, and a semantic, accessible contact form with inline UX feedback.
 */
export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" }); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form Validation
    if (!formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill out your email address and message.",
      });
      return;
    }

    // Launch native mail client with user input
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Kunibilli Sairam,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setStatus({
      type: "success",
      message: "✓ Message formatted! Opening your default email client...",
    });

    setTimeout(() => {
      setStatus({ type: null, message: "" });
    }, 5000);
  };

  // Compact Contact Info Cards
  const contactCards = [
    {
      id: "email",
      label: "EMAIL",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
      isEmail: true,
    },
    {
      id: "linkedin",
      label: "LINKEDIN",
      value: "kunibillisairam",
      href: personal.linkedin,
      icon: LinkedinIcon,
    },
    {
      id: "github",
      label: "GITHUB",
      value: "kunibillisairam",
      href: personal.github,
      icon: GithubIcon,
    },
  ];

  // Horizontal Quick Social Buttons
  const socialButtons = [
    { label: "GitHub", href: personal.github, icon: GithubIcon },
    { label: "LinkedIn", href: personal.linkedin, icon: LinkedinIcon },
    { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
  ];

  return (
    <section
      id="contact"
      className="relative section-pad overflow-hidden bg-transparent"
      aria-label="Contact and Collaboration section"
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
        
        {/* ── Section Header / Label ── */}
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-[#f97316]">
              07
            </span>
            <span style={{ color: "var(--color-text-3)", fontSize: "11px" }}>/</span>
            <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3"
            style={{ color: "var(--color-text-1)" }}
          >
            Let's build something<span className="text-[#f97316]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="font-body text-base sm:text-lg"
            style={{ color: "var(--color-text-2)" }}
          >
            Have an idea, project, or technical opportunity in mind? Let's connect.
          </motion.p>
        </div>

        {/* ── Desktop 2-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: Final CTA, Contact Cards & Social Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Short Collaboration Statement */}
            <p
              className="font-body text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--color-text-2)" }}
            >
              I am open to software development projects, machine learning collaborations, internship opportunities, and interesting technical conversations. Feel free to reach out directly through any channel below.
            </p>

            {/* Direct Compact Contact Cards */}
            <div className="space-y-3 pt-1">
              {contactCards.map((card) => {
                const IconComponent = card.icon;

                return (
                  <a
                    key={card.id}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative rounded-2xl p-4 border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 flex items-center justify-between min-w-0"
                    style={{
                      background: isDark
                        ? "rgba(15, 15, 26, 0.88)"
                        : "rgba(253, 252, 248, 0.98)",
                      borderColor: isDark
                        ? "rgba(255, 255, 255, 0.09)"
                        : "rgba(0, 0, 0, 0.08)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Icon Container */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ease-out bg-[#f97316]/10 border-[#f97316]/20 group-hover:bg-[#f97316]/20 group-hover:border-[#f97316]/40 flex-shrink-0"
                      >
                        <IconComponent
                          size={18}
                          className="text-[#f97316] transition-transform duration-300 ease-out group-hover:scale-105"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Label & Value */}
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#f97316] block">
                          {card.label}
                        </span>
                        <span
                          className="font-body text-xs sm:text-sm font-semibold truncate block group-hover:text-[#f97316] transition-colors duration-200"
                          style={{ color: "var(--color-text-1)" }}
                        >
                          {card.value}
                        </span>
                      </div>
                    </div>

                    {/* Action Arrow / Copy Button */}
                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      {card.isEmail && (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="p-1.5 rounded-lg border transition-colors duration-200 hover:border-[#f97316]/40 cursor-pointer"
                          style={{
                            background: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)",
                            borderColor: "var(--color-border)",
                            color: isDark ? "#cbd5e1" : "#475569",
                          }}
                          title="Copy email to clipboard"
                          aria-label="Copy email address"
                        >
                          {copied ? (
                            <Check size={14} className="text-emerald-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      )}

                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 group-hover:text-[#f97316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-out"
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Horizontal Social Row */}
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                Connect Online
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                {socialButtons.map((btn) => {
                  const BtnIcon = btn.icon;

                  return (
                    <a
                      key={btn.label}
                      href={btn.href}
                      target={btn.href.startsWith("http") ? "_blank" : undefined}
                      rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium border transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#f97316]/40 hover:text-[#f97316]"
                      style={{
                        background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)",
                        color: "var(--color-text-1)",
                      }}
                    >
                      <BtnIcon size={14} className="text-[#f97316]" />
                      <span>{btn.label}</span>
                      <ArrowUpRight size={12} className="text-slate-400 group-hover:text-[#f97316] group-hover:translate-x-0.5 transition-transform duration-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Premium Contact Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl p-6 sm:p-8 border space-y-5"
              style={{
                background: isDark
                  ? "rgba(15, 15, 26, 0.88)"
                  : "rgba(253, 252, 248, 0.98)", // Warm cream background
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.09)"
                  : "rgba(0, 0, 0, 0.08)",
                boxShadow: isDark
                  ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                  : "0 8px 25px -10px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Form Title Header */}
              <div className="pb-1 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
                <h3
                  className="font-display font-bold text-lg sm:text-xl tracking-tight"
                  style={{ color: "var(--color-text-1)" }}
                >
                  Send a Message
                </h3>
                <span className="font-mono text-xs text-slate-400">
                  Direct Email
                </span>
              </div>

              {/* Status Notification Banner */}
              {status.type && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2.5 border transition-all duration-200 ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-500"
                  }`}
                  role="alert"
                >
                  {status.type === "success" ? (
                    <Check size={16} className="flex-shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Name & Email Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border text-sm font-body transition-all duration-200 focus:outline-none focus:border-[#f97316]/60 focus:ring-2 focus:ring-[#f97316]/20 min-h-[44px]"
                    style={{
                      background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.02)",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                      color: "var(--color-text-1)",
                    }}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block"
                  >
                    Email Address <span className="text-[#f97316]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm font-body transition-all duration-200 focus:outline-none focus:border-[#f97316]/60 focus:ring-2 focus:ring-[#f97316]/20 min-h-[44px]"
                    style={{
                      background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.02)",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                      color: "var(--color-text-1)",
                    }}
                  />
                </div>

              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block"
                >
                  Message <span className="text-[#f97316]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border text-sm font-body transition-all duration-200 focus:outline-none focus:border-[#f97316]/60 focus:ring-2 focus:ring-[#f97316]/20 resize-none min-h-[130px]"
                  style={{
                    background: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.02)",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
                    color: "var(--color-text-1)",
                  }}
                />
              </div>

              {/* Submit Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-250 ease-out hover:-translate-y-0.5 hover:brightness-110 shadow-md hover:shadow-orange-500/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] min-h-[44px]"
                  style={{
                    background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  }}
                >
                  <span>Send Message</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-250 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
