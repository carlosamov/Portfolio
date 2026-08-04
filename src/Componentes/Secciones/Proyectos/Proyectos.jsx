import React from "react";
import Seccion from "../../Base/Seccion/Seccion.jsx";
import Carrusel from "../../Complejos/Carrusel/Carrusel";
import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

import styles from "./proyectos.module.css";

export default function Proyectos() {
  const { refs } = useGlobalContext();

  return (
    <Seccion secRef={refs.proyectos}>
      <h2>Proyectos</h2>
      <div className={styles.bento_grid}>
        <div className={styles.bento + " " + styles.proyecto_principal}>
          <h3>Sistema de automatización de presupuestos</h3>
          <Carrusel
            imgs={[
              "src/assets/presupuesto_1.jpeg",
              "src/assets/presupuesto_2.jpeg",
              "src/assets/presupuesto_3.jpeg",
              "src/assets/presupuesto_4.jpeg",
            ]}
          />

          <div>
            <p>
              Solución Full Stack diseñada para digitalizar y centralizar el
              flujo de trabajo de la empresa, sustituyendo la gestión manual por
              un entorno dinámico y eficiente. Construido con el Stack PERN (
              <b>PostgreSQL, Express, React.js, Node.js</b>), el sistema
              aprovecha la potencia de los WebSockets para facilitar el trabajo
              colaborativo en tiempo real. Esta integración permite que el
              equipo coedite presupuestos de forma simultánea, garantizando la
              sincronización instantánea de los datos y manteniendo la
              consistencia de la información sin fricciones ni retrasos
              operativos.
            </p>

            <div className={styles.demo_credentials}>
              <p>
                Puedes ver una versión demo de mi proyecto{" ➡ "}
                <a href="https://ui-presupuestos.vercel.app/" target="_blank">
                  🔗Aqui
                </a>
              </p>
              <p>(Permita las cookies para poder iniciar sesión!)</p>
              <p>
                <b>Usuario:</b> p-visitante
              </p>
              <p>
                <b>Contraseña:</b> visitante123*
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bento}>
          <h3>Sistema de gestión de estudiantes</h3>
          <img
            src="src/assets/estudiantes_1.jpeg"
            alt="Imagen de proyecto de gestion de estudiantes"
          />
          <p>
            Aplicación web para la gestión de estudiantes con manejo de estados
            avanzados en el frontend mediante React.js (Context API). El backend
            está respaldado por un servidor HTTP a medida construido en C#
            (.NET) utilizando EmbedIO y persistencia en PostgreSQL.
          </p>
        </div>
        <div className={styles.bento}>
          <h3>Finance Flow: Sistema de gestión multidivisa</h3>
          <Carrusel
            imgs={[
              "src/assets/finance_flow_1.png",
              "src/assets/finance_flow_2.png",
            ]}
          />
          <p>
            Plataforma financiera actualmente en etapa de prototipado UI/UX en
            Figma. Su arquitectura técnica está proyectada bajo Clean
            Architecture utilizando .NET (C#) y React.js, enfocándose en un
            control transaccional dual (USD/Bs) seguro y escalable.
          </p>
        </div>
      </div>
    </Seccion>
  );
}
