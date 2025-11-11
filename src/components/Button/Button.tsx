import styles from './Button.module.css';
import type { ButtonProps } from './types.ts';
import clsx from 'clsx';

const Button = ({
  onClick,
  children,
  ariaLabel,
  type = 'button',
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(styles.button, styles[`button--${variant}`])}
    >
      {children}
    </button>
  );
};

export default Button;
