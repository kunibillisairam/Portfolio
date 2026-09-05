import { forwardRef } from "react";
import { clsx } from "clsx";

/**
 * Button — Reusable button component.
 *
 * Variants:
 * - "primary"  → Filled accent background (default)
 * - "outline"  → Transparent with accent border
 * - "ghost"    → No border, subtle hover
 *
 * Sizes:
 * - "sm"  → Compact
 * - "md"  → Default
 * - "lg"  → Large
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className,
    as: Tag = "button",
    href,
    target,
    rel,
    onClick,
    disabled,
    type = "button",
    ...rest
  },
  ref
) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-medium rounded-full " +
    "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "focus:ring-offset-background select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark active:scale-[0.98] " +
      "focus:ring-accent/50 shadow-lg shadow-accent/20 hover:shadow-accent/30",
    outline:
      "border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/55 " +
      "focus:ring-accent/30",
    ghost:
      "text-content-secondary hover:text-content-primary hover:bg-white/5 rounded-lg " +
      "focus:ring-white/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px] tracking-wide",
    md: "px-6 py-2.5 text-sm tracking-wide",
    lg: "px-8 py-3.5 text-[15px] tracking-wide",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  // If href is provided, render as anchor
  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Tag
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Button;
