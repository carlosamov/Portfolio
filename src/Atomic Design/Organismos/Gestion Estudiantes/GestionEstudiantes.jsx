import imgEstudiantes from "../../../assets/GestionEstudiantes.jpeg";
import Seccion from "../../Moléculas/Seccion/Seccion";

import styles from "./GestionEstudiantes.module.css";

export default function GestionEstudiantes() {
  return (
    <Seccion>
      <h2>Sistema de Gestión de Estudiantes</h2>
      <img
        className={styles.imgEstudiantes}
        src={imgEstudiantes}
        alt="Captura de estudiantes"
      />
      <p>
        Diseñé y construí una aplicación web completa para gestionar la
        matriculación de estudiantes. Este proyecto incluye funcionalidades para
        llevar un control de los alumnos registrados a lo largo del tiempo y
        administrar las secciones de estudio.
      </p>

      <h3>Tecnologías que usé</h3>
      <ul>
        <li>
          <b>Frontend con React:</b> Creé una interfaz de usuario interactiva y
          adaptable, encargándome del manejo del estado y la comunicación con el
          backend.
        </li>
        <li>
          <b>Backend con C#:</b> Desarrollé la API RESTful usando C# con EmbedIO
          y me encargué de la manipulación de la base de datos PostgreSQL con
          Entity Framework.
        </li>
      </ul>
      <p>
        Gracias a este proyecto, aprendí a conectar todos los componentes de una
        aplicación, aplicando el patrón de diseño **MVC** para organizar el
        código de manera eficiente.
      </p>
    </Seccion>
  );
}
