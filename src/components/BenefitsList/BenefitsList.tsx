import CheckIcon from '@assets/icons/check.svg?react';
import type { BenefitsListProps } from '@components/BenefitsList/types.ts';

import styles from './BenefitsList.module.css';

const BenefitsList = ({ items }: BenefitsListProps) => {
  return (
    <ul className={styles.list}>
      {items.map(({ text, id }) => (
        <li key={id} className={styles.list__item}>
          <CheckIcon width={24} height={24} aria-hidden="true" className={styles.list__icon} />
          <span className={styles.list__text}>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
