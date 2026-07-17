import React from "react";

import Seccion from "../../Base/Seccion/Seccion.jsx";

import styles from "./timeline.module.css";

import img_1 from "../../../assets/presupuesto_1.jpeg";
import img_2 from "../../../assets/presupuesto_2.jpeg";

export default function Timeline() {
  return (
    <Seccion>
      <h2>Linea temporal</h2>
      <div className={styles.timeline}>
        <TimelineItem
          titulo="Operador Técnico e Integrador IT"
          fecha="Ene 2020 - Actualidad"
          texto="Inicio en la Corporación Audvintech. Consolidación operativa mediante la configuración de redes LAN, enrutamiento IP y resolución de incidencias críticas en entornos de alta presión."
        />
        <TimelineItem
          titulo="Transición a Ingeniería y Desarrollo Full Stack"
          fecha="2022 - 2024"
          texto="Ingreso a la Ingeniería en Informática (UNEXCA). Desarrollo y despliegue del Sistema de Automatización de Presupuestos (Stack PERN) para digitalizar la lógica de negocio interna de Audvintech."
        />
        <TimelineItem
          titulo="Titulación TSU y Especialización"
          fecha="2025"
          texto="Finalización y obtención del título de Técnico Superior Universitario en Informática. Profundización técnica respaldada con certificaciones en desarrollo Backend (C#, .NET, POO) y Frontend (React.js, UI/UX)."
        />
        <TimelineItem
          titulo="Arquitecturas Complejas y Proyectos en Curso"
          fecha="2025 - Actualidad"
          texto="Continuidad hacia la titulación como Ingeniero en Informática, proyectada para 2027. Desarrollo activo de Finance Flow, estructurando el backend con ASP.NET Core, Entity Framework Core y traduciendo interfaces de Figma a React.js."
        />
      </div>
    </Seccion>
  );
}

function TimelineItem(props) {
  const { titulo, fecha, texto, imgs = null } = props;
  return (
    <div className={styles.timeline_item}>
      <h3>{titulo}</h3>
      <span>
        <i>{fecha}</i>
      </span>
      <p>{texto}</p>
      {imgs && (
        <div className={styles.timeline_imgs}>
          {imgs.map((img, index) => (
            <img
              style={{
                width: "45%",
                height: "auto",
                borderRadius: "8px",
                margin: "8px",
              }}
              key={index}
              src={img}
              alt={`Imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
