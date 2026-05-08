import React from "react";

import { useGlobalContext } from "../../../Contexto/GlobalContext.jsx";

export default function Habilidades() {
  const ctx = useGlobalContext();
  return (
    <section style="column">
      <h2 ref={ctx.refs.proyectos}>
        Proyectos Destacados y Habilidades Aplicadas
      </h2>
    </section>
  );
}
