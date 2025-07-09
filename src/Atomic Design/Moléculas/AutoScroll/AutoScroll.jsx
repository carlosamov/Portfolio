import React from "react";

import styles from "./AutoScroll.module.css";

export default function AutoScroll(props) {
  const imagenes = [...props.children, ...props.children];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{imagenes}</div>
    </div>
  );
}
