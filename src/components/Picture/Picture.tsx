import coins1x from '@assets/images/coins_x1.png';
import coins2x from '@assets/images/coins_x2.png';
import coins1xWebp from '@assets/images/coins_x1.webp';
import coins2xWebp from '@assets/images/coins_x2.webp';
import coins1xAvif from '@assets/images/coins_x1.avif';
import coins2xAvif from '@assets/images/coins_x2.avif';

import styles from './Picture.module.css';

const Picture = () => {
  return (
    <picture className={styles.picture}>
      <source type="image/avif" srcSet={`${coins1xAvif} 1x, ${coins2xAvif} 2x`} />
      <source type="image/webp" srcSet={`${coins1xWebp} 1x, ${coins2xWebp} 2x`} />
      <img
        src={coins1x}
        srcSet={`${coins1x} 1x, ${coins2x} 2x`}
        alt=""
        loading="lazy"
        width={300}
        height={200}
      />
    </picture>
  );
};

export default Picture;
