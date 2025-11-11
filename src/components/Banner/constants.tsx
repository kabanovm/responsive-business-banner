import CheckIcon from '@assets/icons/check.svg?react';
import type { BenefitItem } from '@components/Banner/types.ts';

const CheckIconComponent = () => <CheckIcon aria-hidden="true" width={24} height={24} />;

export const BENEFITS_LIST: BenefitItem[] = [
  { icon: <CheckIconComponent />, text: 'Fast approval process', id: 'fast-approval' },
  { icon: <CheckIconComponent />, text: 'Flexible repayment terms', id: 'flexible-terms' },
  { icon: <CheckIconComponent />, text: 'Competitive interest rates', id: 'competitive-rates' },
];
