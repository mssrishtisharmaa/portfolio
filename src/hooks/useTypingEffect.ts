import { useEffect, useState } from 'react';

interface TypingOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Cycles through a list of words with a typewriter effect.
 * Used ONLY for the hero role title, per design brief.
 */
export function useTypingEffect(words: string[], options: TypingOptions = {}) {
  const { typingSpeed = 80, deletingSpeed = 40, pauseDuration = 1800 } = options;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
