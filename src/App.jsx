import React from "react";

import { useGlobalContext } from "./Contexto/GlobalContext.jsx";

import "./App.css";
import Cabecera from "./Componentes/Secciones/Cabecera/Cabecera.jsx";
import Presentacion from "./Componentes/Secciones/Presentación/Presentacion.jsx";
import Habilidades from "./Componentes/Secciones/Habilidades/Habilidades.jsx";
import Certificaciones from "./Componentes/Secciones/Certificaciones/Certificaciones.jsx";
import Contacto from "./Componentes/Secciones/Contacto/Contacto.jsx";

export default function App() {
  const ctx = useGlobalContext();

  React.useEffect(() => {
    document.body.className = ctx.theme;
  }, [ctx.theme]);

  return (
    <>
      <Cabecera />
      <Presentacion />
      <Certificaciones />
      <Habilidades />
      <Contacto />
    </>
  );
}
