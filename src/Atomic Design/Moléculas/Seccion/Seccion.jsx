import styles from "./seccion.module.css";

export default function Seccion(props) {
  const finalStyles = [styles.seccion];

  if (props.style) {
    let aux = props.style.split(" ");
    aux.forEach((st) => {
      if (st == "row") finalStyles.push(styles.row);
      else if (st == "column") finalStyles.push(styles.column);

      if (st == "no-padding") finalStyles.push(styles.noPadding);
      if (st == "no-margin") finalStyles.push(styles.noMargin);
    });
  }
  return <section className={finalStyles.join(" ")}>{props.children}</section>;
}
