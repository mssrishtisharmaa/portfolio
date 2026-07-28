import { motion } from 'framer-motion';
import { aboutInterests, aboutParagraphs, personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { VineDivider } from '../ui/Botanical';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="A little about how I work" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
            <motion.p variants={fadeInUp} className="text-sm text-[var(--color-muted-dim)]">
              Based in {personalInfo.location}.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-3 self-start"
          >
            {aboutInterests.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3.5 transition-colors hover:border-[var(--color-sage)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--color-bg-soft)] text-[var(--color-sage-light)] transition-colors group-hover:text-[var(--color-emerald-light)]">
                  <Icon size={16} />
                </span>
                <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <VineDivider className="mt-20" />
      </div>
    </section>
  );
}
