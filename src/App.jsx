import React from "react";

import { useGlobalContext } from "./Contexto/GlobalContext.jsx";

import "./App.css";
import Cabecera from "./Atomic Design/Paginas/Cabecera/Cabecera.jsx";
import Presentacion from "./Atomic Design/Paginas/Presentación/Presentacion.jsx";
import Habilidades from "./Atomic Design/Paginas/Habilidades/Habilidades.jsx";
import Certificaciones from "./Atomic Design/Paginas/Certificaciones/Certificaciones.jsx";
import Contacto from "./Atomic Design/Paginas/Contacto/Contacto.jsx";

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
