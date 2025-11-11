import Button from '@components/Button/Button.tsx';
import Link from '@components/Link/Link.tsx';
import BenefitsList from '@components/BenefitsList/BenefitsList.tsx';
import Picture from '@components/Picture/Picture.tsx';
import { useEscapeClose } from '@hooks/useEscapeClose.ts';
import { useFocusLoop } from '@hooks/useFocusLoop.ts';
import CloseIcon from '@assets/icons/close.svg?react';

import { BENEFITS_LIST } from './constants.tsx';
import type { BannerProps } from './types.ts';
import styles from './Banner.module.css';

const Banner = ({ onClose }: BannerProps) => {
  const bannerRef = useFocusLoop<HTMLDivElement>();
  useEscapeClose(onClose);

  return (
    <>
      <div className={styles.banner__overlay} onClick={onClose} aria-hidden="true" />
      <div
        ref={bannerRef}
        className={styles.banner}
        role="dialog"
        aria-modal="true"
        aria-labelledby="banner-title"
        aria-describedby="banner-description"
        tabIndex={-1}
      >
        <div className={styles.banner__scrollable}>
          <Button variant="close" ariaLabel="close banner" onClick={onClose}>
            <CloseIcon width={12} height={12} aria-hidden="true" />
          </Button>
          <h1 id="banner-title" className={styles.banner__title}>
            Get the Business Funding You Need
          </h1>
          <div className={styles.banner__content}>
            <p id="banner-description" className={styles.banner__description}>
              Expand your business with a flexible loan tailored to your needs. <br />
              Whether you're investing in new equipment, increasing inventory, or boosting cash
              flow, we offer quick approvals and competitive rates to keep your business growing.
            </p>
            <BenefitsList items={BENEFITS_LIST} />
          </div>
          <div className={styles.banner__actions}>
            <Button onClick={onClose}>Apply Now</Button>
            <Link text="more information" href="https://finom.co" />
          </div>
        </div>
        <Picture />
      </div>
    </>
  );
};

export default Banner;
