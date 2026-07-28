import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../animations/variants';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <span className="font-mono-tech inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-sage-light)]">
        <span className="h-px w-6 bg-[var(--color-sage)]" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">{description}</p>
      )}
    </motion.div>
  );
}
