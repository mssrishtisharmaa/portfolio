import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa6';
import { experience } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TechBadge } from '../ui/Button';
import { fadeInUp, viewportOnce } from '../../animations/variants';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-[var(--color-border-strong)] sm:block"
          />
          <ol className="space-y-8">
            {experience.map((entry, i) => (
              <motion.li
                key={entry.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.05 }}
                className="relative sm:pl-14"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg)] text-[var(--color-emerald-light)] sm:grid"
                >
                  <FaBriefcase size={15} />
                </span>

                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-sage)] sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">{entry.role}</h3>
                      <p className="text-sm text-[var(--color-sage-light)]">
                        {entry.organization} · {entry.location}
                      </p>
                    </div>
                    <span className="font-mono-tech text-xs text-[var(--color-muted-dim)]">{entry.duration}</span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {entry.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-sage)]" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {entry.achievements.length > 0 && (
                    <p className="mt-3 text-sm italic leading-relaxed text-[var(--color-success)]">
                      {entry.achievements[0]}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.technologies.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
