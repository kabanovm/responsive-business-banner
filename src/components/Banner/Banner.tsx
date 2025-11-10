import styles from './Banner.module.css';
import Button from '../Button/Button.tsx';
import Link from '../Link/Link.tsx';
import List from '../List/List.tsx';
import closeIcon from '../../assets/close.svg';
import { BENEFITS_LIST } from './constants.ts';
import type { BannerProps } from './types.ts';
import Picture from '../Picture/Picture.tsx';
import { useEscapeClose } from './useEscapeClose.tsx';
import { useFocusLoop } from './useFocusLoop.tsx';

const Banner = ({ onClose }: BannerProps) => {
  const bannerRef = useFocusLoop<HTMLDivElement>();
  useEscapeClose(onClose);

  return (
    <div role="region" aria-labelledby="banner-title">
      <div className={styles.banner__overlay} onClick={onClose} aria-hidden="true" />
      <div
        ref={bannerRef}
        className={styles.banner}
        role="dialog"
        aria-modal="true"
        aria-labelledby="banner-title"
        tabIndex={-1}
      >
        <button className={styles.banner__close} aria-label="Close banner" onClick={onClose}>
          <img src={closeIcon} alt="" width={12} height={12} aria-hidden="true" />
        </button>
        <h1 id="banner-title" className={styles.banner__title}>
          Get the Business Funding You Need
        </h1>
        <div className={styles.banner__content}>
          <p className={styles.banner__description}>
            Expand your business with a flexible loan tailored to your needs. Whether you're
            investing in new equipment, increasing inventory, or boosting cash flow, we offer quick
            approvals and competitive rates to keep your business growing.
          </p>
          <List items={BENEFITS_LIST} />
        </div>
        <div className={styles.banner__actions}>
          <Button onClick={onClose}>Apply Now</Button>
          <Link text="more information" href="https://finom.co" />
        </div>
        <Picture />
      </div>
    </div>
  );
};

export default Banner;
