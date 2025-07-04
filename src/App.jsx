import React from "react";

import { useGlobalContext } from "./Contexto/GlobalContex.jsx";

import "./App.css";
import Cabecera from "./Atomic Design/Paginas/Cabecera/Cabecera.jsx";
import Presentacion from "./Atomic Design/Paginas/Presentación/Presentacion.jsx";
import Habilidades from "./Atomic Design/Paginas/Habilidades/Habilidades.jsx";

export default function App() {
  const ctx = useGlobalContext();

  React.useEffect(() => {
    document.body.className = ctx.theme; // Default theme
  }, [ctx.theme]);

  return (
    <>
      <Cabecera />
      <Presentacion />
      <Habilidades />
    </>
  );
}
