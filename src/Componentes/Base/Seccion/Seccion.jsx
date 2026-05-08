import styles from "./seccion.module.css";

export default function Seccion(props) {
  return (
    <section className={styles.seccion} style={props.style ? props.style : {}}>
      {props.children}
    </section>
  );
}
