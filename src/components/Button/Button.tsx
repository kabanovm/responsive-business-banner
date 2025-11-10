import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  children: any;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
