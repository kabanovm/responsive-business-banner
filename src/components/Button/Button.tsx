import styles from './Button.module.css';
import type { ButtonProps } from './types.ts';

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
