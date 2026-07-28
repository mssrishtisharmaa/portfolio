import { motion } from 'framer-motion';

/** A single minimal leaf glyph. Used as hover accents and small decorations. */
export function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21c-4.5-1-8-4.8-8-10.2C4 6.9 7.3 4 11.6 3c.3 4 .1 7.4-1.7 10.1C8.6 14.8 6.7 16 5 16.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21c4.5-1 8-4.8 8-10.2C20 6.9 16.7 4 12.4 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** A thin organic vine divider placed between sections. Purely decorative. */
export function VineDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--color-border-strong)]" />
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <path
          d="M2 8c4-6 8-6 12 0s8 6 12 0"
          stroke="var(--color-sage)"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="14" cy="8" r="1.6" fill="var(--color-emerald-light)" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--color-border-strong)]" />
    </div>
  );
}

/**
 * The hero "growth" illustration — a small potted plant whose stems draw
 * themselves in on load. This is the page's signature motion moment.
 */
export function GrowthPlant({ className = '' }: { className?: string }) {
  const stroke = {
    stroke: 'var(--color-sage-light)',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    fill: 'none',
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.1, delay: 0.4 + i * 0.18, ease: 'easeInOut' as const }, opacity: { duration: 0.3, delay: 0.4 + i * 0.18 } },
    }),
  };

  return (
    <svg viewBox="0 0 220 240" className={className} aria-hidden="true">
      {/* Pot */}
      <motion.path
        d="M70 200 L150 200 L142 236 L78 236 Z"
        stroke="var(--color-border-strong)"
        strokeWidth="1.6"
        fill="var(--color-card)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.line
        x1="66" y1="200" x2="154" y2="200"
        stroke="var(--color-border-strong)"
        strokeWidth="1.6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Main stem */}
      <motion.path d="M110 200 C108 160 112 140 110 108" {...stroke} custom={0} variants={draw} initial="hidden" animate="visible" />

      {/* Leaves */}
      <motion.path d="M110 165 C90 158 78 140 82 118 C104 122 114 140 110 165 Z" {...stroke} custom={1} variants={draw} initial="hidden" animate="visible" />
      <motion.path d="M110 150 C132 144 146 126 142 104 C118 108 108 126 110 150 Z" {...stroke} custom={2} variants={draw} initial="hidden" animate="visible" />
      <motion.path d="M110 120 C96 110 92 92 100 74 C116 82 122 100 110 120 Z" {...stroke} custom={3} variants={draw} initial="hidden" animate="visible" />
      <motion.path d="M110 108 C122 96 138 92 152 100 C144 116 126 122 110 108 Z" {...stroke} custom={2.6} variants={draw} initial="hidden" animate="visible" />

      {/* Bud */}
      <motion.circle
        cx="110" cy="70" r="6"
        fill="var(--color-emerald-light)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: 'backOut' }}
      />
    </svg>
  );
}

/** Tiny corner leaf used as a hover accent on cards. */
export function CornerLeaf({ className = '' }: { className?: string }) {
  return (
    <LeafIcon className={`pointer-events-none absolute -top-2 -right-2 h-6 w-6 rotate-45 text-[var(--color-sage)] opacity-0 transition-opacity duration-300 group-hover:opacity-70 ${className}`} />
  );
}
