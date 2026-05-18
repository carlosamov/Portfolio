import React from "react";

import { useGlobalContext } from "./Contexto/GlobalContext.jsx";

import "./App.css";
import Cabecera from "./Componentes/Secciones/Cabecera/Cabecera.jsx";

//Nuevo contenido
import Hero from "./Componentes/Secciones/Rediseño de Secciones/Hero/Hero.jsx";
import Proyectos from "./Componentes/Secciones/Rediseño de Secciones/Proyectos/Proyectos.jsx";

export default function App() {
  const ctx = useGlobalContext();

  React.useEffect(() => {
    document.body.className = ctx.theme;
  }, [ctx.theme]);

  return (
    <>
      <Cabecera />
      <Hero />
      <Proyectos />
    </>
  );
}
