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
  };
  const scrollTo = (section) => {
    const offset = 120;
    const element = refs[section]?.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - offset;
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
