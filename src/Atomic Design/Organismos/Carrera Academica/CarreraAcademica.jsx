import imgUCAB from "../../../assets/LogoUCAB.png";
import imgUnity from "../../../assets/Unity.webp";
import imgUNEXCA from "../../../assets/Logo_Unexca.jpg";
import Seccion from "../../Moléculas/Seccion/Seccion";

import styles from "./CarreraAcademica.module.css";

export default function CarreraAcademica() {
  return (
    <Seccion>
      <h2>Carrera Académica</h2>
      <ul>
        <li>
          <h3>
            Universidad Nacional Experimental de la Gran Caracas (UNEXCA) -{" "}
            <i>Cursando Ingenieria en informatica</i>
          </h3>
          <div className={styles.seccionAcademica}>
            <img
              className={styles.imgUnexca}
              src={imgUNEXCA}
              alt="Logo de UNEXCA"
            />
            <p>
              Me gradué como Técnico Superior Universitario (TSU) en
              Informática, y ahora estoy cursando la Ingeniería en Informática
              para seguir avanzando en mis estudios. Durante este tiempo, he
              aplicado mis conocimientos en proyectos robustos como un{" "}
              <b>Sistema de Gestión de Estudiantes</b> y un{" "}
              <b>Sistema de Automatización de Presupuestos</b>. A través de
              estos proyectos, he consolidado mis habilidades en el diseño de
              interfaces, lógica de programación y automatización de procesos.
            </p>
          </div>
        </li>
        <li>
          <h3>
            Formación Autodidacta -{" "}
            <i>Programación Orientada a Objetos con C# y desarrollo en Unity</i>
          </h3>
          <div className={styles.seccionAcademica}>
            <p>
              Aproveché una pausa en mis estudios para enfocarme en la
              programación autodidacta. Profundicé en la Programación Orientada
              a Objetos con C#, aplicando estos conocimientos en proyectos con
              Unity. Desarrollé un nivel estilo Mario, interfaces interactivas y
              combates contra jefes, no solo como un pasatiempo, sino como una
              forma de dominar la lógica de la programación y entender cómo se
              estructura y reutiliza el código de forma práctica.
            </p>
            <img
              className={styles.imgUnity}
              src={imgUnity}
              alt="Logo de Unity"
            />
          </div>
        </li>

        <li>
          <h3>
            Universidad Católica Andres Bello (UCAB) -{" "}
            <i>Ingeniería en Computación</i>
          </h3>
          <div className={styles.seccionAcademica}>
            <img className={styles.imgUCAB} src={imgUCAB} alt="Logo de UCAB" />
            <p>
              Durante mi formación en la UCAB, completé cinco semestres que me
              proporcionaron una base sólida en programación estructurada y
              algoritmos con C++. Apliqué estos conocimientos desarrollando un
              sistema de gestión de estudiantes en consola, lo que me permitió
              dominar conceptos fundamentales de estructuras de datos y llevar
              la teoría a la práctica por primera vez en un proyecto real.
            </p>
          </div>
        </li>
      </ul>
    </Seccion>
  );
}
