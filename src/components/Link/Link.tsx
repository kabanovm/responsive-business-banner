import clsx from 'clsx';

import type { LinkProps } from './types.ts';
import styles from './Link.module.css';

const Link = ({ text, href, target = '_blank', ariaLabel, className }: LinkProps) => {
  const isExternal = target === '_blank';
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      target={target}
      aria-label={ariaLabel}
      className={clsx(styles.link, className)}
      rel={rel}
    >
      {text}
    </a>
  );
};

export default Link;
