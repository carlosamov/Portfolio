import React, { useEffect } from "react";

import "./habilidades.css";

import GestionEstudiantes from "../../Organismos/Gestion Estudiantes/GestionEstudiantes";
import AutomatizacionPresupuestos from "../../Organismos/Automatizacion Presupuestos/AutomatizacionPresupuestos";
import CarreraUniversitaria from "../../Organismos/Carrera Academica/CarreraAcademica";

import NavBar from "../../Moléculas/NavBar/NavBar";
import { BotonNavBar } from "../../Atomos/Boton/Boton";
import Seccion from "../../Moléculas/Seccion/Seccion";

export default function Habilidades() {
  const [page, setPage] = React.useState(1);

  return (
    <Seccion style="column">
      <h2>Proyectos Destacados y Habilidades Aplicadas</h2>
      <NavBar>
        <BotonNavBar selected={page === 1} onClick={() => setPage(1)}>
          Sistema de Gestión de Estudiantes
        </BotonNavBar>
        <BotonNavBar selected={page === 3} onClick={() => setPage(2)}>
          Sistema de Automatización de Presupuestos
        </BotonNavBar>
        <BotonNavBar selected={page === 3} onClick={() => setPage(3)}>
          Carrera Academica
        </BotonNavBar>
      </NavBar>
      {page == 1 && <GestionEstudiantes />}
      {page == 2 && <AutomatizacionPresupuestos />}
      {page == 3 && <CarreraUniversitaria />}
    </Seccion>
  );
}
