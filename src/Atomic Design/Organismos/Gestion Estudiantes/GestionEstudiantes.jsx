import imgEstudiantes from "../../../assets/GestionEstudiantes.jpeg";
import Seccion from "../../Moléculas/Seccion/Seccion";

export default function GestionEstudiantes() {
  return (
    <Seccion>
      <h2>Sistema de Gestión de Estudiantes</h2>
      <img
        className="img-estudiantes"
        src={imgEstudiantes}
        alt="Captura de estudiantes"
      />
      <p>
        Se desarrolló una aplicacion web integral para la gestion de
        matriculación de estudiantes, junto con estadísticas de estudiantes
        registrados a lo largo del tiempo, asi como administración de secciones.
      </p>
      <h3>Tecnológias Aplicadas</h3>
      <ul>
        <li>
          <b>Frontend con React:</b> Construí la interfaz de usuario interactiva
          y responsiva, gestionando el estado de la aplicación y la comunicación
          con el backend.
        </li>
        <li>
          <p>
            <b>Backend con C#:</b> Diseñé en su totalidad la API RESTful usando
            C# con EmbedIO para el servidor y EntityFramework para manipular la
            base de datos PostgreSQL.
          </p>
        </li>
        <p>
          Gracias a este proyecto aprendí a intercontectar los distintos
          elementos de una apliación, siguiendo los patrones de diseño MVC.
        </p>
      </ul>
    </Seccion>
  );
}
