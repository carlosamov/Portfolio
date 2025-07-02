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

  //Logica para desplazamiento suave entre secciones
  const [desplazando, setDesplazando] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleScroll = (index) => {
    if (desplazando || index == page) return;
    setDesplazando(true);

    setTimeout(() => {
      setPage(index);
      setDesplazando(false);
    }, 500);
  };

  //Estilo de la navBar
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
          onClick={() => handleScroll(1)}
        >
          Sistema de Gestión de Estudiantes
        </button>
        <button
          style={page == 2 ? selected : undefined}
          className="nav 2"
          onClick={() => handleScroll(2)}
        >
          Sistema de Automatización de Presupuestos
        </button>
        <button
          style={page == 3 ? selected : undefined}
          className="nav 3"
          onClick={() => handleScroll(3)}
        >
          Carrera Academica
        </button>
      </div>
      <div className={`carrusel-deslizar ${desplazando ? "desplazando" : ""}`}>
        {page == 1 && <GestionEstudiantes />}
        {page == 2 && <AutomatizacionPresupuestos />}
        {page == 3 && <CarreraUniversitaria />}
      </div>
    </section>
  );
}

function GestionEstudiantes() {
  return (
    <div>
      <h2>Sistema de Gestión de Estudiantes</h2>

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
      </ul>
      <p>
        Gracias a este proyecto aprendí a interconectar los distintos elementos
        de una aplicación, siguiendo los patrones de diseño MVC.
      </p>
      <img
        className="img-estudiantes"
        src={imgEstudiantes}
        alt="Captura de estudiantes"
      />
    </div>
  );
}

function AutomatizacionPresupuestos() {
  return (
    <div>
      <h2>Automatización de Presupuestos (En Progreso)</h2>
      <p>
        Actualmente estoy creando una aplicacion web como proyecto académico
        para la creación de una plataforma para automatizar el proceso de
        elaboración y gestión de presupuestos.
      </p>
      <h3>Tecnológias Aplicadas</h3>
      <ul>
        <li>
          <b>Frontend con React:</b> Mi principal herramienta de creación de
          interfaces es React, domino los Hooks basicos como useState, useEffect
          o useMemo y entiendo el ciclo de vida del componente de manera sólida.
        </li>
        <li>
          <p>
            <b>Backend con Node.js:</b> Estoy diseñando en su totalidad la API
            RESTful usando Node.js con Express, para el servidor y Sequelize (un
            ORM para Node.js) para manipular la base de datos PostgreSQL.
          </p>
        </li>
      </ul>
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
        Gracias a este proyecto aprendí a crear una interacción más fluida entre
        componentes y afinar los conocimientos ya presentes de React.
      </p>
    </div>
  );
}

import imgUCAB from "../assets/LogoUCAB.png";
import imgUnity from "../assets/Unity.webp";
import imgUNEXCA from "../assets/Logo_Unexca.jpg";

function CarreraUniversitaria() {
  return (
    <>
      <h2>Carrera Académica</h2>
      <ul>
        <li>
          <h3>
            Universidad Católica Andres Bello (UCAB) -{" "}
            <i>Ingeniería en Computación</i>
          </h3>
          <div className="div-academica">
            <p>
              Cursé cinco semestres en esta institución, donde adquirí una
              sólida base en programación estructurada y algoritmos usando C++.
              Aprendí sobre estructuras de datos fundamentales y desarrollé un
              sistema de gestión de estudiantes como proyecto en consola, lo que
              me permitió afianzar mis primeros conocimientos aplicados.
            </p>
            <img
              id="img-ucab"
              className="img-academica"
              src={imgUCAB}
              alt="Logo de UCAB"
            />
          </div>
        </li>
        <li>
          <h3>
            Formación Autodidacta -{" "}
            <i>Programación Orientada a Objetos con C# y desarrollo en Unity</i>
          </h3>
          <div className="div-academica">
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
              id="img-unity"
              className="img-academica"
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
          <div className="div-academica">
            <p>
              Decidí retomar formalmente mis estudios y actualmente curso la
              carrera de Ingeniería en Informática. Durante esta etapa, he
              consolidado mis conocimientos a través del desarrollo de proyectos
              más robustos, como un Sistema de Gestión de Estudiantes y un
              Sistema de Automatización de Presupuestos, integrando lo aprendido
              en diseño de interfaces, estructuras lógicas y automatización de
              procesos.
            </p>
            <img
              id="img-unexca"
              className="img-academica"
              src={imgUNEXCA}
              alt="Logo de UNEXCA"
            />
          </div>
        </li>
      </ul>
    </>
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
