import styles from './Link.module.css';
import type { LinkProps } from './types.ts';

const Link = ({ text, href }: LinkProps) => {
  return (
    <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default Link;
