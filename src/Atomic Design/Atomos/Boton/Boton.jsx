import styles from "./boton.module.css";

export function BotonNavigation(props) {
  return (
    <button className={styles.btnNavigation} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function BotonHeader(props) {
  return (
    <button className={styles.btnHeader} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export function BotonNavBar(props) {
  const finalStyles = [styles.btnNavBar];
  if (props.selected) finalStyles.push(styles.selected);
  return (
    <button className={finalStyles.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
