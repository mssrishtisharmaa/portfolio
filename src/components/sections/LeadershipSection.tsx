import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa6';
import { leadership } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';

export function LeadershipSection() {
  if (leadership.length === 0) return null;

  return (
    <section id="leadership" className="border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Leadership & Engagement" title="Where I've contributed" />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          {leadership.map(({ id, organization, role, duration, impact }) => (
            <motion.div
              key={id}
              variants={staggerItem}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-sage)]"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--color-sage)]/15 text-[var(--color-sage-light)]">
                  <FaUsers size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-text)]">{organization}</h3>
                  <p className="text-sm text-[var(--color-sage-light)]">
                    {role} · <span className="font-mono-tech text-[var(--color-muted-dim)]">{duration}</span>
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {impact.map((line, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-emerald-light)]" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
