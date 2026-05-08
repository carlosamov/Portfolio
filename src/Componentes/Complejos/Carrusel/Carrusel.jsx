import React from "react";

import styles from "./carrusel.module.css";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { BotonNavigation } from "../../Atomos/Boton/Boton";

export default function Carrusel(props) {
  const [index, setIndex] = React.useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % props.images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + props.images.length) % props.images.length);
  };

  return (
    <div className={styles.carrusel}>
      <BotonNavigation onClick={prev}>
        <FaArrowAltCircleLeft />
      </BotonNavigation>
      <div className={styles.carruselContainer}>
        <div
          className={styles.carruselFrame}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {props.images.map((img, i) => (
            <img
              className={styles.img}
              key={i}
              src={img}
              alt={"Slide " + i}
            ></img>
          ))}
        </div>
      </div>

      <BotonNavigation onClick={next}>
        <FaArrowAltCircleRight />
      </BotonNavigation>
    </div>
  );
}
