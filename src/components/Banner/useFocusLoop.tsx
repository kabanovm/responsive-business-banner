import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const useFocusLoop = <T extends HTMLElement>(isActive: boolean = true) => {
  const containerRef = useRef<T | null>(null);
  const previousActive = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    previousActive.current = document.activeElement as HTMLElement;
    containerRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !containerRef.current) return;

      const focusable = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const isShift = e.shiftKey;

      if (isShift && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!isShift && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousActive.current?.focus();
    };
  }, [isActive]);

  return containerRef;
};
