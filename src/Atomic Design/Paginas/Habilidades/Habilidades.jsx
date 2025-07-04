import React, { useEffect } from "react";

import "./habilidades.css";

import GestionEstudiantes from "../../Organismos/Gestion Estudiantes/GestionEstudiantes";
import AutomatizacionPresupuestos from "../../Organismos/Automatizacion Presupuestos/AutomatizacionPresupuestos";

import NavBar from "../../Moléculas/NavBar/NavBar";
import Boton from "../../Atomos/Boton/Boton";
import Seccion from "../../Moléculas/Seccion/Seccion";

export default function Habilidades() {
  const [page, setPage] = React.useState(1);

  return (
    <Seccion style="column">
      <h2>Proyectos Destacados y Habilidades Aplicadas</h2>
      <NavBar>
        <Boton
          style={page == 1 ? "btnNavBar selected" : "btnNavBar"}
          onClick={() => setPage(1)}
        >
          Sistema de Gestión de Estudiantes
        </Boton>
        <Boton
          style={page == 2 ? "btnNavBar selected" : "btnNavBar"}
          onClick={() => setPage(2)}
        >
          Sistema de Automatización de Presupuestos
        </Boton>
        <Boton
          style={page == 3 ? "btnNavBar selected" : "btnNavBar"}
          onClick={() => setPage(3)}
        >
          Carrera Academica
        </Boton>
      </NavBar>
      {page == 1 && <GestionEstudiantes />}
      {page == 2 && <AutomatizacionPresupuestos />}
      {page == 3 && <p>No</p>}
    </Seccion>
  );
}
