import styles from './Banner.module.css';
import Button from '../Button/Button.tsx';
import Link from '../Link/Link.tsx';
import List from '../List/List.tsx';
import { BENEFITS_LIST } from './constants.ts';

type BannerProps = { onClose: () => void };

const Banner = ({ onClose }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <button
        className={styles.banner__close}
        aria-label="Close banner"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
      >
        x
      </button>
      <h1 className={styles.banner__title}>Get the Business Funding You Need</h1>
      <div className={styles.banner__content}>
        <p className={styles.banner__description}>
          Expand your business with a flexible loan tailored to your needs. Whether you're investing
          in new equipment, increasing inventory, or boosting cash flow, we offer quick approvals
          and competitive rates to keep your business growing.
        </p>
        <List items={BENEFITS_LIST} />
      </div>
      <picture className={styles.coins}>{/* image coins*/}</picture>
      <div className={styles.actions}>
        <Button onClick={() => {}}>Apply Now</Button>
        <Link text="MORE INFORMATION" href="https://finom.co" />
      </div>
    </div>
  );
};

export default Banner;
