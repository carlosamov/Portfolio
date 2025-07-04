import React from "react";

import styles from "./carrusel.module.css";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import Boton from "../../Atomos/Boton/Boton";

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
      <Boton style="btnNavigation" onClick={prev}>
        <FaArrowAltCircleLeft />
      </Boton>
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

      <Boton style="btnNavigation" onClick={next}>
        <FaArrowAltCircleRight />
      </Boton>
    </div>
  );
}
