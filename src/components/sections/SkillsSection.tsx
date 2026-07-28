import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I reach for"
          description="A working toolkit spanning full-stack web development, embedded systems, and applied data science."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={staggerItem}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
            >
              <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-sage-light)]">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-1.5 text-sm text-[var(--color-text)]"
                  >
                    <Icon size={14} className="text-[var(--color-emerald-light)]" />
                    {name}
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
