import styles from './Link.module.css';
import type { LinkProps } from './types.ts';

const Link = ({ text, href, target, ariaLabel }: LinkProps) => {
  const isExternal = target === '_blank';
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  return (
    <a href={href} target={target} aria-label={ariaLabel} className={styles.link} rel={rel}>
      {text}
    </a>
  );
};

export default Link;
