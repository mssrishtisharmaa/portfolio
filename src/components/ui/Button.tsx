import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-emerald)] text-white hover:bg-[var(--color-emerald-light)] hover:shadow-[0_0_0_1px_var(--color-emerald-light),0_8px_24px_-8px_rgba(76,175,80,0.5)]',
  secondary:
    'bg-transparent text-[var(--color-text)] border border-[var(--color-border-strong)] hover:border-[var(--color-sage)] hover:bg-[var(--color-card)]',
  ghost:
    'bg-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function ButtonLink({ variant = 'primary', className = '', children, ...rest }: ButtonLinkProps) {
  return (
    <a className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono-tech rounded-md border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-2.5 py-1 text-xs text-[var(--color-sage-light)]">
      {children}
    </span>
  );
}
