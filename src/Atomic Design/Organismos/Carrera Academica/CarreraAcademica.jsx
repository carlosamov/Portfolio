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
            Universidad Católica Andres Bello (UCAB) -{" "}
            <i>Ingeniería en Computación</i>
          </h3>
          <div className={styles.seccionAcademica}>
            <img className={styles.imgUCAB} src={imgUCAB} alt="Logo de UCAB" />
            <p>
              Cursé cinco semestres en esta institución, donde adquirí una
              sólida base en programación estructurada y algoritmos usando C++.
              Aprendí sobre estructuras de datos fundamentales y desarrollé un
              sistema de gestión de estudiantes como proyecto en consola, lo que
              me permitió afianzar mis primeros conocimientos aplicados.
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
              Durante una pausa académica por razones personales, profundicé por
              mi cuenta en programación orientada a objetos con C#. Apliqué
              estos conocimientos desarrollando videojuegos como pasatiempo con
              Unity, entre ellos un nivel inspirado en Mario, interfaces
              interactivas y enfrentamientos con jefes. Esta etapa me permitió
              interiorizar profundamente la lógica de programación y su relación
              con la estructura y reutilización del código.
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
            Universidad Nacional Experimental de la Gran Caracas (UNEXCA) -{" "}
            <i>Ingeniería en Informática (cursando)</i>
          </h3>
          <div className={styles.seccionAcademica}>
            <img
              className={styles.imgUnexca}
              src={imgUNEXCA}
              alt="Logo de UNEXCA"
            />
            <p>
              Decidí retomar formalmente mis estudios y actualmente curso la
              carrera de Ingeniería en Informática. Durante esta etapa, he
              consolidado mis conocimientos a través del desarrollo de proyectos
              más robustos, como un Sistema de Gestión de Estudiantes y un
              Sistema de Automatización de Presupuestos, integrando lo aprendido
              en diseño de interfaces, estructuras lógicas y automatización de
              procesos.
            </p>
          </div>
        </li>
      </ul>
    </Seccion>
  );
}
