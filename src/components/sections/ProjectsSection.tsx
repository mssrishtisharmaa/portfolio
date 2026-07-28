import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaArrowUpRightFromSquare, FaChevronDown } from 'react-icons/fa6';
import { projects } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { TechBadge } from '../ui/Button';
import { CornerLeaf } from '../ui/Botanical';
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '../../animations/variants';

export function ProjectsSection() {
  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.techStack.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" className="border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="Projects that pair real-time systems with practical, hands-on engineering — from embedded devices to full-stack apps."
        />

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {allTech.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setActiveFilter(tech)}
              aria-pressed={activeFilter === tech}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === tech
                  ? 'border-[var(--color-emerald)] bg-[var(--color-emerald)]/15 text-[var(--color-emerald-light)]'
                  : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-sage)] hover:text-[var(--color-text)]'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const isExpanded = expandedId === project.id;
              return (
                <motion.article
                  key={project.id}
                  layout
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl p-[1px]"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-border-strong), transparent 40%, transparent 60%, var(--color-sage))',
                  }}
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-card)]">
                    <CornerLeaf />
                    <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg)]">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-semibold text-[var(--color-text)]">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((t) => (
                          <TechBadge key={t}>{t}</TechBadge>
                        ))}
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                              {project.longDescription}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {project.features.map((f, idx) => (
                                <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text)]">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-emerald-light)]" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-6 flex flex-1 items-end justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : project.id)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-sage-light)] transition-colors hover:text-[var(--color-emerald-light)]"
                        >
                          {isExpanded ? 'Show less' : 'Show details'}
                          <FaChevronDown
                            size={12}
                            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>

                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-sage)]"
                            >
                              <FaGithub size={13} /> Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-emerald)] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[var(--color-emerald-light)]"
                            >
                              <FaArrowUpRightFromSquare size={12} /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="mt-10 text-center text-[var(--color-muted)]">
            No projects match that filter yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
