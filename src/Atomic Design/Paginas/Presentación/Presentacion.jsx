import React from "react";

import styles from "./presentacion.module.css";

import imgCarlos from "../../../assets/foto de perfil.jpeg";

import Seccion from "../../Moléculas/Seccion/Seccion";
import Blob from "../../Moléculas/Blob/Blob";

export default function Presentacion() {
  return (
    <Seccion>
      <div className={styles.texto}>
        <div>
          <h1 className={styles.h1}>Carlos Ovalles</h1>
          <h3 className={styles.h3}>
            <b>TSU en Informática - Programador Junior</b>
          </h3>
        </div>

        <p>
          Soy un desarrollador web apasionado por crear experiencias digitales
          atractivas y funcionales. Mi objetivo es construir aplicaciones y
          sitios web que no solo sean visualmente agradables, sino también
          intuitivos y eficientes. Constantemente busco aprender nuevas
          tecnologías para ampliar mis habilidades y mantenerme al día con las
          últimas tendencias de la industria. ¡Bienvenido a mi portafolio, donde
          podrás conocer mis proyectos y mi evolución profesional!
        </p>
      </div>
      <Blob>
        <img src={imgCarlos} alt="imagen Carlos Ovalles" />
      </Blob>
    </Seccion>
  );
}
