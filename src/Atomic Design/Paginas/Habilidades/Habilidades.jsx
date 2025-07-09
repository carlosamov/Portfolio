import React, { useEffect } from "react";

import GestionEstudiantes from "../../Organismos/Gestion Estudiantes/GestionEstudiantes";
import AutomatizacionPresupuestos from "../../Organismos/Automatizacion Presupuestos/AutomatizacionPresupuestos";
import CarreraAcademica from "../../Organismos/Carrera Academica/CarreraAcademica";

import NavBar from "../../Moléculas/NavBar/NavBar";
import { BotonNavBar } from "../../Atomos/Boton/Boton";
import Seccion from "../../Moléculas/Seccion/Seccion";

export default function Habilidades() {
  const [page, setPage] = React.useState(0);
  const scrollContainerRef = React.useRef(null);

  const handleScroll = (index) => {
    setPage(index);
    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth * index;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <Seccion style="column">
      <h2>Proyectos Destacados y Habilidades Aplicadas</h2>
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
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          width: "100%",
        }}
      >
        <div style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
          <GestionEstudiantes />
        </div>
        <div style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
          <AutomatizacionPresupuestos />
        </div>
        <div style={{ flex: "0 0 100%", scrollSnapAlign: "start" }}>
          <CarreraAcademica />
        </div>
      </div>
    </Seccion>
  );
}
