import React from "react";

import { useGlobalContext } from "./Contexto/GlobalContext.jsx";

import "./App.css";
import Cabecera from "./Componentes/Secciones/Cabecera/Cabecera.jsx";
import Presentacion from "./Componentes/Secciones/Presentación/Presentacion.jsx";
import Habilidades from "./Componentes/Secciones/Habilidades/Habilidades.jsx";
import Certificaciones from "./Componentes/Secciones/Certificaciones/Certificaciones.jsx";
import Contacto from "./Componentes/Secciones/Contacto/Contacto.jsx";

//Nuevo contenido
import Hero from "./Componentes/Secciones/Rediseño de Secciones/Hero/Hero.jsx";

export default function App() {
  const ctx = useGlobalContext();

  React.useEffect(() => {
    document.body.className = ctx.theme;
  }, [ctx.theme]);

  const estiloSeccion = {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        };

  return (
    <>
      <Cabecera />
      <div style={estiloSeccion}>
        <Hero />
      </div>
    </>
  );
}
