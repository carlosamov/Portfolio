import styles from "./Botones.module.css";

export function BtnHeader(props) {
  const { className, onClick, children } = props;

  return (
    <button className={`${styles.btn} ${styles.btnHeader} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function BtnPrimary(props) {
  const { className, onClick, children } = props;

    return (
    <button className={`${styles.btn} ${styles.btnPrimary} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
