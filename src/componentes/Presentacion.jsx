import React from "react";

import "./estilos/presentacion.css";

import imgCarlos from "../assets/foto de perfil.jpeg";

export default function Presentacion() {
  return (
    <section className="presentacion">
      <div className="texto">
        <h2 style={{ fontSize: "20px", margin: "0" }}>¡Hola! Soy</h2>
        <h1 style={{ fontSize: "60px", margin: "0" }}>Carlos Ovalles</h1>
        <p>
          Desarrollador web apasionado por crear experiencias digitales
          atractivas y funcionales. Bienvenido a mi portafolio, donde podrás
          conocer mis proyectos y habilidades.
        </p>
        <h2>Sobre Mi</h2>
        <p>
          Soy un desarrollador web con experiencia en la creación de
          aplicaciones y sitios web. Me apasiona aprender nuevas tecnologías y
          mejorar mis habilidades.
        </p>
      </div>

      <div className="blob-bg">
        <img src={imgCarlos} alt="Carlos Ovalles" />
      </div>
    </section>
  );
}
