import styles from './buttonSecondary.module.scss';
const ButtonSecondary = ({ text }: { text: string }) => {
  return <div className={styles.btn}>{text}</div>;
};

export default ButtonSecondary;
