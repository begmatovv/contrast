import styles from './buttonPrimary.module.scss';

const ButtonPrimary = ({ text }: { text: string }) => {
  return <div className={styles.btn}>{text}</div>;
};

export default ButtonPrimary;
