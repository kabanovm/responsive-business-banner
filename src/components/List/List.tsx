import styles from './List.module.css';
import type { ListProps } from './types.ts';

const List = ({ items }: ListProps) => {
  return (
    <ul className={styles.list}>
      {items.map(({ text, icon }) => (
        <li key={text} className={styles.list__item}>
          {icon}
          <span className={styles.list__text}>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
