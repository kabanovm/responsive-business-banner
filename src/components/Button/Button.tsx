import clsx from 'clsx';

import styles from './Button.module.css';
import type { ButtonProps } from './types.ts';

const Button = ({
  onClick,
  children,
  ariaLabel,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(styles.button, styles[`button--${variant}`], className)}
    >
      {children}
    </button>
  );
};

export default Button;
