import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'close';
export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  ariaLabel?: string;
  variant?: ButtonVariant;
  className?: string;
};
