import React from "react";

import { useGlobalContext } from "./componentes/GlobalContex.jsx";

import "./App.css";
import Header from "./componentes/Header.jsx";
import Presentacion from "./componentes/Presentacion.jsx";
import Habilidades from "./componentes/Habilidades.jsx";

export default function App() {
  const ctx = useGlobalContext();

  React.useEffect(() => {
    document.body.className = ctx.theme;
  }, [ctx.theme]);

  return (
    <>
      <Header />
      <Presentacion />
      <Habilidades />
    </>
  );
}
