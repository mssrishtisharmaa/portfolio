import { HiArrowUp } from 'react-icons/hi';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { LeafIcon } from '../ui/Botanical';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="section-container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
          <LeafIcon className="h-4 w-4 text-[var(--color-sage)]" />
          <span>
            © {year} {personalInfo.name}. Made with <span aria-hidden="true">❤️</span>
            <span className="sr-only">love</span>.
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-sage-light)]"
            >
              <Icon size={18} />
            </a>
          ))}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-sage)] hover:text-[var(--color-text)]"
          >
            <HiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
