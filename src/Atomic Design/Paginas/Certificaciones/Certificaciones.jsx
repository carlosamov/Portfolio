import React from "react";

import styles from "./certificaciones.module.css";

import Seccion from "../../Moléculas/Seccion/Seccion.jsx";
import AutoScroll from "../../Moléculas/AutoScroll/AutoScroll.jsx";

import imgCrestron1 from "../../../assets/Cursos/Crestron/CCT.jpg";
import imgCrestron2 from "../../../assets/Cursos/Crestron/D-4K.jpg";
import imgCrestron3 from "../../../assets/Cursos/Crestron/DCT-D.jpg";
import imgCrestron4 from "../../../assets/Cursos/Crestron/DCT-R.jpg";
import imgCrestron5 from "../../../assets/Cursos/Crestron/E-4K.jpg";
import imgCrestron6 from "../../../assets/Cursos/Crestron/SCT-C.jpg";
import imgCrestron7 from "../../../assets/Cursos/Crestron/SCT-R.jpg";
import imgCrestron8 from "../../../assets/Cursos/Crestron/TCT-C.jpg";
import imgCrestron9 from "../../../assets/Cursos/Crestron/TCT-R.jpg";

export default function Certificaciones() {
  return (
    <Seccion style="column">
      <h1>Certificaciones</h1>
      <p>Aquí puedes encontrar información sobre mis certificaciones.</p>
      <AutoScroll>
        <img className={styles.img} src={imgCrestron1} alt="Crestron CCT" />
        <img className={styles.img} src={imgCrestron2} alt="Crestron D-4K" />
        <img className={styles.img} src={imgCrestron3} alt="Crestron DCT-D" />
        <img className={styles.img} src={imgCrestron4} alt="Crestron DCT-R" />
        <img className={styles.img} src={imgCrestron5} alt="Crestron E-4K" />
        <img className={styles.img} src={imgCrestron6} alt="Crestron SCT-C" />
        <img className={styles.img} src={imgCrestron7} alt="Crestron SCT-R" />
        <img className={styles.img} src={imgCrestron8} alt="Crestron TCT-C" />
        <img className={styles.img} src={imgCrestron9} alt="Crestron TCT-R" />
      </AutoScroll>
    </Seccion>
  );
}
