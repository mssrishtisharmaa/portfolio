import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from 'react-icons/fa6';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { GrowthPlant, LeafIcon } from '../ui/Botanical';
import { ButtonLink } from '../ui/Button';
import { fadeInUp, staggerContainer, staggerItem } from '../../animations/variants';

export function HeroSection() {
  const typedRole = useTypingEffect(personalInfo.taglines);
  const github = socialLinks.find((s) => s.label === 'GitHub');
  const linkedin = socialLinks.find((s) => s.label === 'LinkedIn');

  return (
    <section
      id="hero"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="section-container grid items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={staggerItem}
            className="font-mono-tech inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-3 py-1 text-xs text-[var(--color-sage-light)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald-light)]" />
            Open to Software Engineering roles
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {personalInfo.name.split(' ')[0]}.
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="mt-3 flex h-9 items-center text-xl font-semibold text-[var(--color-emerald-light)] sm:text-2xl"
          >
            <span aria-live="polite">{typedRole}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[var(--color-emerald-light)]" aria-hidden="true" />
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={personalInfo.resumeUrl} download>
              <FaDownload size={14} /> Download Resume
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              View Projects
            </ButtonLink>
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-sage)] hover:text-[var(--color-text)]"
              >
                <FaGithub size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-sage)] hover:text-[var(--color-text)]"
              >
                <FaLinkedin size={18} />
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[var(--color-emerald)]/10 blur-3xl" />
          <div className="glass rounded-3xl border border-[var(--color-border)] p-8">
            <GrowthPlant className="mx-auto h-64 w-64" />
            <p className="font-mono-tech mt-2 text-center text-xs text-[var(--color-muted-dim)]">
              still growing — one commit at a time
            </p>
          </div>
          <LeafIcon className="absolute -bottom-4 -left-4 h-10 w-10 text-[var(--color-sage)] opacity-40" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[var(--color-muted-dim)] transition-colors hover:text-[var(--color-sage-light)] sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaArrowDown size={18} />
      </motion.a>
    </section>
  );
}
