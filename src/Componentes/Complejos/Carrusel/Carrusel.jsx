import React from "react";

import styles from "./carrusel.module.css";

export default function Carrusel(props) {
  const [index, setIndex] = React.useState(0);
  const [animar, setAnimar] = React.useState(true);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!animar) return () => clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === props.imgs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [index, animar]);

  return (
    <div className={styles.contenedor}>
      <div
        className={styles.imagenes}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {props.imgs.map((img, i) => (
          <img key={i} src={img} alt={"Slide " + i} />
        ))}
      </div>
      <div className={styles.botonera}>
        {props.imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setAnimar(false);
            }}
            className={index === i && animar ? styles.active : ""}
          >
            <div
              style={{
                width: index === i ? "100%" : "0%",
              }}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
