import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLocationDot, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa6';
import { emailjsConfig, personalInfo, socialLinks } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { fadeInUp, viewportOnce } from '../../animations/variants';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isConfigured =
      !emailjsConfig.serviceId.startsWith('YOUR_') &&
      !emailjsConfig.templateId.startsWith('YOUR_') &&
      !emailjsConfig.publicKey.startsWith('YOUR_');

    if (!isConfigured) {
      // EmailJS keys haven't been added yet — see README "Customization Guide".
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.currentTarget,
        emailjsConfig.publicKey
      );
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a role, project, or idea in mind? My inbox is open."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--color-sage-light)]" size={16} />
                <span className="text-sm text-[var(--color-text)]">{personalInfo.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email address"
                className="grid h-8 w-8 place-items-center rounded-full text-[var(--color-muted)] transition-colors hover:text-[var(--color-emerald-light)]"
              >
                {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-4">
              <FaLocationDot className="text-[var(--color-sage-light)]" size={16} />
              <span className="text-sm text-[var(--color-text)]">{personalInfo.location}</span>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] py-3 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-sage)]"
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted-dim)] focus:border-[var(--color-sage)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                required
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted-dim)] focus:border-[var(--color-sage)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-[var(--color-muted)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted-dim)] focus:border-[var(--color-sage)]"
                placeholder="Tell me a bit about the opportunity..."
              />
            </div>

            <Button type="submit" disabled={status === 'sending'} className="w-full">
              {status === 'sending' ? 'Sending…' : (
                <>
                  <FaPaperPlane size={13} /> Send Message
                </>
              )}
            </Button>

            {status === 'success' && (
              <p className="text-center text-sm text-[var(--color-success)]">
                Message sent — thank you! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-[var(--color-muted)]">
                The form isn't connected to EmailJS yet — email{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-[var(--color-sage-light)] underline">
                  {personalInfo.email}
                </a>{' '}
                directly, or add your EmailJS keys in <code className="font-mono-tech">portfolioData.ts</code>.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
