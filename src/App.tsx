import { useState } from 'react';

import Banner from './components/Banner/Banner.tsx';
import Button from './components/Button/Button.tsx';
import styles from './App.module.css';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        {!isBannerVisible && <Button onClick={() => setIsBannerVisible(true)}>Show Banner</Button>}
      </div>

      {isBannerVisible && <Banner onClose={handleCloseBanner} />}
    </div>
  );
}

export default App;
