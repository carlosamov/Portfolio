import React from "react";

// Crear el contexto
const GlobalContext = React.createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState({
    theme: "dark",
  });
  const refs = {
    certificaciones: React.useRef(null),
    proyectos: React.useRef(null),
    header: React.useRef(null),
  };
  const scrollTo = (section) => {
    //Calculo para el offset dinamico
    const headerHeight = refs.header.current.getBoundingClientRect();
    const headerOffset = headerHeight.height || 0;
    const element = refs[section]?.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - headerOffset - 20;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Puedes agregar funciones para modificar el estado global
  const setTheme = (theme) => setState((prev) => ({ ...prev, theme }));

  return (
    <GlobalContext.Provider value={{ ...state, setTheme, refs, scrollTo }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useGlobalContext = () => React.useContext(GlobalContext);
