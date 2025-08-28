import React from "react";

import GestionEstudiantes from "../../Organismos/Gestion Estudiantes/GestionEstudiantes";
import AutomatizacionPresupuestos from "../../Organismos/Automatizacion Presupuestos/AutomatizacionPresupuestos";
import CarreraAcademica from "../../Organismos/Carrera Academica/CarreraAcademica";

import NavBar from "../../Moléculas/NavBar/NavBar";
import { BotonNavBar } from "../../Atomos/Boton/Boton";
import Seccion from "../../Moléculas/Seccion/Seccion";

import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

export default function Habilidades() {
  const [page, setPage] = React.useState(0);
  const [height, setHeight] = React.useState();
  const scrollContainerRef = React.useRef(null);
  const childrenRef = React.useRef([]);

  const ctx = useGlobalContext();

  const handleScroll = (index) => {
    setPage(index);
    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth * index;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    ctx.scrollTo("proyectos");

    console.log(childrenRef.current[index]?.offsetHeight);
    setHeight(childrenRef.current[index]?.offsetHeight + "px" || "auto");
  };

  React.useEffect(() => {
    setHeight(childrenRef.current[0]?.offsetHeight + "px" || "auto");
  }, []);

  return (
    <Seccion style="column">
      <h2 ref={ctx.refs.proyectos}>
        Proyectos Destacados y Habilidades Aplicadas
      </h2>
      <NavBar>
        <BotonNavBar selected={page === 0} onClick={() => handleScroll(0)}>
          Sistema de Gestión de Estudiantes
        </BotonNavBar>
        <BotonNavBar selected={page === 1} onClick={() => handleScroll(1)}>
          Sistema de Automatización de Presupuestos
        </BotonNavBar>
        <BotonNavBar selected={page === 2} onClick={() => handleScroll(2)}>
          Carrera Academica
        </BotonNavBar>
      </NavBar>
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          alignItems: "flex-start",
          overflow: "hidden",
          scrollSnapType: "x mandatory",
          width: "100%",
          height: height || "auto",
        }}
      >
        <div
          ref={(el) => {
            childrenRef.current[0] = el;
          }}
          style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
        >
          <GestionEstudiantes />
        </div>
        <div
          ref={(el) => {
            childrenRef.current[1] = el;
          }}
          style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
        >
          <AutomatizacionPresupuestos />
        </div>
        <div
          ref={(el) => {
            childrenRef.current[2] = el;
          }}
          style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}
        >
          <CarreraAcademica />
        </div>
      </div>
    </Seccion>
  );
}
