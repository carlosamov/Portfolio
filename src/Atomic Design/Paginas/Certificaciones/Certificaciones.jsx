import React from "react";

import styles from "./certificaciones.module.css";

import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

import AutoScroll from "../../Moléculas/AutoScroll/AutoScroll.jsx";
import Seccion from "../../Moléculas/Seccion/Seccion.jsx";

import imgCrestron1 from "../../../assets/Cursos/Crestron/CCT.jpg";
import imgCrestron2 from "../../../assets/Cursos/Crestron/D-4K.jpg";
import imgCrestron3 from "../../../assets/Cursos/Crestron/DCT-D.jpg";
import imgCrestron4 from "../../../assets/Cursos/Crestron/DCT-R.jpg";
import imgCrestron5 from "../../../assets/Cursos/Crestron/E-4K.jpg";
import imgCrestron6 from "../../../assets/Cursos/Crestron/SCT-C.jpg";
import imgCrestron7 from "../../../assets/Cursos/Crestron/SCT-R.jpg";
import imgCrestron8 from "../../../assets/Cursos/Crestron/TCT-C.jpg";
import imgCrestron9 from "../../../assets/Cursos/Crestron/TCT-R.jpg";

import imgPlatzi1 from "../../../assets/Cursos/Platzi/diploma-bd_page.jpg";
import imgPlatzi2 from "../../../assets/Cursos/Platzi/diploma-computacion-basica_page.jpg";
import imgplatzi3 from "../../../assets/Cursos/Platzi/diploma-csharp-introduccion_page.jpg";
import imgplatzi4 from "../../../assets/Cursos/Platzi/diploma-habilidades-blandas_page.jpg";
import imgplatzi5 from "../../../assets/Cursos/Platzi/diploma-sindrome-impostor_page.jpg";

export default function Certificaciones() {
  const ctx = useGlobalContext();
  return (
    <div>
      <Seccion style="column">
        <h1 ref={ctx.refs.certificaciones}>Certificaciones</h1>
        <p>
          Los certificados de Platzi son un testimonio de mi dedicación al
          aprendizaje autodidacta y continuo. A través de estos cursos, he
          adquirido conocimientos en diversas áreas, fortaleciendo mis
          habilidades técnicas y personales. Estos logros reflejan mi compromiso
          con el desarrollo profesional y la mejora constante.
        </p>
        <p>
          Los certificados de Crestron, aunque no están directamente
          relacionados con la programación, son un reflejo del compromiso con el
          aprendizaje continuo y el profesionalismo. Estos certificados
          demuestran habilidades técnicas avanzadas y la capacidad de adaptarse
          a tecnologías de vanguardia, cualidades esenciales en cualquier ámbito
          profesional.
        </p>
      </Seccion>
      <AutoScroll>
        <img className={styles.img} src={imgPlatzi1} alt="Platzi" />
        <img className={styles.img} src={imgCrestron1} alt="Crestron CCT" />
        <img className={styles.img} src={imgCrestron2} alt="Crestron D-4K" />
        <img className={styles.img} src={imgPlatzi2} alt="Platzi" />
        <img className={styles.img} src={imgCrestron3} alt="Crestron DCT-D" />
        <img className={styles.img} src={imgCrestron4} alt="Crestron DCT-R" />
        <img className={styles.img} src={imgplatzi3} alt="Platzi" />
        <img className={styles.img} src={imgCrestron5} alt="Crestron E-4K" />
        <img className={styles.img} src={imgCrestron6} alt="Crestron SCT-C" />
        <img className={styles.img} src={imgplatzi4} alt="Platzi" />
        <img className={styles.img} src={imgCrestron7} alt="Crestron SCT-R" />
        <img className={styles.img} src={imgCrestron8} alt="Crestron TCT-C" />
        <img className={styles.img} src={imgplatzi5} alt="Platzi" />
        <img className={styles.img} src={imgCrestron9} alt="Crestron TCT-R" />
      </AutoScroll>
    </div>
  );
}
