import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';
import { LeafIcon } from '../ui/Botanical';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[var(--color-border)] shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--color-text)]"
        >
          <LeafIcon className="h-5 w-5 text-[var(--color-emerald-light)]" />
          <span className="font-mono-tech">{personalInfo.avatarInitials}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-card)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-sage)] hover:bg-[var(--color-card)]"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-[var(--color-text)] md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="glass overflow-hidden border-b border-[var(--color-border)] md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base text-[var(--color-muted)] hover:bg-[var(--color-card)] hover:text-[var(--color-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="mt-2 block rounded-lg border border-[var(--color-border-strong)] px-3 py-2.5 text-center text-base font-medium text-[var(--color-text)]"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
