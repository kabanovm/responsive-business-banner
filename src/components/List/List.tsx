import styles from './List.module.css';
import type { ListProps } from './types.ts';

const List = ({ items }: ListProps) => {
  return (
    <div className={styles.list}>
      {items.map(({ text, icon }) => (
        <div key={text} className={styles.list__item}>
          <img src={icon} alt="list-item-icon" width={24} height={24} />
          <span className={styles.list__text}>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
