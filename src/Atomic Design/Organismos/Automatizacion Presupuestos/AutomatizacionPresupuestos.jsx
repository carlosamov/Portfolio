import Carrusel from "../../Moléculas/Carrusel/Carrusel";

import imgLogin from "../../../assets/Login.png";
import imgPresupuesto from "../../../assets/Presupuesto.png";
import imgPresupuestos from "../../../assets/Presupuestos.png";
import imgProductos from "../../../assets/Productos.png";
import imgUsuarios from "../../../assets/Usuarios.png";

export default function AutomatizacionPresupuestos() {
  return (
    <div>
      <h2>Automatización de Presupuestos (En Progreso)</h2>
      <Carrusel
        images={[
          imgLogin,
          imgPresupuestos,
          imgPresupuesto,
          imgProductos,
          imgUsuarios,
        ]}
      />
      <p>
        Actualmente se encuentra en desarrollo una aplicacion web como proyecto
        académico para la creación de una plataforma para automatizar el proceso
        de elaboración y gestión de presupuestos.
      </p>
      <h3>Tecnológias Aplicadas</h3>
      <ul>
        <li>
          <b>Frontend con React:</b> Mi principal herramienta de creación de
          interfaces es React, domino los Hooks basicos y entiendo el ciclo de
          vida del componente de manera sólida.
        </li>
        <li>
          <p>
            <b>Backend con Node.js:</b> Diseñé en su totalidad la API RESTful
            usando Node.js con Express, para el servidor y Sequelize (un ORM
            para Node.js) para manipular la base de datos PostgreSQL.
          </p>
        </li>
        <p>
          Gracias a este proyecto aprendí a crear una interacción más fluida
          entre componentes y afinar los conocimientos ya presentes de React.
        </p>
      </ul>
    </div>
  );
}
