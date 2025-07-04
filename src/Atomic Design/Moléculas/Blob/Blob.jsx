import styles from "./blob.module.css";

export default function Blob(props) {
  return <div className={styles.blob}>{props.children}</div>;
}
