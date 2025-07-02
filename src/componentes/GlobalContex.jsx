import React from "react";

// Crear el contexto
const GlobalContext = React.createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState({
    theme: "dark",
  });

  // Puedes agregar funciones para modificar el estado global
  const setTheme = (theme) => setState((prev) => ({ ...prev, theme }));

  return (
    <GlobalContext.Provider value={{ ...state, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useGlobalContext = () => React.useContext(GlobalContext);
