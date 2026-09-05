import { clsx } from "clsx";

/**
 * SectionLabel — Small numbered section identifier.
 *
 * Renders like:  ── 01 — ABOUT
 *
 * Props:
 * - number: string — Section index e.g. "01"
 * - label: string  — Section name e.g. "ABOUT"
 * - className: string (optional)
 */
export default function SectionLabel({ number, label, className }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 select-none",
        className
      )}
      aria-label={`Section ${number}: ${label}`}
    >
      {/* Short line */}
      <span className="block w-6 h-px bg-accent/60" aria-hidden="true" />

      {/* Number */}
      <span className="font-mono text-[10px] font-medium text-accent tracking-[0.2em] uppercase">
        {number}
      </span>

      {/* Separator */}
      <span className="font-mono text-[10px] text-content-muted" aria-hidden="true">
        —
      </span>

      {/* Label */}
      <span className="font-mono text-[10px] font-medium text-content-muted tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}
