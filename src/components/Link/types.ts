export type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

export type LinkProps = {
  text: string;
  href: string;
  ariaLabel?: string;
  target?: LinkTarget;
  className?: string;
};
