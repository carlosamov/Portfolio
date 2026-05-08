import React from "react";

import Seccion from "../../Base/Seccion/Seccion";

import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

export default function Habilidades() {
  const ctx = useGlobalContext();
  return (
    <Seccion style="column">
      <h2 ref={ctx.refs.proyectos}>
        Proyectos Destacados y Habilidades Aplicadas
      </h2>
    </Seccion>
  );
}
