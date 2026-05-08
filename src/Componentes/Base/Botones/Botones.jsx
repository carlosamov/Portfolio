import styles from "./Botones.module.css";

export function BtnHeader(props) {
  const { className, onClick, children } = props;

  return (
    <button className={`${styles.btnHeader} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
