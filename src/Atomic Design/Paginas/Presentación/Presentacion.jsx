import React from "react";

import styles from "./presentacion.module.css";

import imgCarlos from "../../../assets/foto de perfil.jpeg";

import Seccion from "../../Moléculas/Seccion/Seccion";
import Blob from "../../Moléculas/Blob/Blob";

export default function Presentacion() {
  return (
    <Seccion>
      <div className={styles.texto}>
        <h2 className={styles.h1}>¡Hola! Soy</h2>
        <h1 className={styles.h2}>Carlos Ovalles</h1>
        <p>
          Desarrollador web apasionado por crear experiencias digitales
          atractivas y funcionales. Bienvenido a mi portafolio, donde podrás
          conocer mis proyectos y habilidades.
        </p>
        <h2>Sobre Mi</h2>
        <p>
          Soy un desarrollador web con experiencia en la creación de
          aplicaciones y sitios web. Me apasiona aprender nuevas tecnologías y
          mejorar mis habilidades.
        </p>
      </div>

      <Blob>
        <img src={imgCarlos} alt="imagen Carlos Ovalles" />
      </Blob>
    </Seccion>
  );
}
