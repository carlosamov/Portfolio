import styles from "./seccion.module.css";

export default function Seccion(props) {
  const finalStyles = [styles.seccion];

  if (props.style) {
    let aux = props.style.split(" ");
    aux.forEach((st) => {
      if (st == "row") finalStyles.push(styles.row);
      else if (st == "column") finalStyles.push(styles.column);
    });
  }
  console.log(finalStyles);
  return <section className={finalStyles.join(" ")}>{props.children}</section>;
}
