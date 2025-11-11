import type { ReactNode } from 'react';

export type BannerProps = {
  onClose: () => void;
};

export type BenefitItem = {
  icon: ReactNode;
  text: string;
  id: string;
};
