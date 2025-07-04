import styles from "./nav.module.css";

export default function NavBar(props) {
  return <nav className={styles.navBar}>{props.children}</nav>;
}
