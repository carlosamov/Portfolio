import React, { useEffect } from "react";

import "./estilos/habilidades.css";

import imgEstudiantes from "../assets/GestionEstudiantes.jpeg";

import imgLogin from "../assets/Login.png";
import imgPresupuesto from "../assets/Presupuesto.png";
import imgPresupuestos from "../assets/Presupuestos.png";
import imgProductos from "../assets/Productos.png";
import imgUsuarios from "../assets/Usuarios.png";

export default function Habilidades() {
  const [page, setPage] = React.useState(1);

  const selected = {
    backgroundColor: "var(--main-secondary)",
    color: "var(--main-text)",
  };

  return (
    <section className="habilidades">
      <h2>Proyectos Destacados y Habilidades Aplicadas</h2>
      <div className="NavBar">
        <button
          style={page == 1 ? selected : undefined}
          className="nav 1"
          onClick={() => setPage(1)}
        >
          Sistema de Gestión de Estudiantes
        </button>
        <button
          style={page == 2 ? selected : undefined}
          className="nav 2"
          onClick={() => setPage(2)}
        >
          Sistema de Automatización de Presupuestos
        </button>
        <button
          style={page == 3 ? selected : undefined}
          className="nav 3"
          onClick={() => setPage(3)}
        >
          Carrera Academica
        </button>
      </div>
      {page == 1 && <GestionEstudiantes />}
      {page == 2 && <AutomatizacionPresupuestos />}
      {page == 3 && <p>No</p>}
    </section>
  );
}

function GestionEstudiantes() {
  return (
    <div>
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
    </div>
  );
}

function AutomatizacionPresupuestos() {
  return (
    <div>
      <h2>Automatización de Presupuestos (En Progreso)</h2>
      <Carousel
        images={[
          imgLogin,
          imgPresupuestos,
          imgPresupuesto,
          imgProductos,
          imgUsuarios,
        ]}
      />
      <p>
        Se desarrolló una aplicacion web como proyecto académico para la
        creación de una plataforma para automatizar el proceso de elbaroación y
        gestión de presupuestos.
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

import "./estilos/carousel.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Carousel(props) {
  const [index, setIndex] = React.useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % props.images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + props.images.length) % props.images.length);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prev}>
        <FaArrowAltCircleLeft />
      </button>
      <div className="carousel-container">
        <div
          className="carousel-frame"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {props.images.map((img, i) => (
            <img src={img} alt={"Slide " + i}></img>
          ))}
        </div>
      </div>

      <button className="next" onClick={next}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
}
