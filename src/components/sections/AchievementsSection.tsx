import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';

const categoryLabels: Record<string, string> = {
  hackathon: 'Hackathon',
  'competitive-programming': 'Competitive Programming',
  award: 'Award',
  scholarship: 'Scholarship',
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map(({ id, title, description, date, category, icon: Icon }) => (
            <motion.div
              key={id}
              variants={staggerItem}
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-bg-soft)] p-6 transition-colors hover:border-[var(--color-sage)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-emerald)]/15 text-[var(--color-emerald-light)]">
                  <Icon size={18} />
                </span>
                <span className="font-mono-tech text-xs text-[var(--color-muted-dim)]">{date}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-[var(--color-text)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
              <span className="font-mono-tech mt-4 inline-block text-[11px] uppercase tracking-wider text-[var(--color-sage-light)]">
                {categoryLabels[category]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
