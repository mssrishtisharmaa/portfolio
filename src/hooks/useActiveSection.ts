import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver,
 * so the header nav can highlight the active link ("scroll-spy").
 */
export function useActiveSection(sectionIds: string[], rootMargin = '-45% 0px -50% 0px') {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
