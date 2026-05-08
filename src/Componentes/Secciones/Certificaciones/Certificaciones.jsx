import React from "react";

import styles from "./certificaciones.module.css";

import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

import AutoScroll from "../../Complejos/AutoScroll/AutoScroll.jsx";

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
      <section style="column">
        <h1 ref={ctx.refs.certificaciones}>Certificaciones</h1>
        <p>
          Mi formación en <b>Platzi</b> me ha permitido construir una base
          sólida en programación y tecnologías web. A través de sus rutas de
          aprendizaje, he fortalecido mis habilidades en áreas clave como{" "}
          <b>C#</b>, <b>POO</b>, <b>Javascript</b>, <b>React</b> y{" "}
          <b>Base de datos</b>. Estos certificados son el resultado de un
          aprendizaje activo y autodidacta, demostrando mi constancia y mi
          capacidad para adaptarme rápidamente a nuevas herramientas y
          conceptos.
        </p>
        <p>
          Obtuve los certificados de <b>Crestron</b> como parte de mi formación
          profesional en mi trabajo actual. Aunque provienen de un campo
          diferente, han sido fundamentales para desarrollar mi habilidad
          técnica y mi enfoque en la resolución de problemas. Este trabajo me
          enseñó a manejar tecnologías de audio y video complejas y a mantener
          una mentalidad de mejora continua, cualidades que aplico directamente
          a mis proyectos de programación. Demuestran que soy una persona
          versátil, con capacidad para dominar nuevas tecnologías y buscar
          soluciones en cualquier contexto.
        </p>
      </section>
      <AutoScroll>
        <img className={styles.img} src={imgPlatzi1} alt="Platzi" />
        <img className={styles.img} src={imgPlatzi2} alt="Platzi" />
        <img className={styles.img} src={imgplatzi3} alt="Platzi" />
        <img className={styles.img} src={imgplatzi4} alt="Platzi" />
        <img className={styles.img} src={imgplatzi5} alt="Platzi" />
      </AutoScroll>
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
    </div>
  );
}
