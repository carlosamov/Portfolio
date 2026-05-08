import React from "react";

import styles from "./nav.module.css";

import { useGlobalContext } from "../../../../Contexto/GlobalContext";

export default function NavBar(props) {
  const ctx = useGlobalContext();
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    setOffset(ctx.refs.header.current.offsetHeight || 0);

    const resizeObserver = new ResizeObserver(() =>
      setOffset(ctx.refs.header.current.offsetHeight || 0)
    );
    resizeObserver.observe(ctx.refs.header.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <nav style={{ top: `${offset}px` }} className={styles.navBar}>
      {props.children}
    </nav>
  );
}
