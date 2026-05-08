import styles from "./Link.module.css";

export default function Link(props) {
  return (
    <a className={styles.link} target="blank" href={props.href}>
      {props.children}
    </a>
  );
}
