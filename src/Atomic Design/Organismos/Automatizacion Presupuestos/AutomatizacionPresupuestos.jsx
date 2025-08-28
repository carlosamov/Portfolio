import Carrusel from "../../Moléculas/Carrusel/Carrusel";

import imgLogin from "../../../assets/Login.png";
import imgPresupuesto from "../../../assets/Presupuesto.png";
import imgPresupuestos from "../../../assets/Presupuestos.png";
import imgProductos from "../../../assets/Productos.png";
import imgUsuarios from "../../../assets/Usuarios.png";
import Seccion from "../../Moléculas/Seccion/Seccion";

export default function AutomatizacionPresupuestos() {
  return (
    <Seccion>
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
        Como proyecto académico, estoy construyendo una plataforma web para
        automatizar la elaboración y gestión de presupuestos.
      </p>
      <h3>Tecnologías que estoy usando</h3>
      <ul>
        <li>
          <b>Frontend con React:</b> Utilicé React para la interfaz de usuario.
          Domino los Hooks básicos y tengo un entendimiento sólido del ciclo de
          vida de los componentes.
        </li>
        <li>
          <b>Backend con Node.js:</b> Diseñé la API RESTful completa usando
          Node.js con Express, y usé Sequelize (un ORM para Node.js) para
          interactuar con la base de datos PostgreSQL.
        </li>
      </ul>
      <p>
        A través de este proyecto, he logrado crear una interacción más fluida
        entre los componentes y he perfeccionado mis conocimientos de React.
      </p>
    </Seccion>
  );
}
