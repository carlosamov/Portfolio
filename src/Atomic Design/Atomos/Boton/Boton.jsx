import styles from "./boton.module.css";

export default function Boton(props) {
  const finalStyles = [];

  if (props.style) {
    let aux = props.style.split(" ");
    aux.forEach((st) => {
      if (st == "btnHeader") finalStyles.push(styles.btnHeader);
      else if (st == "btnNavigation") finalStyles.push(styles.btnNavigation);
      else if (st == "btnNavBar") finalStyles.push(styles.btnNavBar);
    });
  }

  return (
    <button
      className={finalStyles.length <= 0 ? "btnDefault" : finalStyles.join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
