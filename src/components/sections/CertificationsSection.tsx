import { motion } from 'framer-motion';
import { FaCertificate, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { certifications } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';
import { LeafIcon } from '../ui/Botanical';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Credentials" />

        {certifications.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[var(--color-border-strong)] px-6 py-14 text-center">
            <LeafIcon className="h-8 w-8 text-[var(--color-sage)] opacity-60" />
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              No certifications added yet. Add entries to the{' '}
              <code className="font-mono-tech rounded bg-[var(--color-card)] px-1.5 py-0.5 text-[var(--color-sage-light)]">
                certifications
              </code>{' '}
              array in <code className="font-mono-tech rounded bg-[var(--color-card)] px-1.5 py-0.5 text-[var(--color-sage-light)]">portfolioData.ts</code> and they'll appear here automatically.
            </p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map(({ id, name, organization, year, credentialUrl }) => (
              <motion.div
                key={id}
                variants={staggerItem}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-sage)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--color-emerald)]/15 text-[var(--color-emerald-light)]">
                  <FaCertificate size={16} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">{name}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {organization} · <span className="font-mono-tech">{year}</span>
                </p>
                {credentialUrl && (
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-sage-light)] hover:text-[var(--color-emerald-light)]"
                  >
                    View credential <FaArrowUpRightFromSquare size={11} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
